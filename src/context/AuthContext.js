// src/context/AuthContext.js
// Email-only accounts for LocalTech (no passwords).
//
// A session token (issued by the backend at checkout or after the customer
// enters the 6-digit code we emailed them) lives in localStorage. Every
// session belongs to one email address, so it sees all of that address's
// orders — they stack in the profile with their own status history.
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { BACKEND_URL } from "../config";

const AuthContext = createContext(null);
const TOKEN_KEY = "lt_token";

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
    const [email, setEmail] = useState(null);
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(Boolean(localStorage.getItem(TOKEN_KEY)));

    // Ask the backend who this token belongs to (and drop it if it's dead)
    useEffect(() => {
        let cancelled = false;
        if (!token) {
            setEmail(null);
            setVerified(false);
            setLoading(false);
            return undefined;
        }
        setLoading(true);
        fetch(`${BACKEND_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => (res.ok ? res.json() : Promise.reject(new Error("bad token"))))
            .then((data) => {
                if (cancelled) return;
                setEmail(data.email);
                setVerified(Boolean(data.verified));
            })
            .catch(() => {
                if (cancelled) return;
                localStorage.removeItem(TOKEN_KEY);
                setToken(null);
                setEmail(null);
                setVerified(false);
            })
            .finally(() => !cancelled && setLoading(false));

        return () => {
            cancelled = true;
        };
    }, [token]);

    const signIn = useCallback((newToken) => {
        if (!newToken) return;
        localStorage.setItem(TOKEN_KEY, newToken);
        setToken(newToken);
    }, []);

    const signOut = useCallback(() => {
        if (token) {
            // Best effort — telling the server kills the session server-side
            fetch(`${BACKEND_URL}/auth/logout`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            }).catch(() => {});
        }
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setEmail(null);
        setVerified(false);
    }, [token]);

    return (
        <AuthContext.Provider
            value={{
                token,
                email,
                verified,
                loading,
                isSignedIn: Boolean(token),
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
