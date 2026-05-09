# Ramazan Akhmet Personal Website

Founder profile site for Ramazan Akhmet, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

## Deploy on Vercel

1. Push the repository to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Framework preset: `Next.js`.
5. Build command: `npm run build`.
6. Output directory: leave default.
7. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL = your production domain`
8. Deploy.

## After deployment

1. Update `NEXT_PUBLIC_SITE_URL` to the final Vercel or custom domain.
2. Redeploy.
3. Test the Open Graph preview on LinkedIn, Telegram, WhatsApp, and X/Twitter.

## Local production test

```bash
npm install
npm run build
npm run start
```

Then open:

```text
http://localhost:3000
```

## Vercel CLI troubleshooting

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
```

If the deployment URL works but `ramazanakhmet.vercel.app` does not, set the alias:

```bash
vercel alias set <DEPLOYMENT_URL> ramazanakhmet.vercel.app
```

Useful checks:

```bash
vercel domains ls
vercel project ls
vercel ls
```
