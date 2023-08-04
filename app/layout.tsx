import { type ReactNode } from "react";
import Nav from "../components/Nav";

import "@styles/global.css";

export const metadata = {
  title: "Prompts box",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
