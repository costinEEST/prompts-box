import { cache } from "react";
import { cookies } from "next/headers";
import { createClient } from "@libsql/client/web";
import { d1, libsql } from "@lucia-auth/adapter-sqlite";
import { github } from "@lucia-auth/oauth/providers";
import { lucia } from "lucia";
import { nextjs } from "lucia/middleware";

// import { type Env } from "@env";

export const auth = lucia({
  // adapter: d1((process.env as unknown as Env).DB, {
  adapter: libsql(
    createClient({
      url: process.env.TURSO_DB_URL as string,
      authToken: process.env.TURSO_DB_TOKEN,
    }),
    {
      user: "user",
      key: "user_key",
      session: "user_session",
    }
  ),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (data) => {
    return {
      gitHubUserName: data.github_username,
    };
  },
});

export const gitHubAuth = github(auth, {
  clientId: process.env.GITHUB_CLIENT_ID ?? "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
});

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest({
    request: null,
    cookies,
  });

  return authRequest.validate();
});

export type Auth = typeof auth;
