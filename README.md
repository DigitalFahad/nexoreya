# Nexoreya

AI-Powered Growth & Digital Transformation.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

The production build exports the complete site to `out/`. `npm start` serves that output at http://localhost:3000. Run `npm run lint` and `npm test` after building; browser checks cover responsive layouts, asset loading, navigation, system dialogs, conversation tabs and the enquiry flow. Windows tests use installed Microsoft Edge; on other platforms run `npx playwright install chromium` first.

## Contact and Content

Enquiries are prepared in the visitor's email client and addressed to fahad.kr@gmail.com. The site does not claim to submit a booking or deliver email itself. A calendar or server-backed delivery provider can replace this flow later.

Homepage metrics are selected professional experience supplied in the approved mockup, not guaranteed client outcomes. Conversation previews are explicitly illustrative. Supplied brand artwork is in `public/brand/guidelines.png`; the generated Connected Intelligence background is in `public/brand/intelligence.png`.

## Publication

The GitHub source repository is https://github.com/DigitalFahad/nexoreya. Hosting configuration is in `.openai/hosting.json`. The site is a static Next.js export and remains compatible with Vercel or another static host. Google fonts are fetched at build time and self-hosted in the exported assets.
