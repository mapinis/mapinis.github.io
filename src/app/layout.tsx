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
  return (
    <html lang="en">
      <body>
        <div id="header">
          The site for all things <span id="name">Mark!</span>
        </div>
        {/* TODO navbar goes here */}
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
