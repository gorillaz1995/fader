"use client";

import Image from "next/image";
import Script from "next/script";
import clsx from "clsx";
import { motion } from "motion/react";
import { MENTOR_OPTIONS, SEMINAR_DAY, WHY_ONE_TO_ONE } from "@/data/mentorship";
import type { MentorOption } from "@/data/mentorship";
import { whatsappLink } from "@/data/site";
import { ClipReveal, Reveal, SplitText } from "@/components/motion/primitives";
import { Button, Eyebrow, SectionTitle, WhatsAppIcon } from "@/components/ui";

export const WhyOneToOne = () => (
  <section className="bg-ink py-24 text-bone md:py-36">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <Eyebrow className="text-lime">Nivelul următor</Eyebrow>
        <SplitText as="h2" text="De ce să alegi un curs 1 la 1?" className="display mt-6 block text-[clamp(3rem,7vw,6.5rem)]" />
      </div>
      <Reveal className="lg:col-span-6 lg:pt-16">
        <p className="text-xl leading-relaxed text-bone/75 text-pretty">
          Cursurile de grup sunt excelente pentru bază și inițiere. Însă dacă îți dorești perfecționare reală, corecție
          tehnică personalizată și progres accelerat, formatul 1 la 1 este nivelul următor. Aici eliminăm „ghicitul” — îți
          oferim metodă, structură și feedback precis.
        </p>
      </Reveal>
    </div>
    <div className="container-x mt-16 grid gap-4 md:grid-cols-3">
      {WHY_ONE_TO_ONE.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.1}>
          <article className="group h-full rounded-[2rem] border border-bone/10 p-7 transition-colors duration-500 hover:border-lime hover:bg-lime hover:text-ink">
            <p className="display text-7xl text-lime transition-colors group-hover:text-ink">0{index + 1}</p>
            <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 opacity-70">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export const SeminarStructure = () => (
  <section className="grain bg-forest py-24 text-bone md:py-32">
    <div className="container-x grid gap-4 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <article className="flex h-full flex-col rounded-[2rem] border border-bone/10 bg-forest-950 p-7 md:p-10">
          <p className="eyebrow text-lime">Intrarea corectă în 1 la 1</p>
          <h3 className="display mt-3 text-5xl">Ședința de evaluare</h3>
          <p className="mt-5 leading-relaxed text-bone/70">
            Dacă nu ai urmat cursul nostru de specializare, începem cu o evaluare practică. În salonul nostru vei realiza o
            tunsoare completă fără asistență, pe un model adus de tine. Apoi analizăm lucrarea și stabilim împreună traseul
            optim.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-2">
            <div className="rounded-2xl bg-bone/5 p-4">
              <dt className="text-xs uppercase tracking-widest text-bone/50">Timp alocat</dt>
              <dd className="display mt-1 text-3xl">1 oră</dd>
            </div>
            <div className="rounded-2xl bg-lime p-4 text-ink">
              <dt className="text-xs uppercase tracking-widest text-ink/60">Cost evaluare</dt>
              <dd className="display mt-1 text-3xl">300 lei</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm text-bone/60">Analiză completă + recomandare număr ședințe</p>
          <div className="mt-auto pt-8">
            <Button href={whatsappLink("Bună! Vreau să programez o ședință de evaluare (300 lei).")} external>
              Programează evaluarea
            </Button>
          </div>
        </article>
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-7">
        <article className="h-full rounded-[2rem] bg-ink p-7 text-bone md:p-10">
          <p className="eyebrow text-lime">Eu demonstrez → Tu exersezi → Tu execuți</p>
          <h3 className="display mt-3 text-5xl">Structura unei zile de seminar</h3>
          <p className="mt-5 max-w-xl text-bone/70">
            Principiul nostru e simplu și extrem de eficient: 3 modele într-o zi, cu trecere clară de la demonstrație la
            execuție independentă. Asta îți fixează tehnica și îți crește încrederea rapid.
          </p>
          <ol className="mt-8 grid gap-2 sm:grid-cols-3">
            {SEMINAR_DAY.map((slot, index) => (
              <motion.li
                key={slot.time}
                className="rounded-2xl border border-bone/10 bg-forest-950 p-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="display tabular text-4xl text-lime">{slot.time}</p>
                <p className="mt-2 text-sm text-bone/75">{slot.text}</p>
              </motion.li>
            ))}
          </ol>
          <ul className="mt-6 space-y-2 text-sm text-bone/70">
            <li>
              <strong className="text-bone">Echipament:</strong> ai nevoie de toate instrumentele proprii.
            </li>
            <li>
              <strong className="text-bone">Modele:</strong> ideal aduci tu modele; dacă nu reușești, putem asigura modele
              contra cost: 100 lei/model (total 300 lei pentru 3 modele).
            </li>
            <li>
              <strong className="text-bone">Pauză de masă:</strong> luăm prânzul împreună, masa ta este asigurată.
            </li>
          </ul>
        </article>
      </Reveal>

      <Reveal className="lg:col-span-12">
        <article className="flex flex-col justify-between gap-8 rounded-[2rem] bg-ink p-7 text-bone md:flex-row md:items-center md:p-10">
          <div>
            <p className="eyebrow text-lime">Cost și rezervare</p>
            <p className="display mt-3 text-[clamp(3rem,7vw,6rem)] leading-none">
              2500 lei <span className="accent text-3xl text-bone/60">/ seminar 1 zi</span>
            </p>
          </div>
          <div className="max-w-md space-y-2 text-sm text-bone/70">
            <p>Rezervare cu minim 2 săptămâni înainte (avans 1000 lei).</p>
            <p>Anulare: cu mai puțin de 7 zile înainte, avansul nu se returnează.</p>
            <div className="pt-4">
              <Button href={whatsappLink("Bună! Vreau să rezerv un seminar 1 la 1.")} external>
                Rezervă un seminar
              </Button>
            </div>
          </div>
        </article>
      </Reveal>
    </div>
  </section>
);

