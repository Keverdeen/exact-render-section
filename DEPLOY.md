# Deploying to Vercel

This project is configured for deployment on Vercel using the TanStack Start SSR build (via Nitro).

## Build configuration

- `vercel.json` sets:
  - Framework: Vite
  - Build command: `vite build`
  - Output directory: `.output`
  - Install command: `bun install`
- `vite.config.ts` forces Nitro to use the `vercel` preset so the build produces the correct `.output` layout for Vercel.
- `package.json` pins the Node engine to `>=20.0.0`, which Vercel respects.

## Environment variables

The build uses Vite's env loading. Any variable you add to Vercel's project settings will be available:

- Inside server functions / SSR: `process.env.VAR_NAME`
- Inside client code: `import.meta.env.VITE_VAR_NAME` (only variables prefixed with `VITE_`)

If you enable Lovable Cloud (Supabase backend), copy the values from your Lovable project settings into Vercel as:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

Use `.env.example` as a local template.

## Deploy

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Add any required environment variables in Vercel project settings.
4. Vercel will auto-detect the Vite framework and use `vercel.json` overrides.
