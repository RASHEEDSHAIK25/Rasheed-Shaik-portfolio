# Deploy free forever (5–10 minutes)

Your site is a **static** Next.js app — free on **Vercel** or **GitHub Pages** for personal portfolios.

---

## Option A — Vercel (recommended, easiest)

### Step 1 — Push code to GitHub

1. Open [https://github.com/new](https://github.com/new)
2. Repository name: `rasheed-portfolio`
3. **Public** → Create repository (do **not** add README)
4. In PowerShell:

```powershell
cd C:\Users\shaik\Projects\rasheed-portfolio
git remote add origin https://github.com/RASHEEDSHAIK25/rasheed-portfolio.git
git push -u origin main
```

(GitHub may ask you to sign in in the browser.)

### Step 2 — Deploy on Vercel

1. Go to [https://vercel.com/signup](https://vercel.com/signup) → **Continue with GitHub**
2. **Add New Project** → import `rasheed-portfolio`
3. Settings (auto-detected from `vercel.json`):
  - Build Command: `npm run build`
  - Output Directory: `out`
4. **Environment Variables** → Add:


| Name                               | Value                                                              |
| ---------------------------------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_EDITOR_PASSWORD_HASH` | `0a7248e4edc657db23737e9cdbf6984549a940821a4dbf9e62c8f7bd2326e4a6` |


(Or generate your own: `node scripts/hash-password.js YourPassword`)

1. Click **Deploy**

### Your live URL

Something like: **[https://rasheed-portfolio.vercel.app](https://rasheed-portfolio.vercel.app)**

Add this URL to resume, LinkedIn, and GitHub profile.

**Cost:** $0 on Vercel Hobby plan for personal sites.

---

## Option B — GitHub Pages (also free)

After Step 1 above:

1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Push is already on `main` — workflow runs automatically

Live at: **[https://RASHEEDSHAIK25.github.io/rasheed-portfolio/](https://RASHEEDSHAIK25.github.io/rasheed-portfolio/)**

Add the same env var is **not** supported on Pages for editor — editor works only if you set hash at **build time** in workflow (optional).

---

## After deploy checklist

- Open live URL on phone  
- Test resume PDF downloads  
- Test role switcher (DS / Analyst / AI·ML)  
- LinkedIn → Featured → add portfolio link  
- Resume header → add portfolio URL

---

## Update site later

```powershell
cd C:\Users\shaik\Projects\rasheed-portfolio
# make changes...
git add .
git commit -m "Update portfolio"
git push
```

Vercel redeploys automatically in ~1 minute.