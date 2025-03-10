import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mind Over Muscle | Personal Training in Nederland",
  description:
    "Expert personal training, aangepaste diëten en fitness merchandise om je lichaam en geest te transformeren.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
