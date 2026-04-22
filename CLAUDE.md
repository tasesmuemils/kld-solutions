# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint check
npm run email      # Start react-email dev server (email template preview)
```

## Architecture

**Next.js 14 App Router** marketing/portfolio site for KLD Solutions (kldsolutions.lv), a 3D visualization and digital media agency.

### Internationalization

Routes are prefixed with locale via the `[locale]` dynamic segment. Two supported locales: `lv` (Latvian, default) and `en`. Config lives in `i18n/request.js`. Translation JSON files are in `messages/lv.json` and `messages/en.json`. The middleware handles locale routing; locale detection is disabled.

In components, translations are accessed with `useTranslations('SectionName')` from `next-intl`.

### Route Structure

All pages live under `src/app/[locale]/`. The root layout (`[locale]/layout.js`) mounts all providers, analytics scripts, Navbar, and Footer. The template (`[locale]/template.jsx`) wraps pages in a Framer Motion fade transition.

Pages: home, about, contact, services, maket (layout design), modeling (3D), video (animations).

### Styling

Tailwind CSS with dark mode via `class` strategy. Uses CSS custom properties (HSL-based) for theming — defined in `globals.css` and referenced in `tailwind.config.js`. Primary fonts are Lexend and Quicksand. shadcn/ui components live in `src/components/ui/`. The `cn()` utility (clsx + tailwind-merge) is at `src/lib/utils.js`.

### Animations

Two animation systems coexist:
- **Framer Motion** — page-level transitions
- **GSAP + ScrollTrigger** — scroll-driven animations and text splitting effects within components

**split-type** is used to split text nodes for character/word animations.

### State Management

Zustand for theme state only (`src/components/useThemeStore.jsx`). Local `useState` for everything else (forms, UI state).

### Contact Form / Email

The contact form uses **EmailJS** (client-side, no backend). Required env vars:
- `NEXT_PUBLIC_EMAIL_SERVICE_ID`
- `NEXT_PUBLIC_EMAIL_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_KEY`

A `src/app/api/send/` route exists but is not currently used.

### Analytics

Multiple tracking scripts load in the root layout: Google Analytics, Google Tag Manager, Meta Pixel, Google Ads. All are wrapped in `<Suspense>` to avoid hydration issues. IDs come from `NEXT_PUBLIC_*` env vars.

### Path Aliases

`@/*` maps to `src/*` (configured in `jsconfig.json`).
