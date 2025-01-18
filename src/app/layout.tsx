import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apinis.org",
  description: "Mark Apinis's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navItems = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "résumé",
      route: "/resume",
    },
    {
      name: "projects",
      route: "/projects"
    }
  ]

  return (
    <html lang="en">
      <body>
        <script type="text/javascript" src="/randomizeNameStyle.js" async />
        <div id="header">
          The site for all things <span id="name">Mark!</span>
        </div>
        <div id="navContainer">
          <div id="nav">
            {navItems.map((({name, route}) => (
              <a className="navItem" key={route} href={route}>{name}</a>
            )))}
          </div>
        </div>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
