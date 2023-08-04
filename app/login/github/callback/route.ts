import { auth, gitHubAuth } from "@app/auth/lucia";
import { OAuthRequestError } from "@lucia-auth/oauth";
import { cookies } from "next/headers";

import { type NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const cookieStore = cookies();
  const storedState = cookieStore.get("github_oauth_state")?.value;
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  // validate state
  // console.log({ storedState, state, code });
  if (!storedState || !state || storedState !== state || !code) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const { existingUser, githubUser, createUser } =
      await gitHubAuth.validateCallback(code);

    const getUser = async () => {
      if (existingUser) return existingUser;

      const user = await createUser({
        attributes: {
          github_username: githubUser.login,
        },
      });

      // console.log({ user });

      return user;
    };

    const user = await getUser();
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest({
      request,
      cookies,
    });
    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/", // redirect to profile page
      },
    });
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }

    console.log({ e });
    return new Response(null, {
      status: 500,
    });
  }
};
