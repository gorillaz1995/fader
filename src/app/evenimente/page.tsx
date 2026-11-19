import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared";
import { Tours } from "@/components/sections/events/Tours";

export const metadata: Metadata = {
  title: "Evenimente & Sesiuni — Barber Master Tour",
  description: "Sesiuni educaționale Fade Academy în mai multe orașe din România. Filtrează după oraș, lună și durată.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        badge="Barber Master Tour • România"
        title="Country Tours."
        image="/images/ungureanu2026-4.jpg"
        facts={[
          { label: "Format", value: "Hands-on" },
          { label: "Focus", value: "Fade • control • finishing" },
          { label: "Nivel", value: "Intermediar → Avansat" },
        ]}
      >
        <p className="text-lg text-bone/80">
          Sesiuni educaționale în mai multe orașe din România. Filtrează rapid după oraș, lună și durată — și rezervă direct
          prin WhatsApp.
        </p>
      </PageHero>
      <div className="bg-ink pt-16" />
      <Tours />
    </>
  );
}
