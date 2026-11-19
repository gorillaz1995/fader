"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Scroll-driven reel: a small video window on lime grows to full-bleed while the page
 * fades from lime to ink — the "green-to-black" bridge into the course section.
 */
export const HeroReel = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["inset(26% 30% 26% 30% round 2.5rem)", "inset(0% 0% 0% 0% round 0rem)"],
  );
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1.35, 1]);
  const background = useTransform(scrollYProgress, [0.45, 0.85], ["#affc41", "#050805"]);
  const leftX = useTransform(scrollYProgress, [0, 0.55], ["0%", "-60%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.55], ["0%", "60%"]);
  const sideOpacity = useTransform(scrollYProgress, [0.3, 0.55], [1, 0]);
  const quoteOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1]);
  const quoteY = useTransform(scrollYProgress, [0.6, 0.78], [40, 0]);
  const fadeOut = useTransform(scrollYProgress, [0.82, 1], [1, 0.55]);

  return (
    <motion.section ref={ref} style={{ backgroundColor: background }} className="relative h-[280vh]" aria-label="Fade Academy reel">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div style={{ clipPath, opacity: fadeOut }} className="absolute inset-0 bg-ink">
          <motion.video
            style={{ scale: videoScale }}
            className="h-full w-full object-cover grayscale contrast-125"
            src="/video-bg-c2.mp4"
            poster="/images/ungureanu2026-1.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-lime mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/30" />
          <motion.div style={{ opacity: quoteOpacity, y: quoteY }} className="absolute inset-x-0 bottom-[12%] px-4 text-center">
            <p className="display text-[clamp(3rem,10vw,10rem)] leading-[0.85] text-bone">
              Best barber school
              <br />
              <span className="accent text-lime">in the country</span>
            </p>
            <p className="mt-6 text-lg text-bone/75">Nu e o promisiune. E standardul pe care îl livrăm.</p>
          </motion.div>
        </motion.div>

        <motion.p
          style={{ x: leftX, opacity: sideOpacity }}
          className="display pointer-events-none absolute left-[3vw] top-1/2 -translate-y-1/2 text-[clamp(2.5rem,6.5vw,7rem)] text-ink"
        >
          Elită.
        </motion.p>
        <motion.p
          style={{ x: rightX, opacity: sideOpacity }}
          className="display pointer-events-none absolute right-[3vw] top-1/2 -translate-y-1/2 text-right text-[clamp(2.5rem,6.5vw,7rem)] text-ink"
        >
          Tehnică.
        </motion.p>
        <motion.p
          style={{ opacity: sideOpacity }}
          className="eyebrow pointer-events-none absolute inset-x-0 bottom-[10%] text-center text-ink/70"
        >
          Disciplină • scroll
        </motion.p>
      </div>
    </motion.section>
  );
};
