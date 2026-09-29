"use client";

import { useEffect } from "react";

export const ScrollController = () => {
  useEffect(() => {
    // Disable automatic browser scroll restoration so page always opens at top
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If there is no hash or a hash was lingering in history, start at top on fresh visit
    if (typeof window !== "undefined") {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      } else {
        // Clear lingering hash so subsequent visits/reloads start at hero
        window.history.replaceState(null, "", window.location.pathname);
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return null;
};
