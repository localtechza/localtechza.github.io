import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_ID } from '../config';

// Fires a page_view to Google Analytics on every route change.
// GA only MEASURES visitors — it does not affect whether Google can find the
// site (that is the router + sitemap). Nothing is sent until a real
// G-XXXXXXXXXX id replaces the placeholder in src/config.js.
export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag || !GA_ID || GA_ID.includes('XXXX')) return;
    window.gtag('config', GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}
