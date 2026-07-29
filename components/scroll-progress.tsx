"use client";

import { useEffect, useState } from "react";

/** Shimmering 3px bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setProgress(
        Math.min(
          100,
          Math.max(0, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100),
        ),
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, oklch(0.65 0.22 35), oklch(0.75 0.22 55), oklch(0.65 0.22 35))",
          backgroundSize: "200% 100%",
          animation: "shimmer 2.5s linear infinite",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
