# Vercel Deployment

## Recommended Vercel settings

- Framework Preset: `Next.js`
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: leave empty / default
- Install Command: `npm install`
- Production Branch: `main`

## Domain checklist

- Go to Project → Settings → Domains
- Confirm `ramazanakhmet.vercel.app` is listed under this exact project
- If it is listed under another project, remove it there first
- Go to Deployments → latest successful deployment → Promote to Production
- Redeploy without cache if the domain still serves an old deployment

## Troubleshooting commands

Local production test:

```bash
npm install
npm run build
npm run start
```

Then open:

```text
http://localhost:3000
```

Vercel CLI test:

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
