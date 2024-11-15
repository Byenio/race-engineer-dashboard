import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

import "@styles/globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Engineer Dashboard",
  description: "Engineer Dashboard for F1 Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={GeistMono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
