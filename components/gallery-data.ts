export type GalleryItem = {
  kind: "image" | "video";
  src: string;
  alt: string;
  /** Video-only: still shown before playback. */
  poster?: string;
};

/**
 * Always-pinned items. These are spliced into fixed slots by `buildPage()` so
 * the strongest photos land in the large grid cells regardless of shuffling.
 */
export const featuredItems: GalleryItem[] = [
  {
    kind: "image",
    src: "/gallery/aira-feature.jpg",
    alt: "AI for Good Alliance awards ceremony",
  },
  {
    kind: "image",
    src: "/gallery/asean-002.jpg",
    alt: "AI Ready ASEAN Youth Challenge group photo",
  },
  {
    kind: "image",
    src: "/gallery/festival-001.png",
    alt: "AI for Good Festival partners group photo on stage",
  },
];

/** The shuffled pool. Featured items above are deliberately not in here. */
export const galleryPool: GalleryItem[] = [
  {
    kind: "image",
    src: "/gallery/educator-001.jpg",
    alt: "AI for Good (Educator) workshop session",
  },
  {
    kind: "image",
    src: "/gallery/educator-002.jpg",
    alt: "AI for Good (Educator) participants collaborating",
  },
  {
    kind: "image",
    src: "/gallery/educator-003.jpg",
    alt: "AI for Good (Educator) group discussion",
  },
  {
    kind: "image",
    src: "/gallery/youth-001.jpg",
    alt: "AI for Good (Youth) programme session",
  },
  {
    kind: "image",
    src: "/gallery/youth-003.jpg",
    alt: "AI for Good (Youth) team photo",
  },
  {
    kind: "image",
    src: "/gallery/youth-006.jpg",
    alt: "AI for Good (Youth) hands-on learning",
  },
  {
    kind: "image",
    src: "/gallery/fund-002.jpg",
    alt: "AI Opportunity Fund Asia-Pacific convening",
  },
  {
    kind: "image",
    src: "/gallery/fund-004.jpg",
    alt: "AI Opportunity Fund Asia-Pacific group photo",
  },
  {
    kind: "image",
    src: "/gallery/fund-005.jpg",
    alt: "AI Opportunity Fund Asia-Pacific workshop",
  },
  {
    kind: "image",
    src: "/gallery/asean-001.jpg",
    alt: "AI Ready ASEAN National Policy Convening roundtable",
  },
  {
    kind: "image",
    src: "/gallery/asean-003.jpg",
    alt: "AI Ready ASEAN Training-of-Trainers programme",
  },
  {
    kind: "image",
    src: "/gallery/asean-004.jpg",
    alt: "AI Ready ASEAN National Policy Convening address",
  },
  {
    kind: "image",
    src: "/gallery/community-001.jpg",
    alt: "AI for Good (Community) Train-the-Trainers group photo",
  },
  {
    kind: "image",
    src: "/gallery/community-030.jpg",
    alt: "AI for Good (Community) collaborative session",
  },
  {
    kind: "image",
    src: "/gallery/community-050.jpg",
    alt: "AI for Good (Community) team gathering",
  },
  {
    kind: "image",
    src: "/gallery/festival-002.png",
    alt: "AI for Good Festival Guest-of-Honour address with audience",
  },
  {
    kind: "image",
    src: "/gallery/festival-003.png",
    alt: "AI for Good Festival youth-led AI innovation showcase at Republic Polytechnic",
  },
];

const featuredBySrc = Object.fromEntries(
  featuredItems.map((item) => [item.src, item]),
);

/**
 * Interleave the three featured items into fixed positions in `pool`, giving a
 * stable 20-item layout: featured photos land at indices 0, 2 and 10, which are
 * the slots `LARGE_CELLS` promotes to 2x2 tiles.
 */
export function buildPage(pool: GalleryItem[]): GalleryItem[] {
  const head = pool.slice(0, 8);
  const tail = pool.slice(8);
  return [
    featuredBySrc["/gallery/aira-feature.jpg"],
    head[0],
    featuredBySrc["/gallery/asean-002.jpg"],
    ...head.slice(1),
    featuredBySrc["/gallery/festival-001.png"],
    ...tail.slice(0, 9),
  ];
}

/** Fisher-Yates. Runs client-side only, so SSR and first paint stay stable. */
export function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Indices within each page that render as 2x2 tiles. */
export const LARGE_CELLS: Record<number, number[]> = { 0: [0, 2], 1: [0] };

export const REVEAL_VARIANTS = [
  "reveal",
  "reveal-left",
  "reveal-right",
  "reveal-scale",
];

export const PAGE_SIZE = 10;
export const PAGE_COUNT = 2;
/** Auto-advance interval, paused on hover or while the lightbox is open. */
export const ROTATE_MS = 6000;