export const StrategicSession = () => (
  <section className="bg-ink py-24 text-bone md:py-36">
    <div className="container-x grid items-center gap-12 lg:grid-cols-2">
      <ClipReveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
        <Image src="/images/ungureanu2026-2.jpg" alt="Ciprian Ungureanu" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </ClipReveal>
      <div>
        <Eyebrow className="text-lime">Sesiune strategică</Eyebrow>
        <SplitText as="h2" text="Mentorat 60 minute" className="display mt-6 block text-[clamp(3rem,6.5vw,6rem)]" />
        <p className="accent mt-1 text-4xl text-lime">— Ciprian Ungureanu</p>
        <Reveal>
          <p className="mt-6 text-lg leading-relaxed text-bone/75">
            Pentru frizerii care vor claritate, validare tehnică și un plan concret. Analizăm lucrările tale (foto/video),
            identificăm ce trebuie corectat și îți recomandăm ruta de perfecționare. Este „busola” care te pune pe direcția
            corectă, fără risipă de timp.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Analiză lucrări foto/video", "Recomandare tip de 1 la 1 potrivit", "Direcție clară de dezvoltare"].map((item) => (
              <li key={item} className="rounded-full border border-lime/30 px-4 py-2 text-sm text-lime">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink("Bună! Vreau să programez o sesiune strategică de 60 de minute cu Ciprian Ungureanu.")} external arrow={false}>
              <WhatsAppIcon /> Programează pe WhatsApp
            </Button>
            <Button href="#optiuni" variant="outline-light">
              Vezi pachetele
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
    <div className="container-x mt-16">
      <Reveal className="overflow-hidden rounded-[2rem] border border-lime/20 bg-forest-950 p-2">
        <div className="tidycal-embed" data-path="agentiemarketing0/ciprian-ungureanu-specializare" />
      </Reveal>
      <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" strategy="lazyOnload" />
    </div>
  </section>
);

