"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { CHAMPION_STREAK_LABEL, CHAMPION_YEARS } from "@/data/site";
import { Enter, Reveal, Roller, SplitText } from "@/components/motion/primitives";
import { usePageTransition } from "@/components/motion/transition";
import { Button, Chip } from "@/components/ui";

const PILLARS = [
  { label: "Practică", title: "Intensivă", text: "Mâna ta lucrează zilnic." },
  { label: "Tehnică", title: "Fade-uri curate", text: "Formă + control + finisaj." },
  { label: "Mentor", title: "Feedback 1:1", text: "Corectezi rapid, crești sigur." },
  { label: "Carieră", title: "Start pro", text: "Ești gata să lucrezi după curs." },
];

const CHIPS = ["Program intensiv • practică reală", "Mentorat + feedback 1:1", "Standard premium • rezultate rapide"];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

/** Rotating circular badge stuck on the trophy arch. */
const WinnerSeal = () => (
  <div className="absolute -left-7 bottom-[16%] z-20 h-20 w-20 sm:-left-10 sm:h-28 sm:w-28 md:-left-14 md:h-32 md:w-32">
    <svg viewBox="0 0 120 120" className="h-full w-full animate-[spin_14s_linear_infinite]" aria-hidden>
      <defs>
        <path id="seal-circle" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#affc41" stroke="#050805" strokeWidth="2" />
      <text fill="#050805" fontSize="11.5" fontWeight="700" letterSpacing="3.2" style={{ fontFamily: "var(--font-inter)" }}>
        <textPath href="#seal-circle">LOCUL 1 • RECUNOAȘTERE INTERNAȚIONALĂ • </textPath>
      </text>
    </svg>
    <span className="accent absolute inset-0 grid place-items-center text-2xl text-ink sm:text-3xl">Top</span>
  </div>
);

/** Horizontal clipper lines that thin out upward — a skin fade drawn in lines. */
const FadeLines = () => {
  const { ready } = usePageTransition();
  const rows = 11;
  return (
    <div className="flex flex-col-reverse gap-[5%] px-[12%]" aria-hidden>
      {Array.from({ length: rows }, (_, index) => (
        <motion.span
          key={index}
          className="block origin-left rounded-full bg-lime"
          style={{ height: `${Math.max(1, 7 - index * 0.6)}px`, opacity: 1 - index * 0.075 }}
          initial={{ scaleX: 0 }}
          animate={ready ? { scaleX: 1 - index * 0.045 } : {}}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.9 + index * 0.06 }}
        />
      ))}
    </div>
  );
};

