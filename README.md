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

The contact form is intentionally local-preview behavior until a real submission
endpoint is configured. Replace the placeholder social/email details before
launch.

## Checks

```bash
npm run typecheck
npm run build
```
