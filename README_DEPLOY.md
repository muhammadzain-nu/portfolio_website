# Deploying to Vercel

1) Ensure repo is pushed to a Git provider (GitHub/GitLab/Bitbucket):

```bash
git add .
git commit -m "Prepare for Vercel deploy"
git branch -M main
git remote add origin <YOUR_REMOTE_URL>
git push -u origin main
```

2) Recommended `package.json` settings
- `scripts.build` should be `next build` (already set).
- Use Node 16 for Next.js v10 compatibility; `package.json` has `engines.node: 16.x`.

3) Deploy via Vercel web UI
- Go to https://vercel.com → Import Project → pick your Git provider → select the repo.
- Framework Preset: `Next.js` (auto-detected).
- Build Command: `npm run build`
- Output Directory: leave blank (for SSR) or set to `out` if you switch to `next export`.
- Click Deploy.

4) Or deploy with Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel # follow prompts
vercel --prod # production deploy
```

5) Node version on Vercel
- In Project Settings → General → Environment, set Node version to `16.x` if needed, or keep the default.

6) After deploy
- Add environment variables in Vercel Project Settings if your app needs any and redeploy.

If you want, I can run the `vercel` CLI here (you must authenticate interactively), or I can push changes to a remote if you provide the remote URL. Let me know which you'd like next.