import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ChatbotWidget from "@/components/ui/ChatbotWidget";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Cinthya López Fonoaudióloga Valparaíso`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.url,
    siteName: `${siteConfig.name} - Fonoaudióloga`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Cinthya López Suazo - Fonoaudióloga en Valparaíso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f9beb",
};

// Schema.org structured data
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${siteConfig.url}/#business`,
      name: `${siteConfig.name} - Fonoaudióloga`,
      alternateName: "Cinthya López Fonoaudióloga Valparaíso",
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        postalCode: siteConfig.postalCode,
        addressCountry: siteConfig.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.latitude,
        longitude: siteConfig.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [siteConfig.instagram, siteConfig.facebook],
      medicalSpecialty: "Otolaryngology",
      hasMap: `https://maps.google.com/?q=${siteConfig.latitude},${siteConfig.longitude}`,
      priceRange: "$$",
      image: `${siteConfig.url}/images/cinthya-lopez-fonoaudiologa.jpg`,
      founder: {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: "Fonoaudióloga",
        alumniOf: siteConfig.university,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      jobTitle: "Fonoaudióloga",
      worksFor: { "@id": `${siteConfig.url}/#business` },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.university,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressCountry: siteConfig.countryCode,
      },
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteConfig.url,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} - Fonoaudióloga`,
      description: siteConfig.description,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="CL-VS" />
        <meta name="geo.placename" content="Valparaíso" />
        <meta name="geo.position" content="-33.0472;-71.6127" />
        <meta name="ICBM" content="-33.0472, -71.6127" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary-600 focus:text-white"
        >
          Ir al contenido principal
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  );
}
