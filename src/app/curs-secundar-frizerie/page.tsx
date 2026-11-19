import type { Metadata } from "next";
import { COURSES, INTAKE, whatsappLink } from "@/data/site";
import { PageHero } from "@/components/sections/shared";
import { Assistants, Teachers } from "@/components/sections/masters/Team";
import { MastersDetails, MastersPricing } from "@/components/sections/masters/MastersDetails";
import { Button, WhatsAppIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Curs Fade Masters — curs frizerie pentru începători",
  description: "Curs frizerie pentru începători la Fade Academy București, cu profesorii Fade Masters. Preț, rate, program și acte necesare.",
};

export default function FadeMastersPage() {
  return (
    <>
      <PageHero
        badge="Fade Academy București • Curs Frizerie pentru începători"
        title="Curs frizerie"
        accent="pentru începători."
        image="/images/3-muschetari.jpeg"
        imagePosition="50% 35%"
        facts={[
          { label: "Preț curs", value: `${COURSES.fadeMasters.price} lei`, note: "opțiune reducere pentru plată integrală" },
          { label: "Durată", value: COURSES.fadeMasters.duration, note: "ritm susținut, focus pe practică" },
          { label: "Perioadă", value: INTAKE.periodShort, note: "locuri limitate • înscrieri deschise" },
        ]}
      >
        <p className="text-lg leading-relaxed text-bone/80">
          Povestea noastră începe simplu: cu oameni care au ales să nu renunțe. Practică după practică, greșeală după
          greșeală, până când mâna capătă siguranță iar ochiul vede proporțiile dintr-o privire. În Fade Academy,
          „talentul” e doar scânteia — <span className="accent text-2xl text-lime">perseverența e combustibilul.</span>
        </p>
        <p className="mt-4 text-bone/60">
          Vei învăța într-un cadru profesionist, cu profesori formați în spiritul disciplinei și al standardelor ridicate —
          cu o cultură de lucru care păstrează legătura cu mentoratul și rigoarea inspirate de Ciprian Ungureanu.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={whatsappLink("Bună! Vreau detalii despre cursul Fade Masters.")} external arrow={false}>
            <WhatsAppIcon /> Rezervă pe WhatsApp
          </Button>
          <Button href="#pret" variant="outline-light">
            Vezi preț & rate
          </Button>
        </div>
      </PageHero>
      <Teachers />
      <Assistants />
      <MastersDetails />
      <MastersPricing />
    </>
  );
}