/** Black arch "trophy": #1, the rolling champion years, fade lines. */
const TrophyArch = ({ y }: { y: MotionValue<string> }) => {
  const { ready } = usePageTransition();
  return (
    <motion.div style={{ y }} className="relative w-[46vw] shrink-0 sm:w-[38vw] md:h-full md:max-h-[62svh] md:w-auto md:mr-[6vw]">
      <div className="@container relative aspect-[3/4] w-full md:h-full md:w-auto">
        <motion.div
          aria-hidden
          className="absolute -inset-2.5 rounded-b-[1.8rem] rounded-t-[999px] border-[3px] border-dotted border-ink/45 md:-inset-3.5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.9 }}
        />
        <motion.div
          className="grain relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-b-[1.4rem] rounded-t-[999px] bg-ink pb-[8cqw] pt-[22cqw] text-center shadow-[0_40px_80px_-30px_rgba(5,8,5,0.8)]"
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={ready ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
          transition={{ duration: 1.4, ease: EASE_IN_OUT, delay: 0.35 }}
        >
          <div aria-hidden className="absolute left-1/2 top-[30%] h-[70cqw] w-[70cqw] -translate-x-1/2 rounded-full bg-lime/25 blur-[40px]" />
          <p className="eyebrow relative text-[max(0.55rem,4.2cqw)] text-lime/70">România</p>
          <div className="relative -mt-[4cqw]">
            <p className="display text-[58cqw] leading-[0.8] text-lime">#1</p>
            <Roller
              items={CHAMPION_YEARS}
              interval={1100}
              holdLastFor={2200}
              itemClassName="display tabular block text-[22cqw] leading-none text-bone"
            />
            <p className="accent mt-[2cqw] text-[9cqw] leading-none text-bone/70">{CHAMPION_STREAK_LABEL}</p>
          </div>
          <div className="relative w-full">
            <FadeLines />
          </div>
        </motion.div>
        <WinnerSeal />
      </div>
    </motion.div>
  );
};

/** First screen: brand + trophy arch. Sticks while the info panel slides over it. */
const HeroStage = ({ progress }: { progress: MotionValue<number> }) => {
  const { ready } = usePageTransition();
  const scale = useTransform(progress, [0, 1], [1, 0.9]);
  const shade = useTransform(progress, [0, 1], [0, 0.6]);
  const radius = useTransform(progress, [0, 1], ["0rem", "3rem"]);
  const archY = useTransform(progress, [0, 1], ["0%", "-18%"]);
  const titleY = useTransform(progress, [0, 1], ["0%", "-12%"]);

  return (
    <motion.div style={{ scale, borderRadius: radius }} className="grain relative h-full origin-top overflow-hidden bg-lime text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(19,42,19,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(19,42,19,.35) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="container-x relative flex h-full flex-col pb-5 pt-24 md:pb-8 md:pt-28">
        <Enter className="flex flex-wrap items-center justify-between gap-3">
          <Chip tone="ink">#1 Barber Education • România</Chip>
          <p className="eyebrow hidden text-forest sm:block">Înscrieri deschise • locuri limitate</p>
        </Enter>

        <div className="relative flex min-h-0 flex-1 items-center justify-between gap-5 py-6 md:items-end md:gap-8">
          <motion.div style={{ y: archY }} className="min-w-0">
            <Enter delay={0.6} className="max-w-xs pb-2">
              <p className="eyebrow text-[0.62rem] text-forest sm:text-[0.72rem]">Recunoaștere internațională</p>
              <p className="display mt-3 text-[clamp(2.8rem,6vw,6rem)] leading-[0.85]">Locul 1.</p>
              <p className="accent mt-2 text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight text-forest">Fapte, nu vorbe.</p>
              <p className="mt-4 text-[0.82rem] text-ink/70 sm:text-sm">Ciprian Ungureanu — fondator & mentor Fade Academy.</p>
            </Enter>
          </motion.div>
          <TrophyArch y={archY} />
        </div>

        <motion.div style={{ y: titleY }}>
          <div className="mb-1 flex items-end justify-between gap-4">
            <Enter delay={0.15} className="flex items-center gap-3 md:gap-4">
              <span className="h-px w-8 bg-ink/50 md:w-12" />
              <p className="accent whitespace-nowrap text-[clamp(1.2rem,2.4vw,2.2rem)] leading-none text-forest">by Ciprian Ungureanu</p>
            </Enter>
            <motion.span
              aria-hidden
              className="accent whitespace-nowrap text-[clamp(1.2rem,3.2vw,3rem)] leading-none text-forest"
              initial={{ opacity: 0, x: 60, filter: "blur(14px)" }}
              animate={ready ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.55 }}
            >
              / Education
            </motion.span>
          </div>
          <h1 aria-label="Fade Academy Education">
            <SplitText
              text="Fade Academy"
              trigger="ready"
              delay={0.1}
              stagger={0.12}
              className="display block text-[clamp(5rem,16.4vw,19rem)] leading-[0.82] tracking-[-0.015em]"
            />
          </h1>
        </motion.div>
      </div>

      <motion.div aria-hidden style={{ opacity: shade }} className="pointer-events-none absolute inset-0 bg-ink" />
    </motion.div>
  );
};

