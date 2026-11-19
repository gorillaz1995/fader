"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { CityAcademy } from "@/data/content";
import { formatRon, whatsappLink } from "@/data/site";
import { Enter, Reveal, SplitText } from "@/components/motion/primitives";
import { EnrollmentInfo } from "@/components/sections/EnrollmentInfo";
import { MapBlock, Reviews, RotatingStatement } from "@/components/sections/shared";
import { Button, Chip, CopyButton, WhatsAppIcon } from "@/components/ui";

const TRAITS = [
  { label: "Focus", value: "tehnici moderne" },
  { label: "Metodă", value: "practică controlată" },
  { label: "Standard", value: "high-end" },
];

const CityHero = ({ academy }: { academy: CityAcademy }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const cityX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="grain relative min-h-[100svh] overflow-hidden bg-forest-950 text-bone">
      <motion.p
        aria-hidden
        style={{ x: cityX }}
        className="display pointer-events-none absolute bottom-[-0.08em] left-0 whitespace-nowrap text-[28vw] leading-none text-transparent [-webkit-text-stroke:1px_rgba(175,252,65,0.25)]"
      >
        {academy.city} {academy.city}
      </motion.p>

      <div className="container-x relative grid min-h-[100svh] items-end gap-10 pb-14 pt-32 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:pb-16">
          <Enter>
            <Chip tone="lime">Fade Academy • {academy.city}</Chip>
          </Enter>
          <h1 className="mt-8">
            <SplitText text="Fade Academy." trigger="ready" className="display block text-[clamp(4rem,11vw,10.5rem)]" />
            <Enter delay={0.4} className="accent block text-[clamp(3rem,7vw,6.5rem)] leading-none text-lime">
              {academy.city}
            </Enter>
          </h1>
          <Enter delay={0.55}>
            <p className="mt-8 max-w-xl text-lg text-bone/75">
              O experiență premium de învățare — focus pe practică, disciplină și rezultate rapide. Același standard, aceeași
              metodă, aceeași cultură de performanță.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#pret">Vezi preț & contact</Button>
              <Button href="#recenzii" variant="outline-light">
                Vezi recenzii
              </Button>
            </div>
          </Enter>
        </div>
        <Enter delay={0.3} y={80} className="relative lg:col-span-5">
          <motion.div style={{ y: portraitY }} className="relative mx-auto aspect-[945/1181] max-w-md">
            <div aria-hidden className="absolute inset-[10%] rounded-full bg-lime/25 blur-[90px]" />
            <Image
              src={academy.trainer.image}
              alt={academy.trainer.name}
              fill
              priority
              sizes="(min-width: 1024px) 35vw, 80vw"
              className="object-contain mix-blend-lighten"
            />
          </motion.div>
        </Enter>
      </div>
    </section>
  );
};

const Trainer = ({ academy }: { academy: CityAcademy }) => (
  <section className="bg-ink py-24 text-bone md:py-36">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Chip tone="lime">Formator</Chip>
        <SplitText as="h2" text={`${academy.trainer.name}.`} className="display mt-6 block text-[clamp(3rem,6.5vw,6rem)]" />
        <p className="accent mt-2 text-3xl text-lime">{academy.trainer.role}</p>
        <Reveal>
          <dl className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
            {TRAITS.map((trait) => (
              <div key={trait.label} className="flex justify-between py-4">
                <dt className="text-bone/50">{trait.label}</dt>
                <dd className="font-semibold">{trait.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
      <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-24">
        <p className="text-xl leading-relaxed text-bone/75 first-letter:float-left first-letter:mr-3 first-letter:font-[family-name:var(--font-display)] first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-lime">
          {academy.trainer.bio}
        </p>
      </Reveal>
    </div>
  </section>
);

const PriceContact = ({ academy }: { academy: CityAcademy }) => (
  <section id="pret" className="bg-ink pb-24 text-bone md:pb-32">
    <div className="container-x">
      <Reveal className="flex flex-col gap-2 border-t border-bone/10 pt-14 md:flex-row md:items-end md:justify-between">
        <h2 className="display text-[clamp(3rem,7vw,6rem)]">
          Preț & Contact<span className="text-lime">.</span>
        </h2>
        <p className="text-bone/60">Totul clar, rapid, fără fricțiune • Standard Fade Academy</p>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Reveal>
          <article className="h-full rounded-[2rem] bg-lime p-7 text-ink md:p-9">
            <p className="eyebrow">Preț</p>
            <p className="display mt-4 text-7xl md:text-8xl">{formatRon(academy.price)}</p>
            <p className="mt-3 text-ink/70">Plată simplă • Detalii la înscriere</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button href={whatsappLink(`Bună! Vreau să rezerv un loc la Fade Academy ${academy.city}.`, academy.phone.tel.replace("+", ""))} external variant="ink" arrow={false}>
                <WhatsAppIcon /> Rezervă
              </Button>
              <Button href={`tel:${academy.phone.tel}`} variant="outline-dark" arrow={false}>
                Întreabă detalii
              </Button>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-[2rem] bg-forest-900 p-7 md:p-9">
            <p className="eyebrow text-lime">Contact</p>
            <CopyButton value={academy.phone.tel} className="mt-4 block">
              <span className="display block text-5xl hover:text-lime">{academy.phone.label}</span>
            </CopyButton>
            {academy.facebook && (
              <a href={academy.facebook} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm text-bone/70 hover:text-lime">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V14h2.7v8z" />
                </svg>
                Facebook
              </a>
            )}
          </article>
        </Reveal>
        <Reveal delay={0.16}>
          <article className="h-full rounded-[2rem] border border-bone/10 p-7 md:p-9">
            <p className="eyebrow text-bone/50">📍 Locație</p>
            <p className="display mt-4 text-4xl">{academy.location.name}</p>
            <p className="mt-2 text-bone/70">{academy.location.address}</p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export const CityAcademyPage = ({ academy }: { academy: CityAcademy }) => (
  <>
    <CityHero academy={academy} />
    <RotatingStatement />
    <Trainer academy={academy} />
    <PriceContact academy={academy} />
    <MapBlock title="Unde ne găsești" query={academy.location.mapQuery} address={academy.location.address} />
    <EnrollmentInfo />
    <div id="recenzii">
      <Reviews reviews={academy.reviews} subtitle="Feedback real de la cursanți" />
    </div>
    <section className="bg-lime py-20 text-ink md:py-28">
      <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="display text-[clamp(3rem,8vw,7rem)]">Vrei să începi?</h2>
          <p className="mt-4 max-w-xl text-lg text-ink/75">
            Trimite-ne un mesaj și îți spunem rapid ce variantă de curs ți se potrivește în {academy.city}.
          </p>
        </div>
        <Button href={whatsappLink(`Bună! Vreau să încep cursul de frizerie în ${academy.city}.`, academy.phone.tel.replace("+", ""))} external variant="ink" arrow={false}>
          <WhatsAppIcon /> Scrie pe WhatsApp
        </Button>
      </div>
    </section>
  </>
);
