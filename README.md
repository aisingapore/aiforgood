# AI for Good — AI Singapore

Marketing site for AI Singapore's AI for Good initiative.
Single-page Next.js App Router app, statically prerendered.

> Reconstructed from the deployed site in July 2026 after the original working
> copy was lost — there were no source maps, so this was rebuilt from the
> prerendered HTML, the client bundle, and the compiled stylesheet, then
> verified pixel-for-pixel against production at three viewports.
>
> A detailed recovery report (what was inferred, what was recovered only from
> the JS bundle, and the known deviations) is kept outside this repo alongside
> the byte-exact mirror of the old deployment. Ask the team for `RECOVERY.md`
> if you need it — the two notes below are the parts that affect day-to-day
> work.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (prerenders / to static HTML)
npm start        # serve the build
```

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 + shadcn/ui (`new-york`, neutral base) + `tw-animate-css`
- `lucide-react` for icons — **pinned exactly**, see below
- Geist / Geist Mono via `next/font/google`
- `@vercel/analytics`

Deployed on Vercel. The image optimizer is off (`next.config.ts`); images are
served directly from `public/`.

## Layout

```
app/
  layout.tsx        root layout, fonts, metadata
  page.tsx          composes every section; owns the scroll-reveal
                    and click-ripple observers
  globals.css       theme tokens, keyframes, custom utilities
components/
  navbar.tsx                  sticky top bar + mobile drawer
  scroll-progress.tsx         gradient progress bar
  section-nav.tsx             right-hand dot rail (scroll-spy)
  scroll-to-top.tsx           floating back-to-top button
  hero-section.tsx            #about
  challenge-section.tsx       #approach
  theory-of-change-section.tsx
  sdg4-section.tsx
  impact-section.tsx          #impact
  programmes-section.tsx      #programs — tabbed
  alliance-section.tsx        #partners
  collaboration-section.tsx
  gallery-section.tsx         #gallery — shuffled grid + lightbox
  contact-section.tsx         #contact
  site-footer.tsx
  typewriter.tsx              client-side typing effect
  programmes-data.ts          programme content
  gallery-data.ts             gallery pool, pagination, shuffle
  site-nav-items.ts           nav + dot-rail definitions
  ui/                         shadcn primitives (button, badge)
lib/utils.ts                  cn() helper
```

## Things worth knowing before you edit

**Editing content.** Programme copy, testimonials and collaborators live in
`components/programmes-data.ts`. Gallery images and captions live in
`components/gallery-data.ts`. Nav labels live in `components/site-nav-items.ts`.
Most other copy is inline in its section component.

**`lucide-react` is pinned to an exact version, deliberately.** Icon geometry
changed in the releases immediately either side of `0.570.0` (`building-2` after,
`coins` before). Bumping it will silently change how icons draw. If you do
upgrade, diff the icons visually.

**Colours are authored in oklch and four are outside sRGB.** `--accent`,
`--destructive`, `--chart-2` and `--chart-4` are wider than sRGB, so the hex
values in the comments in `globals.css` are duller approximations — they are
there for reference only. Edit the oklch values, not the comments.

**Scroll-reveal is global.** Adding `reveal`, `reveal-left`, `reveal-right`,
`reveal-scale` or `heading-underline` to any element opts it into the animation;
the observer in `app/page.tsx` picks it up automatically. `data-delay="1".."7"`
staggers siblings. The gallery runs its own observer because its contents swap
between pages.

**Click ripples are delegated.** Add `ripple` to any element and the
document-level handler in `app/page.tsx` does the rest.

**The hero paragraph renders empty on the server.** It is typed out on the
client, so it will not appear in static HTML or to a non-JS crawler. Keep
anything SEO-critical in the metadata or in adjacent copy.

**The gallery shuffles on mount.** Order is deliberately randomised after
hydration so the server and first client render agree. Three photos are pinned
to the large grid cells via `buildPage()`.

## Not currently set up

`robots.txt`, `sitemap.xml` and a real `favicon.ico` are all absent — this
matches production, where they 404. The favicon presently falls back to
`og-image.png` (464×306), which is not a good icon.
