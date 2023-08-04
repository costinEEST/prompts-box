import { gitHubAuth } from "@app/auth/lucia";
import { cookies } from "next/headers";

export const GET = async () => {
  const [url, state] = await gitHubAuth.getAuthorizationUrl();
  const cookieStore = cookies();
  // console.log({ url, state });
  // store state
  cookieStore.set("github_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
    },
  });
};
