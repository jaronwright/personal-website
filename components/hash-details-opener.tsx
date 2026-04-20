"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashDetailsOpener() {
  const pathname = usePathname();

  useEffect(() => {
    const openFromHash = () => {
      if (!window.location.hash) return;
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = document.getElementById(id);
      if (el && el.tagName === "DETAILS") {
        const details = el as HTMLDetailsElement;
        if (!details.open) details.open = true;
        requestAnimationFrame(() => {
          details.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [pathname]);

  return null;
}
