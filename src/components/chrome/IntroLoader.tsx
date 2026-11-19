"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CHAMPION_STREAK_LABEL, CHAMPION_YEARS } from "@/data/site";
import { usePageTransition } from "@/components/motion/transition";

const SESSION_KEY = "fa_intro";
const STEP_MS = 230;
const EASE = [0.76, 0, 0.24, 1] as const;

const introSeen = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
};

/** First-visit loader: years count up 2020 → 2026, then the screen lifts. */
export const IntroLoader = () => {
  const { markIntroDone } = usePageTransition();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (introSeen() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      markIntroDone();
      return;
    }
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      if (step < CHAMPION_YEARS.length) {
        setIndex(step);
        return;
      }
      clearInterval(timer);
      setTimeout(() => {
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
        setVisible(false);
        markIntroDone();
      }, 650);
    }, STEP_MS);
    return () => clearInterval(timer);
  }, [markIntroDone]);

  const progress = (index + 1) / CHAMPION_YEARS.length;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-intro
          className="grain fixed inset-0 z-[95] flex flex-col justify-between bg-forest-950 p-5 text-bone sm:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="flex justify-between">
            <p className="eyebrow text-lime">Fade Academy • Education</p>
            <p className="eyebrow text-bone/50">#1 Barber Education • România</p>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="display text-[clamp(2rem,6vw,5rem)] text-bone/30">#1 România</p>
              <div className="relative h-[clamp(6rem,24vw,22rem)] overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.p
                    key={CHAMPION_YEARS[index]}
                    className="display tabular text-[clamp(6rem,24vw,22rem)] leading-[0.95] text-lime"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    {CHAMPION_YEARS[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <p className="accent hidden pb-6 text-3xl text-bone/80 md:block">{CHAMPION_STREAK_LABEL}</p>
          </div>

          <div className="h-px w-full bg-bone/15">
            <motion.div className="h-full origin-left bg-lime" animate={{ scaleX: progress }} transition={{ duration: 0.25 }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
