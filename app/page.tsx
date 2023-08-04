import { getPageSession } from "@app/auth/lucia";
import { redirect } from "next/navigation";

import Form from "@components/Form";

const Page = async () => {
  const session = await getPageSession();

  // console.log({ session });
  if (!session) redirect("/login");

  return (
    <>
      <h1>Profile</h1>
      <p>User id: {session.user.userId}</p>
      <p>Username: {JSON.stringify(session.user, null, "\t")}</p>
      <Form action="/api/logout">
        <input type="submit" value="Sign out" />
      </Form>
    </>
  );
};

export default Page;

// import Feed from "@components/Feed";
// import Provider from "@components/Provider";

// const Home = () => {
//   return (
//     <section className="w-full flex-center flex-col">
//       <h1 className="head_text text-center">
//         Discover & Share
//         <br className="max-md:hidden" />
//         <span className="orange_gradient text-center"> AI powered prompts</span>
//       </h1>
//       <p className="desc text-center">
//         Prompts box is an open-source AI prompting tool for modern world to
//         discover, create and share creative prompts
//       </p>

//       <Feed />
//     </section>
//   );
// };

// export default Home;
