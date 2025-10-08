import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness", // Specifieker voor personal training
  name: "Mind Over Muscle",
  image: "https://mindovermuscle.nl/weblogo.jpg", // Dit moet een volledige URL zijn
  url: "https://mindovermuscle.nl",
  telephone: "+31610054053",
  email: "info@mindovermuscle.nl",
  description:
    "Mind Over Muscle is een top-beoordeelde personal trainer in regio Utrecht die online coaching en op maat gemaakte voedingsschema's aanbiedt. Wij zijn LGBTQ+ vriendelijk. Een afspraak is verplicht.",
  priceRange: "€€",
   address: {
    "@type": "PostalAddress",
    addressLocality: "Utrecht",
    addressRegion: "UT", 
    addressCountry: "NL", 
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Regio Utrecht",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00", // Pas dit aan als je openingstijd anders is
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
  },
  sameAs: ["https://instagram.com/vinnievinc.fit"],
};

export const metadata: Metadata = {
  title: "Mind Over Muscle | Personal Trainer & Online Coach in Regio Utrecht",
  description:
    "Op zoek naar een personal trainer in regio Utrecht? Mind Over Muscle biedt online coaching en op maat gemaakte voedingsschema's voor duurzame transformatie. Plan vandaag je gratis consult!",
  icons: {
    icon: "/weblogo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

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
