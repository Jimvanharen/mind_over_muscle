import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mind Over Muscle | Personal Training in Nederland",
  description:
    "Expert personal training, aangepaste diëten en fitness merchandise om je lichaam en geest te transformeren.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
