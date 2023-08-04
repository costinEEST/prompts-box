> Clone of [`@adrianhajdin`](https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing)'s project.

# CLI

- `pnpm dlx wrangler d1 create promptopia`
- `touch wrangler.toml` then https://developers.cloudflare.com/d1/get-started/#3-bind-your-worker-to-your-d1-database
- `pnpm dlx wrangler d1 execute promptopia --local --file=./schema.sql`
- `pnpm dlx wrangler deploy`
- `pnpm create cloudflare@latest`
- `turso auth signup`
- Turso platform API token `turso auth token`

# Docs

- [Readme](./docs.md)
- https://lucia-auth.com/guidebook/github-oauth/nextjs-app
- https://lucia-auth.com/database-adapters/cloudflare-d1
- https://blog.cloudflare.com/introducing-d1
- https://nextjs.org/docs/app/building-your-application/caching#react-cache-function

# Dump

- https://youtu.be/wm5gMKuwSYk?t=3403
- https://github.com/tlebeitsuk/nuxt-cloudflare-lucia/blob/main/server/utils/auth.ts

# Logs

- https://dash.cloudflare.com/df16a81afe5219d8eb4023a5ee5af16f/workers/d1
- https://worker.costineest.workers.dev
- https://github.com/settings/applications/2278913

# Tool

- https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md#rafce
