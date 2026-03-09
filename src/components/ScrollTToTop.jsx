// File: src/components/ScrollToTop.js (or your path to it)

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // --- START: NEW LOGIC FOR REDIRECTING ON RELOAD ---
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isPageReloaded = navigationEntry?.type === "reload";

    // Check if the page was reloaded AND if we are on a sub-page
    if (isPageReloaded && location.pathname !== '/') {
      console.log(`Reload detected on sub-page (${location.pathname}). Redirecting to root.`);
      // If so, navigate to the homepage and stop further execution for this render.
      navigate('/');
      return; 
    }
    // --- END: NEW LOGIC ---


    // --- This is the original scroll logic from our previous steps ---
    // It will run on initial load, on normal navigation, and AFTER the redirect completes.
    const timer = setTimeout(() => {
      const scrollToId = location.state?.scrollToId;

      if (scrollToId) {
        const el = document.getElementById(scrollToId);
        if (el) {
          console.log(`Scrolling to element: #${scrollToId}`);
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log(`Element #${scrollToId} not found, scrolling to top.`);
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      } else {
        // Default behavior: scroll to the top of the page
        console.log(`Scrolling to top of the page for path: ${location.pathname}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 0);

    return () => clearTimeout(timer);

  }, [location.pathname, location.state, navigate]); // Add navigate to the dependency array

  return null; // This component still renders nothing
}

export default ScrollToTop;