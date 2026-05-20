# Shaik Rasheed Baba — Portfolio

Interview-ready portfolio (Data Science · ML · Analytics). **Static export** — deploy anywhere in minutes.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run preview
```

Output folder: **`out/`** (upload this or use CI below).

## Deploy free (lifetime)

**Start here:** **[DEPLOY-FREE.md](./DEPLOY-FREE.md)** — GitHub + Vercel in ~10 minutes.

See also **[DEPLOY.md](./DEPLOY.md)** for other hosts:

| Platform       | Difficulty | Notes                          |
|----------------|------------|--------------------------------|
| **Vercel**     | Easiest    | Import GitHub repo, one click  |
| **Netlify**    | Easy       | Uses `netlify.toml`            |
| **GitHub Pages** | Easy     | Enable Pages + GitHub Actions  |
| **Manual**     | Easy       | Upload `out/` folder           |

## Private editor (password protected)

1. Set your password (one time):

```bash
node scripts/hash-password.js YourSecretPassword
```

2. Copy the output into `.env.local`:

```
NEXT_PUBLIC_EDITOR_PASSWORD_HASH=abc123...
```

3. Restart dev server (`npm run dev`). Click **🔒** (bottom-right) → enter password.

- Session lasts **12 hours**, then login again.
- **Projects tab:** add new projects without code.
- Change password anytime by generating a new hash.

> Static sites: the hash is in the build (not the plain password). This blocks visitors; for bank-level security use server auth.

**Default password for local dev** (if you use our generated `.env.local`): `Rasheed@Portfolio2025` — change this before deploying!

## Customize (no code required)

1. Unlock editor with **🔒** button.
2. Edit profile, role text, resumes, or **add projects**.
3. **Export backup** / **Import** to move settings between browsers.

**Career roles:** Switch between *Data Science Student*, *Data Analyst*, and *AI/ML Engineer* — title, projects, stats, and resumes update automatically.

Advanced: edit `src/data/portfolio.ts` for new projects.

## Assets

- `public/profile.png`
- `public/resume-data-analyst.pdf`
- `public/resume-full.pdf`
