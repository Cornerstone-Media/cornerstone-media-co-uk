# Vercel Deployment Guide

## Framework & Build

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node.js Version | 18.x or 20.x |

## Environment Variables

Add these in **Vercel → Project Settings → Environment Variables**:

| Variable | Required | Exposed to Browser | Value |
|---|---|---|---|
| `VITE_SUPABASE_URL` | ✅ | Yes (build-time) | `https://kxbnpnejeujlxujuxvtl.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | ✅ | Yes (build-time) | Your Supabase anon key |
| `VITE_SUPABASE_PROJECT_ID` | ✅ | Yes (build-time) | `kxbnpnejeujlxujuxvtl` |

> All `VITE_` variables are embedded at **build time** by Vite. There are no server-only secrets needed for the frontend — backend secrets (RESEND_API_KEY, RECAPTCHA_SECRET_KEY) live in Supabase Edge Functions and are not part of this deployment.

## Routing

The site is a single-page app (SPA) using React Router. The `vercel.json` includes a catch-all rewrite so all routes serve `index.html`.

## Custom Domain

1. Add `cornerstone-media.co.uk` in Vercel → Project Settings → Domains
2. Update DNS records to point to Vercel:
   - Remove the existing A record for `185.158.133.1` (Lovable hosting)
   - Add the records Vercel provides (typically a CNAME or A record)
   - Keep DKIM/SPF records for Resend email delivery unchanged

## Workflow

```
Lovable edits → GitHub sync → Vercel auto-deploys from GitHub
```

Continue editing in Lovable as normal. Every push to the default branch triggers a Vercel deployment.
