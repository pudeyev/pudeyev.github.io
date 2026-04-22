import { useEffect } from "react";
import { useLocation } from "react-router";

declare global {
  interface Window {
    _paq: Array<Array<string | number>>;
  }
}

const MATOMO_URL = import.meta.env.VITE_MATOMO_URL;
const MATOMO_SITE_ID = import.meta.env.VITE_MATOMO_SITE_ID;
const SCRIPT_SELECTOR = 'script[data-matomo-script="true"]';

let matomoInitialized = false;

function normalizeMatomoUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export function MatomoTracker() {
  const location = useLocation();

  useEffect(() => {
    if (matomoInitialized || !MATOMO_URL || !MATOMO_SITE_ID) {
      return;
    }

    const matomoBaseUrl = normalizeMatomoUrl(MATOMO_URL);
    window._paq = window._paq || [];
    window._paq.push(["setTrackerUrl", `${matomoBaseUrl}/matomo.php`]);
    window._paq.push(["setSiteId", MATOMO_SITE_ID]);

    if (!document.querySelector(SCRIPT_SELECTOR)) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.src = `${matomoBaseUrl}/matomo.js`;
      script.setAttribute("data-matomo-script", "true");
      document.head.appendChild(script);
    }

    matomoInitialized = true;
  }, []);

  useEffect(() => {
    if (!MATOMO_URL || !MATOMO_SITE_ID || !window._paq) {
      return;
    }

    const currentPath = `${location.pathname}${location.search}${location.hash}`;
    window._paq.push(["setCustomUrl", currentPath]);
    window._paq.push(["setDocumentTitle", document.title]);
    window._paq.push(["trackPageView"]);
  }, [location]);

  return null;
}
