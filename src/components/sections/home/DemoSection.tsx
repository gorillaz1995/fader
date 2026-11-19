"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { Button } from "@/components/ui";

const STEPS = [
  { word: "Eu demonstrez.", text: "Demonstrație detaliată, pas cu pas — pe un om real, nu pe un clip de pe net." },
  { word: "Tu exersezi.", text: "Tunzi sub supraveghere. Corecții pe unghiuri, secțiuni și tranziții, fix când ai nevoie." },
  { word: "Tu execuți.", text: "Tunzi 100% independent. Mâna capătă siguranță, ochiul vede proporțiile dintr-o privire." },
];

const Step = ({ index, progress, word, text }: { index: number; progress: MotionValue<number>; word: string; text: string }) => {
  const start = index / STEPS.length;
  const end = (index + 1) / STEPS.length;
  const clamp = (value: number) => Math.min(1, Math.max(0, value));
  const isLast = index === STEPS.length - 1;
  const fadeIn = [clamp(start - 0.08), clamp(start + 0.04) || 0.001];
  const opacity = useTransform(
    progress,
    isLast ? fadeIn : [...fadeIn, clamp(end - 0.04), clamp(end + 0.06)],
    isLast ? [0.18, 1] : [index === 0 ? 1 : 0.18, 1, 1, 0.18],
  );
  const x = useTransform(progress, fadeIn, [index === 0 ? 0 : -24, 0]);
  const bar = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.li style={{ opacity, x }} className="relative border-t border-bone/15 py-5 md:py-7">
      <motion.span style={{ scaleX: bar }} className="absolute left-0 top-[-1px] h-[2px] w-full origin-left bg-lime" />
      <div className="flex items-baseline gap-4">
        <span className="tabular text-sm text-lime">0{index + 1}</span>
        <p className="display text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.9]">{word}</p>
      </div>
      <p className="ml-9 mt-2 max-w-md text-bone/65">{text}</p>
    </motion.li>
  );
};

/** Scroll-driven "demonstrate → practice → execute" with the real technique footage. */
export const DemoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const clipPath = useTransform(scrollYProgress, [0, 0.25], ["inset(18% 12% 18% 12% round 999px 999px 2rem 2rem)", "inset(0% 0% 0% 0% round 999px 999px 2rem 2rem)"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 3]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-ink text-bone" aria-label="Metoda Fade Academy">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="container-x grid items-center gap-8 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="eyebrow mb-4 text-lime">Metoda • practică reală, pe oameni reali</p>
            <ol>
              {STEPS.map((step, index) => (
                <Step key={step.word} index={index} progress={scrollYProgress} {...step} />
              ))}
            </ol>
            <div className="mt-6 hidden md:block">
              <Button href="/curs-1-1" variant="outline-light">
                Mentorat 1 la 1
              </Button>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <motion.div style={{ rotate }} className="relative h-[38svh] md:h-[72svh]">
              <motion.div style={{ clipPath }} className="relative aspect-[490/638] h-full overflow-hidden bg-forest">
                <motion.video
                  style={{ scale: videoScale }}
                  className="h-full w-full object-cover"
                  src="/ungureanu-tunde.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Ciprian Ungureanu demonstrează tehnica unui cursant"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </motion.div>
              <span className="accent absolute -bottom-3 -left-6 rotate-[-6deg] rounded-full bg-lime px-5 py-2 text-xl text-ink md:text-2xl">
                live, în salon
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
