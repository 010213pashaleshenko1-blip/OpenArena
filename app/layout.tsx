import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenArena — Open-source AI Arena",
  description: "Blind battles between open-source AI models.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
