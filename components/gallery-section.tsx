"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  buildPage,
  galleryPool,
  shuffle,
  LARGE_CELLS,
  PAGE_COUNT,
  PAGE_SIZE,
  REVEAL_VARIANTS,
  ROTATE_MS,
} from "./gallery-data";

/**
 * Masonry-ish photo grid that auto-advances between two pages, with a lightbox
 * supporting arrow-key navigation. Order is shuffled on mount (client-side
 * only, so the server render stays deterministic).
 */
export function GallerySection() {
  const [items, setItems] = useState(() => buildPage([...galleryPool]));
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const start = page * PAGE_SIZE;
  const visible = items.slice(start, start + PAGE_SIZE);

  // Shuffle after hydration so SSR markup and the first client render match.
  useEffect(() => {
    setMounted(true);
    setItems(buildPage(shuffle(galleryPool)));
  }, []);

  // Auto-advance, paused while hovering or with the lightbox open.
  useEffect(() => {
    if (hovered || lightboxIndex !== null) return;
    const timer = window.setInterval(() => {
      setPage((p) => (p + 1) % PAGE_COUNT);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [hovered, lightboxIndex, page]);

  // Re-run reveal animations whenever the visible set changes.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const targets = Array.from(grid.querySelectorAll("[data-reveal]"));
    targets.forEach((el) => el.classList.remove("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items, page]);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length],
  );

  // Keyboard controls + scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowLeft") prev();
      else if (event.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex, close, prev, next]);

  const active = lightboxIndex === null ? null : visible[lightboxIndex];

  return (
    <section
      id="gallery"
      className="section-warm py-24 border-t border-border overflow-hidden"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setHovered(false);
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <Badge variant="secondary" className="mb-4">
            Moments &amp; milestones
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 heading-underline text-balance">
            Photos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Highlights from our programmes, trainings, and community moments
            across the region.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 [grid-auto-rows:140px] sm:[grid-auto-rows:165px] [grid-auto-flow:dense]"
          aria-label="Photo and video gallery"
        >
          {visible.map((item, index) => {
            const revealVariant =
              REVEAL_VARIANTS[index % REVEAL_VARIANTS.length];
            const delay = String((index % 7) + 1);
            const isLarge = LARGE_CELLS[page]?.includes(index) ?? false;

            return (
              <figure
                key={`${item.src}-${index}`}
                data-reveal
                data-delay={delay}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm card-hover-glow cursor-pointer ${revealVariant} ${
                  isLarge ? "col-span-2 row-span-2" : "row-span-1"
                }`}
                onClick={() => setLightboxIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
                aria-label={`Open ${item.alt}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none" />

                {item.kind === "video" ? (
                  <>
                    {item.poster ? (
                      <Image
                        src={item.poster}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    )}
                    <span className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-5 w-5 translate-x-0.5 fill-current" />
                      </span>
                    </span>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={isLarge}
                    sizes={
                      isLarge
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    }
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                )}
              </figure>
            );
          })}
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5 reveal"
          role="tablist"
          aria-label="Gallery pages"
        >
          {Array.from({ length: PAGE_COUNT }, (_, i) => {
            const isCurrent = i === page;
            return (
              <button
                key={i}
                onClick={() => setPage(i)}
                role="tab"
                aria-selected={isCurrent}
                aria-label={`Go to gallery page ${i + 1}`}
                className={`rounded-full transition-all duration-300 ease-out ${
                  isCurrent
                    ? "w-6 h-2.5 bg-primary shadow-sm shadow-primary/40"
                    : "w-2.5 h-2.5 bg-border hover:bg-primary/50"
                }`}
              />
            );
          })}
        </div>

        {mounted && (
          <p className="mt-5 text-center text-xs text-muted-foreground/80 reveal">
            Page {page + 1} of {PAGE_COUNT}
          </p>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-5xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto flex max-h-[80vh] w-full items-center justify-center">
              {active.kind === "video" ? (
                <video
                  src={active.src}
                  poster={active.poster}
                  controls
                  autoPlay
                  className="max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
              )}
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/60">
              {(lightboxIndex ?? 0) + 1} / {visible.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
