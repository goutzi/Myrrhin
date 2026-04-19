# Myrrhin — Claude Context

## What is Myrrhin?

Myrrhin is a maritime shipping education startup. It's a pre-launch initiative building industry-grade educational programmes for maritime professionals and students worldwide. The landing page is the primary public-facing artefact at this stage.

## Founders

- **Argyris Dimopoulos** — Founder. Deep background in commercial shipping operations and industry training.
- **Niko Gkoutziamanis** — Co-Founder. Background in maritime business and commercial strategy.

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Framework | Next.js 15 (App Router)           |
| Language  | TypeScript                        |
| Styling   | Tailwind CSS v3                   |
| Fonts     | Noto Serif (via next/font/google) |
| Hosting   | GitHub Pages (static export)      |
| Repo      | https://github.com/goutzi/Myrrhin |

## Project Structure

```
src/
  app/
    globals.css       # Tailwind directives + scroll-behavior
    layout.tsx        # Root layout — fonts, metadata
    page.tsx          # Page composition (assembles components)
  components/
    Nav.tsx           # Fixed navbar
    Hero.tsx          # Full-height hero with badge
    About.tsx         # Mission copy + sticky email signup card
    Team.tsx          # Founder cards
    FinalCTA.tsx      # Dark navy CTA section with email form
    Footer.tsx        # Minimal footer
public/
  img/                # SVG logos and founder portraits
.github/
  workflows/
    deploy.yml        # GitHub Actions — builds and deploys to GitHub Pages
```

## Design System

### Colors (defined in `tailwind.config.ts`)

| Token    | Hex       | Usage                          |
|----------|-----------|--------------------------------|
| `navy`   | `#012d62` | Primary brand, text, backgrounds |
| `orange` | `#f79256` | Accents, CTAs, highlights      |
| `baltic` | `#0558a2` | Hover states                   |
| `ocean`  | `#1168ad` | Secondary blue, italic spans   |
| `light`  | `#f4f6fa` | Section backgrounds, input fills |

### Typography

- **Body / UI:** `font-sans` — Helvetica Neue, Helvetica, Arial (system stack)
- **Headings / Display:** `font-serif` — Noto Serif (loaded via next/font)
- Display text is `font-light` (300) with `italic` spans in `text-ocean` or `text-orange`

### Spacing rhythm

The original design uses 72px horizontal page padding (desktop) and 24px on mobile. In Tailwind: `px-[72px] max-md:px-6`. Major sections use `py-[120px]` desktop / `py-20` mobile.

## Deployment

GitHub Pages serves the static export from the `gh-pages` environment via GitHub Actions.

- **Trigger:** Any push to `main` automatically builds and deploys
- **Build command:** `npm run build` with env var `GITHUB_PAGES=true`
- **Output:** `./out` directory (Next.js static export)
- **BasePath:** `/Myrrhin` in production, empty in local dev
- **Live URL:** `https://goutzi.github.io/Myrrhin/`

> **One-time setup required:** In the GitHub repo → Settings → Pages, set the source to **"GitHub Actions"** (not a branch). This only needs to be done once.

## Development

```bash
npm run dev     # local dev server at http://localhost:3000
npm run build   # production build (static export to ./out)
npm run lint    # ESLint
```

## Mobile Optimization

All UI must be tested and optimized for mobile users on both Android and iOS Safari. Key requirements:

- Touch targets must be at least 44×44px for interactive elements
- Layouts must stack gracefully at the `max-md:` breakpoint (768px)
- Test on real devices or emulators for both Android Chrome and iOS Safari
- Avoid CSS features with inconsistent mobile support (e.g. `backdrop-filter` needs `-webkit-` prefix for Safari)
- Ensure smooth scrolling and scroll-linked behaviour works on iOS Safari

## Important Notes

- Images must be in `public/img/` and referenced as `/img/filename`
- `next/image` is used throughout with `unoptimized: true` (required for static export)
- Email forms are currently UI-only (`onSubmit` prevented). Functional email capture will need a service (e.g. Mailchimp, ConvertKit, Resend) wired up.
- The `img/` directory at the project root is an empty leftover — safe to delete manually.
