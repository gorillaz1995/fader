import type { Metadata } from "next";
import { COURSES, CONTACT, INTAKE, formatRon } from "@/data/site";
import { REVIEWS_BUCURESTI } from "@/data/content";
import { MapBlock, PageHero, Reviews, RotatingStatement } from "@/components/sections/shared";
import { GrandMasterPricing } from "@/components/sections/bucuresti/GrandMasterPricing";
import { SignatureBanner } from "@/components/sections/bucuresti/SignatureBanner";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Curs frizerie București — GrandMaster Ciprian Ungureanu",
  description: "Cursul principal Fade Academy, condus de Ciprian Ungureanu. Prețuri, rate, cont bancar și locație în București.",
};

export default function BucurestiPage() {
  return (
    <>
      <PageHero
        badge="Fade Academy București • Curs principal"
        title="Curs GrandMaster"
        accent="Ciprian Ungureanu"
        image="/images/ungureanu2026-1.jpg"
        imagePosition="50% 30%"
        facts={[
          { label: "Perioadă", value: INTAKE.periodShort, note: INTAKE.periodLabel },
          { label: "Durată", value: "12 săptămâni", note: INTAKE.durationLabel },
          { label: "Preț", value: formatRon(COURSES.grandmaster.discountedPrice), note: "plată integrală • rate disponibile" },
        ]}
      >
        <p className="text-lg text-bone/75">Standardul #1 din România — tehnică + disciplină + rezultate.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#preturi">Vezi prețuri & rate</Button>
          <Button href={`tel:${CONTACT.phones[0].tel}`} external variant="outline-light" arrow={false}>
            {CONTACT.phones[0].label}
          </Button>
        </div>
      </PageHero>
      <RotatingStatement />
      <SignatureBanner />
      <GrandMasterPricing />
      <MapBlock query={CONTACT.address} address={CONTACT.address} />
      <Reviews reviews={REVIEWS_BUCURESTI} />
    </>
  );
}
