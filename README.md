# Moist Corp website

Apparel manufacturing website built with Next.js App Router, React and TypeScript.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Pages live in `src/app`, shared components in `src/components`, and facility identities in `src/lib/facilities.ts`.

## Checks

```sh
npm run lint
npx tsc --noEmit --noUnusedLocals --noUnusedParameters
npm run build
```

If a restricted environment prevents Turbopack from opening worker ports, use `npm run build -- --webpack` for production-build verification.

## Styling and assets

The site uses plain global CSS in `src/app/globals.css`, with no Tailwind or custom PostCSS setup. Inter and IBM Plex Mono are self-hosted through `next/font/local`; font licenses are stored alongside the WOFF2 files. See [BRAND-SYSTEM.md](BRAND-SYSTEM.md) for identity rules and content attribution.

## Contact form configuration

The contact form posts to `/api/contact` and sends inquiries through Resend. Set these
server-only environment variables in local development and on the deployment platform:

```env
RESEND_API_KEY=
CONTACT_EMAIL_TO=info@moistcorp.com
CONTACT_EMAIL_FROM=
```

`CONTACT_EMAIL_FROM` must use a sender address from a domain verified with Resend. The
endpoint also applies a five-submission-per-IP, 15-minute in-memory limit and a honeypot.
The in-memory limit is intentionally lightweight for this site; if the deployment grows
to multiple high-volume instances, replace it with a shared rate-limit store.
