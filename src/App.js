import React from "react";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import DesktopPCs from "./pages/Products/DesktopPCs";
import Laptops from "./pages/Products/Laptops";
import MiniPCs from "./pages/Products/MiniPCs";
import Monitors from "./pages/Products/Monitors";
import GamingPCs from "./pages/Products/GamingPCs";
import PCAccessories from "./pages/Products/PCAccessories";
import OtherTech from "./pages/Products/OtherTech";
import ShopAll from "./pages/Products/ShopAll";
import ProductPage from "./pages/Products/ProductPage";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import usePageTracking from "./utils/usePageTracking"; // 👈 import the new hook

import "./App.css";

function AppWrapper() {
  usePageTracking(); // 👈 Call the hook inside the router context

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/desktop-pcs" element={<DesktopPCs />} />
        <Route path="/products/laptops" element={<Laptops />} />
        <Route path="/products/mini-pcs" element={<MiniPCs />} />
        <Route path="/products/monitors" element={<Monitors />} />
        <Route path="/products/gaming-pcs" element={<GamingPCs />} />
        <Route path="/products/pc-accessories" element={<PCAccessories />} />
        <Route path="/products/other-tech" element={<OtherTech />} />
        <Route path="/products/all" element={<ShopAll />} />
        <Route path="/products/:handle" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppWrapper />
      </Router>
    </CartProvider>
  );
}

export default App;
