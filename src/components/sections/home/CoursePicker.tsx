"use client";

import { COURSES, INTAKE, formatRon } from "@/data/site";
import { Marquee, Parallax, Reveal, SplitText } from "@/components/motion/primitives";
import { TLink } from "@/components/motion/TLink";
import { Eyebrow } from "@/components/ui";

const CARDS = [
  {
    href: "/curs-frizerie-bucuresti",
    tier: "Premium",
    tag: "Curs principal",
    title: "Curs GrandMaster Ciprian Ungureanu",
    text: "Formare completă pentru o carieră în frizerie",
    price: COURSES.grandmaster.discountedPrice,
    featured: true,
  },
  {
    href: "/curs-secundar-frizerie",
    tier: "Master",
    tag: "Fade Academy",
    title: "Curs Frizerie Master Fade Academy",
    text: "O variantă accesibilă pentru începutul în frizerie",
    price: COURSES.fadeMasters.discountedPrice,
    featured: false,
  },
];

export const CoursePicker = () => (
  <section className="relative overflow-hidden bg-ink pb-28 text-bone md:pb-40">
    <Marquee duration={40} className="border-y border-bone/10 py-5">
      {["Elită", "Disciplină", "Tehnică", "#1 România", "Fade Academy"].map((word) => (
        <span key={word} className="display flex items-center gap-10 pr-10 text-5xl text-bone/90 md:text-7xl">
          {word}
          <span className="h-3 w-3 rounded-full bg-lime" />
        </span>
      ))}
    </Marquee>

    <div className="container-x mt-20 grid gap-14 md:mt-28 lg:grid-cols-12">
      <div className="relative lg:col-span-5">
        <div className="lg:sticky lg:top-24">
          <div className="relative mx-auto aspect-[4/5] max-w-md lg:max-w-none">
            <div aria-hidden className="absolute inset-x-6 bottom-0 top-16 rounded-[2.5rem] bg-forest" />
            <div aria-hidden className="absolute inset-x-6 bottom-0 h-1/2 rounded-b-[2.5rem] bg-gradient-to-t from-lime/30 to-transparent" />
            <Parallax distance={40} className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/cip-her.svg"
                alt="Ciprian Ungureanu, fondator Fade Academy"
                className="h-full w-full object-contain object-bottom"
                loading="lazy"
              />
            </Parallax>
            <p className="accent absolute -bottom-2 left-0 text-3xl text-lime">GrandMaster</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <Eyebrow className="text-lime">Program cursuri frizerie</Eyebrow>
        <SplitText as="h2" text="Debutul ideal în cariera de frizer" className="display mt-6 block text-[clamp(3rem,7vw,6.5rem)]" />
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-bone/70 text-pretty">
            Locurile sunt limitate! Rezervă-ți acum locul și începe-ți cariera în frizerie împreună cu cei mai buni!
          </p>
        </Reveal>

        <Reveal className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-bone/10 sm:grid-cols-2">
          <div className="bg-ink p-6">
            <p className="eyebrow text-bone/50">Perioada curs</p>
            <p className="display mt-3 text-2xl text-lime md:text-3xl">{INTAKE.periodLabel}</p>
          </div>
          <div className="bg-ink p-6">
            <p className="eyebrow text-bone/50">Durata totală</p>
            <p className="display mt-3 text-2xl md:text-3xl">{INTAKE.durationLabel}</p>
          </div>
        </Reveal>

        <p className="eyebrow mt-16 text-bone/50">Alege cursul potrivit</p>
        <div className="mt-6 flex flex-col gap-4">
          {CARDS.map((card, index) => (
            <Reveal key={card.href} delay={index * 0.1}>
              <TLink
                href={card.href}
                className="group relative block overflow-hidden rounded-[2rem] border border-bone/10 p-7 transition-colors duration-500 hover:border-lime md:p-9"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-lime transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
                />
                <div className="relative flex flex-col gap-8 transition-colors duration-500 group-hover:text-ink md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={
                          card.featured
                            ? "rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink group-hover:bg-ink group-hover:text-lime"
                            : "rounded-full border border-current px-3 py-1 text-xs font-bold uppercase tracking-widest"
                        }
                      >
                        {card.tier}
                      </span>
                      <span className="text-sm opacity-60">{card.tag}</span>
                    </div>
                    <h3 className="display mt-5 max-w-lg text-[clamp(2rem,3.6vw,3.2rem)] leading-[0.92]">{card.title}</h3>
                    <p className="mt-3 opacity-70">{card.text}</p>
                  </div>
                  <div className="shrink-0 md:text-right">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-60">De la</p>
                    <p className="display text-5xl md:text-6xl">{formatRon(card.price)}</p>
                    <p className="mt-1 text-sm opacity-60">Posibilă plată în rate</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em]">
                      Vezi detalii
                      <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                    </span>
                  </div>
                </div>
              </TLink>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-2xl text-sm text-bone/50">
            Prețurile afișate sunt prețurile de la plata integrală cu discount. Pentru plata în rate și toate variantele
            disponibile, apasă pe cursul dorit.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-lime">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-lime" /> Înscrierile sunt deschise — locuri limitate.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
