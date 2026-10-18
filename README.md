# Passifle Labs

Premium consultancy website for Passifle Labs: strategy, intelligent systems,
brand experience, and digital products.

## Stack

- Next.js App Router
- TypeScript
- React
- Three.js hero scene
- Responsive CSS design system

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Routes

- `/` — landing page with the animated signal scene
- `/services` — strategy, AI systems, brand, and digital services
- `/work` — practice examples and point of view
- `/about` — consultancy philosophy and values
- `/contact` — enquiry form preview

## SEO and AEO

The site includes route metadata, canonical URLs, Open Graph/Twitter metadata,
JSON-LD for the organization, services, website, FAQ, and contact pages, a
sitemap, robots rules, and `public/llms.txt` for answer-engine context.

The contact form uses the official `@web3forms/react` integration. Copy
`.env.example` to `.env.local`, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, and
restart the dev/build process. Configure the same build-time variable in the
Cloudflare deployment environment. Without the key, the form shows a clear
configuration message and does not claim that a message was delivered.

The supplied Passifle Labs artwork is normalized into
`public/passifle-labs-logo-mark.png` and is used in the header, footer, and site
icon. Replace the placeholder social/email details before launch if needed.

## Checks

```bash
npm run typecheck
npm run build
```
