import { redirect } from "next/navigation";

import { getPageSession } from "@app/auth/lucia";

const Page = async () => {
  const session = await getPageSession();

  if (session) redirect("/");

  return (
    <>
      <h1>Sign in</h1>
      <a href="/login/github">Sign in with Github</a>
    </>
  );
};

export default Page;
