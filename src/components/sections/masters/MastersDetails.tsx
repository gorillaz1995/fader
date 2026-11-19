"use client";

import { BANK, CONTACT, COURSES, INTAKE, formatRon, whatsappLink } from "@/data/site";
import { Reveal } from "@/components/motion/primitives";
import { Button, CopyButton, SectionTitle, WhatsAppIcon } from "@/components/ui";

const course = COURSES.fadeMasters;

const DETAIL_CARDS = [
  {
    title: "Perioada cursului",
    items: [INTAKE.periodShort, `Începere ${INTAKE.startLabel}`, "Durată ~10 săptămâni", "Diplomă recunoscută național și internațional"],
  },
  {
    title: "Program",
    items: ["Teorie 6 ore/săptămână (în funcție de grupe)", "Practică 12:00 – 18:00", "Zile practică Luni – Joi", "Locație practică salonul nostru"],
  },
  { title: "Locație", items: [CONTACT.addressLong] },
  {
    title: "Ce vei învăța",
    wide: true,
    items: [
      "Tunsori personalizate adaptate fizionomiei",
      "Tehnici clasice (foarfecă + pieptăn)",
      "Tunsori cu mașina de tuns",
      "Clipper over comb",
      "Skin fade + geometrie",
      "Rasul bărbii cu briciul",
      "Spălarea părului + îngrijirea scalpului",
      "Styling și tehnici profesionale",
      "Masaj facial și capilar",
      "Noțiuni de geometrie aplicată",
    ],
  },
  {
    title: "Echipamente",
    items: [
      "Fiecare cursant are propriile ustensile (se pot achiziționa cu reducere).",
      "Academia are ustensile pentru practică în sală.",
      "Practică pe cap de manechin + modele umane (când e posibil).",
    ],
  },
  {
    title: "Acte necesare",
    items: [
      "Copie certificat de naștere",
      "Copie carte de identitate",
      "Copie certificat de căsătorie (dacă este cazul)",
      "Copie diplomă de studii (minim 8 clase)",
      "Aviz medical pentru aptitudine",
      "Vârsta minimă: 16 ani",
    ],
  },
];

export const MastersDetails = () => (
  <section id="detalii" className="grain bg-forest py-24 text-bone md:py-36">
    <div className="container-x">
      <SectionTitle
        kicker="Curriculum practic • pași clari • progres vizibil"
        title="Detalii"
        accent="curs."
        subtitle="Am făcut totul ușor de urmărit: ce înveți, cum exersezi, unde vii și ce îți trebuie."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {DETAIL_CARDS.map((card, index) => (
          <Reveal key={card.title} delay={(index % 3) * 0.08} className={card.wide ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
            <article
              className={`h-full rounded-[2rem] p-7 transition-colors duration-500 ${
                card.wide ? "bg-lime text-ink" : "border border-bone/10 bg-forest-950 hover:bg-lime hover:text-ink"
              }`}
            >
              <p className="tabular text-sm opacity-50">{String(index + 1).padStart(2, "0")}</p>
              <h3 className={`display mt-2 ${card.wide ? "text-6xl" : "text-3xl"}`}>{card.title}</h3>
              <ul className={`mt-6 ${card.wide ? "grid gap-x-8 gap-y-3 sm:grid-cols-2" : "space-y-2"}`}>
                {card.items.map((item) => (
                  <li key={item} className={`flex gap-3 ${card.wide ? "text-lg" : ""}`}>
                    <span className={card.wide ? "text-forest" : "opacity-40"}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const MastersPricing = () => (
  <section id="pret" className="bg-ink py-24 text-bone md:py-36">
    <div className="container-x">
      <SectionTitle
        kicker="Transparent • simplu • fără surprize"
        title="Preț și"
        accent="contact."
        subtitle="Alege varianta potrivită (integral sau în rate) și rezervă-ți locul."
      />
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-bone/10 p-7 md:p-9">
            <p className="eyebrow text-bone/50">Preț standard</p>
            <p className="display mt-3 text-6xl">{course.price} lei</p>
            <div className="mt-8 rounded-3xl bg-lime p-6 text-ink">
              <p className="eyebrow">Reducere 10% (plată integrală)</p>
              <p className="display mt-2 text-7xl">{course.discountedPrice} lei</p>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-[2rem] bg-forest-900 p-7 md:p-9">
            <p className="eyebrow text-lime">Plată în rate</p>
            <ol className="mt-6 space-y-5">
              {course.installments.map((step, index) => (
                <li key={step.label} className="flex items-baseline justify-between gap-4 border-b border-bone/10 pb-4">
                  <span className="text-bone/70">
                    <span className="tabular mr-3 text-lime">{index + 1}</span>
                    {step.label}
                  </span>
                  <span className="display text-3xl">{step.amount.toLocaleString("ro-RO")} lei</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-bone/50">
              Politica de anulare: cu două săptămâni înainte de începerea cursului, avansul nu mai poate fi returnat.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.16}>
          <article className="flex h-full flex-col rounded-[2rem] border border-bone/10 p-7 md:p-9">
            <p className="eyebrow text-bone/50">Informații și înscrieri</p>
            <div className="mt-4 space-y-1">
              {CONTACT.phones.map((phone) => (
                <a key={phone.tel} href={`tel:${phone.tel}`} className="display block text-3xl hover:text-lime">
                  {phone.label.replace("(+40) ", "0")}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-bone/60">Beneficiar: SC {BANK.holder}</p>
            <CopyButton value={BANK.iban} className="mt-2">
              <span className="font-mono text-lg tracking-wider hover:text-lime">IBAN: {BANK.iban}</span>
            </CopyButton>
          </article>
        </Reveal>
      </div>

      <Reveal className="mt-4">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-lime p-7 text-ink md:flex-row md:items-center md:p-10">
          <p className="max-w-2xl text-lg font-medium">
            Locurile sunt limitate! Rezervă-ți locul și începe-ți cariera cu o bază serioasă, într-o școală care pune accent
            pe practică și standard.
          </p>
          <Button href={whatsappLink("Bună! Vreau să rezerv un loc la cursul Fade Masters.")} external variant="ink" arrow={false}>
            <WhatsAppIcon /> Rezervă acum
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
