import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Google Analytics komponenta
 * 
 * Použití:
 * 1. Získejte Google Analytics Measurement ID (např. G-XXXXXXXXXX)
 * 2. Nahraďte 'GA_MEASUREMENT_ID' ve funkci níže
 * 3. Přidejte komponentu do App.tsx nebo RootLayout.tsx
 */

// Google Analytics Measurement ID - NAHRAĎTE SVÝM ID
const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

// Deklarace pro gtag funkci
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Načtení Google Analytics skriptu
    if (GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID') {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(script2);
    }
  }, []);

  // Sledování změn stránky (pageview)
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

/**
 * Facebook Pixel komponenta
 * 
 * Použití:
 * 1. Získejte Facebook Pixel ID
 * 2. Nahraďte 'FB_PIXEL_ID' ve funkci níže
 */

const FB_PIXEL_ID = 'FB_PIXEL_ID';

declare global {
  interface Window {
    fbq?: (command: string, event: string, data?: Record<string, unknown>) => void;
    _fbq?: unknown;
  }
}

export function FacebookPixel() {
  const location = useLocation();

  useEffect(() => {
    if (FB_PIXEL_ID !== 'FB_PIXEL_ID') {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
}

/**
 * Pomocné funkce pro tracking eventů
 */

// Tracking kliknutí na externí odkazy (např. Herohero)
export const trackExternalLink = (url: string, label: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: 'External Link',
      event_label: label,
      value: url,
    });
  }
};

// Tracking zobrazení článku
export const trackArticleView = (articleId: string, articleTitle: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_item', {
      event_category: 'Article',
      event_label: articleTitle,
      value: articleId,
    });
  }
};

// Tracking video přehrávání
export const trackVideoPlay = (videoId: string, videoTitle: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'video_start', {
      event_category: 'Video',
      event_label: videoTitle,
      value: videoId,
    });
  }
};

// Tracking CTA akcí (např. "Přejít na Herohero")
export const trackCTA = (ctaName: string, ctaLocation: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: ctaName,
      value: ctaLocation,
    });
  }
};
