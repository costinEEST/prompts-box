import { type D1Database } from "@cloudflare/workers-types";

namespace NodeJS {
  interface ProcessEnv {
    DB: D1Database;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    TURSO_DB_URL: string;
    TURSO_DB_TOKEN: string;
  }
}
