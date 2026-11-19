import type { Metadata } from "next";
import { whatsappLink } from "@/data/site";
import { PageHero } from "@/components/sections/shared";
import {
  ClosingBand,
  MentorOptions,
  SeminarStructure,
  StrategicSession,
  WhyOneToOne,
} from "@/components/sections/mentorship/Mentorship";
import { Button, WhatsAppIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mentorat & Perfecționare 1 la 1",
  description: "Patru opțiuni de mentorat 1 la 1 la Fade Academy: Ciprian Ungureanu, Robert Micu, Alberto Sârbu și Florin Harsan.",
};

export default function OneToOnePage() {
  return (
    <>
      <PageHero
        badge="Fade Academy • Mentorat 1 la 1 • Standard de top"
        title="Mentorat & Perfecționare"
        accent="1 la 1."
        image="/images/ungureanu2026-5.jpg"
        imagePosition="50% 20%"
        facts={[
          { label: "Format", value: "1 la 1" },
          { label: "Focus", value: "Tehnică + execuție" },
          { label: "Nivel", value: "Profesional" },
        ]}
      >
        <p className="text-lg leading-relaxed text-bone/80">
          Patru opțiuni. Patru stiluri de mentorat. Același standard: performanță reală. Alege traseul potrivit și
          accelerează-ți evoluția cu feedback direct, structură, metodă și practică controlată.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={whatsappLink("Bună! Vreau detalii despre mentoratul 1 la 1.")} external arrow={false}>
            <WhatsAppIcon /> Contactează pe WhatsApp
          </Button>
          <Button href="#optiuni" variant="outline-light">
            Vezi cele 4 opțiuni
          </Button>
        </div>
      </PageHero>
      <WhyOneToOne />
      <SeminarStructure />
      <StrategicSession />
      <MentorOptions />
      <ClosingBand />
    </>
  );
}