/** Scissors that open and close as they travel along the cut line. */
const Scissors = ({ progress }: { progress: MotionValue<number> }) => {
  const x = useTransform(progress, [0, 1], ["-10vw", "92vw"]);
  const angle = useTransform(progress, (value) => (Math.sin(value * Math.PI * 14) + 1) * 11);
  const upper = useTransform(angle, (value) => `rotate(${-value} 60 30)`);
  const lower = useTransform(angle, (value) => `rotate(${value} 60 30)`);

  return (
    <motion.div style={{ x }} className="absolute left-0 top-0 z-20 -translate-y-1/2" aria-hidden>
      <svg viewBox="0 0 124 60" className="h-12 w-24 drop-shadow-[0_8px_14px_rgba(0,0,0,0.5)] md:h-14 md:w-28">
        <motion.g transform={upper}>
          <path d="M58 31 L122 29 L64 20 Z" fill="#affc41" stroke="#050805" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M36 21 L60 30" stroke="#affc41" strokeWidth="5" strokeLinecap="round" />
          <circle cx="22" cy="17" r="12" fill="#050805" stroke="#affc41" strokeWidth="5" />
        </motion.g>
        <motion.g transform={lower}>
          <path d="M58 29 L122 31 L64 40 Z" fill="#c4fd66" stroke="#050805" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M36 39 L60 30" stroke="#affc41" strokeWidth="5" strokeLinecap="round" />
          <circle cx="22" cy="43" r="12" fill="#050805" stroke="#affc41" strokeWidth="5" />
        </motion.g>
        <circle cx="60" cy="30" r="3.2" fill="#050805" stroke="#affc41" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
};

/** Forest info panel that slides up over the sticky stage. */
const HeroInfo = ({ progress }: { progress: MotionValue<number> }) => (
  <section className="grain relative z-10 rounded-t-[2.5rem] bg-forest pb-20 text-bone shadow-[0_-40px_80px_-20px_rgba(5,8,5,0.6)] md:pb-28">
    <div className="relative h-0 w-full">
      <div className="absolute inset-x-6 top-10 border-t-2 border-dashed border-lime/30 md:inset-x-10" />
      <div className="absolute inset-x-0 top-10">
        <Scissors progress={progress} />
      </div>
    </div>

    <div className="container-x relative pt-20 md:pt-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-lime">#1 Barber Education • România</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,4.4vw,4.2rem)] leading-[0.92] text-balance">
            Cea mai bună școală de frizerie din țară
          </h2>
          <p className="accent mt-3 text-2xl text-lime">Recunoscută pentru rezultate, disciplină și tehnică.</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4">
          <p className="text-lg leading-relaxed text-bone/80 text-pretty">
            Înveți de la zero, ieși pregătit să lucrezi: fade-uri curate, control pe formă, consultanță și rutină
            profesională — cu un mentor cu recunoaștere internațională.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-3">
            <Button href="#acte">Informații necesare înscriere curs</Button>
            <p className="flex items-center gap-2 text-sm font-medium text-lime">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-lime" /> Înscrieri deschise • locuri limitate
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-4">
          <article className="relative overflow-hidden rounded-[2rem] border border-bone/10 bg-ink p-6 text-bone sm:p-7">
            <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-lime">Elită. Disciplină. Tehnică.</p>
                <h3 className="display mt-3 text-4xl leading-[0.95]">Standardul care face diferența.</h3>
              </div>
              <div className="grid shrink-0 place-items-center rounded-2xl border border-lime/30 px-3 py-2 text-center">
                <span className="accent text-2xl leading-none text-lime">#1</span>
                <span className="text-[0.65rem] text-bone/60">România</span>
              </div>
            </div>
            <p className="relative mt-3 text-sm text-bone/60">Curs construit ca într-un studio profesionist — nu ca “școală”.</p>
            <div className="relative mt-5 grid grid-cols-2 gap-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.label} className="rounded-2xl border border-bone/10 bg-bone/[0.03] p-3.5 transition-colors hover:border-lime/40">
                  <p className="eyebrow text-[0.6rem] text-lime/80">{pillar.label}</p>
                  <p className="mt-1.5 font-semibold">{pillar.title}</p>
                  <p className="mt-0.5 text-xs text-bone/55">{pillar.text}</p>
                </div>
              ))}
            </div>
            <blockquote className="relative mt-3 rounded-2xl bg-lime p-4 text-ink">
              <p className="display text-xl leading-tight">“Best barber school in the country”</p>
              <p className="mt-1 text-xs text-ink/70">Nu e o promisiune. E standardul pe care îl livrăm.</p>
            </blockquote>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export const HomeHero = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: infoRef, offset: ["start end", "start start"] });

  return (
    <div className="relative bg-ink">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <HeroStage progress={scrollYProgress} />
      </div>
      <div ref={infoRef}>
        <HeroInfo progress={scrollYProgress} />
      </div>
    </div>
  );
};
