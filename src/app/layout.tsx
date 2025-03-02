import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Massdriver - DevOps Without the Red Tape",
  description: "At Massdriver, we believe in prevention, not permission. Our platform lets Ops teams encode their expertise into preapproved self-service infrastructure.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