const THEMES: Record<MentorOption["theme"], { card: string; accent: string; muted: string; button: "lime" | "ink" }> = {
  lime: { card: "bg-lime text-ink", accent: "text-forest", muted: "text-ink/70", button: "ink" },
  forest: { card: "bg-forest text-bone", accent: "text-lime", muted: "text-bone/70", button: "lime" },
  bone: { card: "bg-ink text-bone border border-lime/20", accent: "text-lime", muted: "text-bone/70", button: "lime" },
  ink: { card: "bg-forest-950 text-bone border border-bone/10", accent: "text-lime", muted: "text-bone/70", button: "lime" },
};

const OptionCard = ({ option, index }: { option: MentorOption; index: number }) => {
  const theme = THEMES[option.theme];
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: index % 2 ? 0.05 : 0 }}
    >
      <article
        className={clsx(
          "grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.8fr_1.2fr]",
          index % 2 === 1 && "lg:grid-cols-[1.2fr_0.8fr] lg:[&>*:first-child]:order-2",
          theme.card,
        )}
      >
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image src={option.image} alt={option.label} fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
          <span className="display absolute left-5 top-3 text-[7rem] leading-none text-bone mix-blend-difference">{option.code}</span>
        </div>
        <div className="p-7 md:p-10">
          <p className={clsx("eyebrow", theme.accent)}>{option.label}</p>
          <h3 className="display mt-3 text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.92]">{option.title}</h3>
          <p className={clsx("mt-5 leading-relaxed", theme.muted)}>{option.intro}</p>
          <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {option.blocks.map((block) => (
              <div key={block.title}>
                <p className="font-semibold">{block.title}</p>
                <ul className={clsx("mt-2 space-y-1 text-sm", theme.muted)}>
                  {block.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {option.quote && <p className={clsx("accent mt-6 text-xl leading-snug md:text-2xl", theme.accent)}>{option.quote}</p>}
          {option.closing && <p className="mt-4 font-semibold">{option.closing}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={whatsappLink(option.cta.message)} external variant={theme.button} arrow={false}>
              <WhatsAppIcon /> {option.cta.label}
            </Button>
            {option.secondaryCta && (
              <Button
                href={whatsappLink(option.secondaryCta.message)}
                external
                variant={theme.button === "ink" ? "outline-dark" : "outline-light"}
              >
                {option.secondaryCta.label}
              </Button>
            )}
          </div>
          {option.note && <p className={clsx("mt-5 text-xs", theme.muted)}>{option.note}</p>}
        </div>
      </article>
    </motion.div>
  );
};

export const MentorOptions = () => (
  <section id="optiuni" className="bg-ink pb-24 pt-12 text-bone md:pb-36">
    <div className="container-x">
      <SectionTitle
        kicker="Alege traseul potrivit"
        title="4 posibilități de"
        accent="1 la 1."
        subtitle="Fiecare variantă este „cea mai bună” în felul ei — în funcție de nivelul și obiectivul tău: strategie cu mentorul principal, perfecționare avansată în fade & finishing, consolidare solidă pentru consistență sau bază tehnică profundă pentru a înțelege cum se construiește orice tunsoare."
      />
      <div className="mt-16 flex flex-col gap-6">
        {MENTOR_OPTIONS.map((option, index) => (
          <OptionCard key={option.code} option={option} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export const ClosingBand = () => (
  <section className="bg-lime py-24 text-ink md:py-32">
    <div className="container-x flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-4xl">
        <SplitText as="h2" text="Performanța se construiește prin mentorat corect." className="display block text-[clamp(3rem,7vw,6.5rem)]" />
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-ink/75">
            Scrie-ne și stabilim evaluarea + cea mai bună opțiune pentru nivelul tău. Intră în standardul Fade Academy.
          </p>
        </Reveal>
      </div>
      <Button href={whatsappLink("Bună! Vreau să stabilim o evaluare și opțiunea 1 la 1 potrivită pentru mine.")} external variant="ink" arrow={false}>
        <WhatsAppIcon /> Scrie-ne pe WhatsApp
      </Button>
    </div>
  </section>
);
