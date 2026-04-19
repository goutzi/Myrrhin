# Myrrhin — Claude Context

## What is Myrrhin?

Myrrhin is a maritime shipping education startup. Pre-launch, building industry-grade educational programmes for maritime professionals and students worldwide. The landing page is the primary public-facing artefact.

## Founders

- **Argyris Dimopoulos** — Founder. Commercial shipping operations and industry training.
- **Niko Gkoutziamanis** — Co-Founder. Maritime business and commercial strategy.

## Tech Stack

| Layer    | Technology                               |
|----------|------------------------------------------|
| Framework | Next.js 15 (App Router, static export) |
| Language  | TypeScript                             |
| Styling   | Tailwind CSS v3                        |
| Fonts     | Noto Serif via next/font/google        |
| Backend   | Supabase (email signups only)          |
| Hosting   | GitHub Pages                           |
| Repo      | https://github.com/goutzi/Myrrhin      |

## Project Structure

```
src/
  app/
    globals.css         # Tailwind directives + scroll-behavior: smooth
    layout.tsx          # Root layout — Noto Serif font, metadata
    page.tsx            # Home page — assembles all sections
    events/
      page.tsx          # /events route — full calendar + list view ('use client')
  components/
    Nav.tsx             # Fixed navbar. Props: variant?: 'home' | 'inner'
                        #   'inner': logo links to /, hash links prefixed with /
                        #   Both variants show: About | Team | Events links
    Hero.tsx            # Full-height hero
    About.tsx           # Mission copy + UpcomingEvents card (right column, sticky)
    Team.tsx            # Founder cards
    Supporters.tsx      # BIMCO + University of Athens logos
    FinalCTA.tsx        # Dark navy CTA with EmailSignupForm (dark variant)
    Footer.tsx          # Minimal footer
    EmailSignupForm.tsx # Reusable form. Props: variant: 'light'|'dark', buttonLabel: string
                        #   Writes to Supabase table: email_signups
    UpcomingEvents.tsx  # Compact upcoming events card ('use client')
                        #   Shows up to 3 events, links to /events
    EventCalendar.tsx   # Month-grid calendar ('use client')
                        #   Props: onDayClick?: (date: string) => void
    EventList.tsx       # Upcoming/Past tabbed event list ('use client')
  data/
    events.ts           # Hardcoded event data + helpers
                        #   Interface: MyrEvent { id, title, date, time, location,
                        #              format: 'online'|'in-person', description, registrationUrl }
                        #   Exports: getUpcomingEvents(limit?), getPastEvents(), getEventsForMonth(y,m)
  lib/
    imgPath.ts          # imgPath(src) — prepends NEXT_PUBLIC_BASE_PATH for GitHub Pages
    supabase.ts         # Lazy Supabase client singleton
public/
  img/                  # SVGs and portraits (Wooshy_Only.svg, Myrrhin_Text_Only.svg,
                        #   BIMCO2016_Logo_RGB.svg, uni_athens_logo.jpg,
                        #   Dimopoulos_Portrait.jpg, Gkoutziamanis_Portrait.jpg)
```

## Design System

### Colors (`tailwind.config.ts`)

| Token    | Hex       | Usage                               |
|----------|-----------|-------------------------------------|
| `navy`   | `#012d62` | Primary brand, text, backgrounds    |
| `orange` | `#f79256` | Accents, CTAs, highlights           |
| `baltic` | `#0558a2` | Hover states                        |
| `ocean`  | `#1168ad` | Secondary blue, italic spans, links |
| `light`  | `#f4f6fa` | Section backgrounds, input fills    |

### Typography

- **Body/UI:** `font-sans` — Helvetica Neue system stack
- **Headings:** `font-serif` — Noto Serif, `font-light` (300), italic spans in `text-ocean` or `text-orange`

### Spacing

- Horizontal: `px-[72px] max-md:px-6`
- Vertical: `py-[120px] max-md:py-20`
- Content max-width: `max-w-[1100px] mx-auto` (or `max-w-[1200px]` for full-bleed sections)

### Component patterns

- **Cards:** `rounded-[20px] border border-navy/[0.08] hover:border-navy/[0.16] hover:shadow-[0_8px_40px_rgba(1,45,98,0.08)]`
- **Elevated cards:** `shadow-[0_2px_40px_rgba(1,45,98,0.08),0_0_0_1px_rgba(1,45,98,0.06)]`
- **Section labels:** `text-[11px] font-semibold tracking-[0.14em] uppercase text-orange`
- **Pill buttons:** `px-5 py-2 rounded-full bg-navy text-white text-[13px] font-medium hover:bg-baltic`
- **Format badges:** in-person = `bg-orange/15 text-orange`, online = `bg-ocean/15 text-ocean`

## Routing

- `/` — single-page landing (hash anchors: `#about`, `#team`, `#stay-updated`)
- `/events` — full events page (calendar + tabbed list)
- All `next/link` calls handle basePath automatically — no manual prefixing needed except hash links from inner pages (use `/#about` etc.)

## Events

Events are hardcoded in `src/data/events.ts`. Each event **requires** a `registrationUrl`. To add/edit events, update the `events` array in that file — no other changes needed.

## Deployment

- **Trigger:** Push to `main` → GitHub Actions builds and deploys automatically
- **Build:** `npm run build` with `GITHUB_PAGES=true` → outputs to `./out`
- **BasePath:** `/Myrrhin` in production, empty in local dev
- **Live URL:** `https://goutzi.github.io/Myrrhin/`

## Development

```bash
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
npm run lint    # ESLint
```

> **Important:** Never run `npm run build` while the dev server is running — it corrupts the `.next` cache. If this happens, kill the dev server, run `rm -rf .next`, then restart with `npm run dev`.

## Mobile Optimization

All UI must work on Android Chrome and iOS Safari.

- Touch targets ≥ 44×44px
- Layouts stack at `max-md:` (768px)
- `backdrop-filter` needs `-webkit-` prefix for Safari
- Smooth scrolling must work on iOS Safari

## Important Notes

- All images go in `public/img/` — reference as `/img/filename` and wrap with `imgPath()`
- `next/image` not used — plain `<img>` with `imgPath()` throughout
- Email signup writes to Supabase `email_signups` table via `EmailSignupForm`
- Supabase credentials in `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
