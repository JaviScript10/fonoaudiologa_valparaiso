import type { Metadata } from "next";
import { siteConfig, services, testimonials } from "@/lib/siteConfig";
import HeroSection from "@/components/sections/HeroSection";
import {
  StatsSection,
  ServicesOverview,
  AboutPreview,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections/index";

export const metadata: Metadata = {
  title: "Fonoaudióloga en Valparaíso | Cinthya López Suazo",
  description:
    "Fonoaudióloga en Valparaíso, Chile. Especialista en lenguaje infantil, estimulación temprana, habla, voz y adultos mayores. Agenda tu hora por WhatsApp.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la fonoaudiología y para qué sirve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La fonoaudiología es la ciencia de la salud que estudia, previene, evalúa y trata los trastornos de la comunicación humana, incluyendo el lenguaje, habla, voz y deglución.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde atiende la fonoaudióloga Cinthya López en Valparaíso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cinthya López Suazo atiende en Valparaíso, Región de Valparaíso, Chile. Puede contactarla por WhatsApp al +56932376474.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesOverview services={services} />
      <AboutPreview />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection />
      <CTASection />
    </>
  );
}
