import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// TODO: Replace with your new Google Analytics ID (or remove this file's
// usage if you don't want page tracking yet).
const GA_ID = 'G-XXXXXXXXXX';

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
