import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["PersonalTrainer", "HealthAndBeautyBusiness"], // Nog specifieker!
  "name": "Mind Over Muscle",
  "image": "https://mindovermuscle.nl/weblogo.jpg",
  "url": "https://mindovermuscle.nl",
  "telephone": "+31610054053",
  "email": "info@mindovermuscle.nl",
  "foundingDate": "2022-05-04", // Oprichtingsdatum toegevoegd
  "description": "Mind Over Muscle (MoM) is een online coaching- en transformatieprogramma, geleid door een ervaren personal trainer met een achtergrond in de GGZ. Wij combineren krachttraining, voeding, en mindset voor duurzame resultaten in Utrecht en heel Nederland. Een afspraak is verplicht. LGBTQ+ vriendelijk.", // Aangepast naar de nieuwe, rijkere tekst
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Utrecht",
    "addressRegion": "UT",
      "addressCountry": "NL"
  },
  "areaServed": [ // Uitgebreid naar meerdere gebieden
    {
      "@type": "City",
      "name": "Utrecht"
    },
    {
      "@type": "Country",
      "name": "Nederland"
    }
  ],
  "contactPoint": [ // Contactpunt voor WhatsApp toegevoegd
    {
      "@type": "ContactPoint",
      "telephone": "+31610054053",
      "contactType": "customer support",
      "areaServed": "NL",
      "availableLanguage": ["Dutch", "English"],
      "contactOption": "TollFree" // Gebruik "TollFree" omdat WhatsApp gratis is
    }
  ],
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00", // Gecorrigeerde openingstijd
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "10"
  },
  "sameAs": ["https://www.instagram.com/vinnievinc.fit/"]
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
