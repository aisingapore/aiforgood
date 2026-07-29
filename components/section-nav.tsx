"use client";

import { useEffect, useState } from "react";

import { sectionDots } from "./site-nav-items";

/**
 * Right-hand dot rail. Appears past 120px of scroll and highlights whichever
 * tracked section currently occupies the most of the viewport.
 */
export function SectionNav() {
  const [activeId, setActiveId] = useState<string>("about");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Track each section's visible ratio and pick the largest, rather than
    // taking the first intersecting entry — that keeps the highlight stable
    // when two sections are on screen at once.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) ratios.set(id, entry.intersectionRatio);
          else ratios.delete(id);
        });

        let best = 0;
        let bestId = "";
        ratios.forEach((ratio, id) => {
          if (ratio > best) {
            best = ratio;
            bestId = id;
          }
        });
        if (bestId) setActiveId(bestId);
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-10% 0px -40% 0px",
      },
    );

    sectionDots.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`
        fixed right-4 lg:right-6 top-1/2 -translate-y-1/2
        z-40 flex flex-col gap-3
        transition-all duration-500
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
      `}
      aria-label="Section navigation"
    >
      {sectionDots.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (!el) return;
              setActiveId(id);
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-label={`Navigate to ${label}`}
            title={label}
            className=" group flex items-center justify-end gap-2 outline-none touch-manipulation "
          >
            <span className=" hidden md:block text-xs font-medium text-foreground bg-background border border-border rounded-md px-2 py-1 shadow-sm opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none ">
              {label}
            </span>
            <span
              className={`
                rounded-full shrink-0
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? "w-4 h-4 bg-primary scale-125 shadow-lg shadow-primary/40"
                    : "w-3 h-3 bg-border opacity-70 scale-100"
                }
              `}
            />
          </button>
        );
      })}
    </div>
  );
}
