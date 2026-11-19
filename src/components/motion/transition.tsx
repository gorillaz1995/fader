"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { ROUTE_LABELS } from "@/data/site";

type Phase = "idle" | "cover" | "reveal";

type TransitionContextValue = {
  navigate: (href: string) => void;
  scrollToHash: (hash: string) => void;
  /** True once the page is visible (intro finished and curtain lifting or gone). */
  ready: boolean;
  markIntroDone: () => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("usePageTransition must be used inside <TransitionProvider>");
  return context;
};

const EASE = [0.76, 0, 0.24, 1] as const;
const pathOf = (href: string) => href.split(/[?#]/)[0] || "/";
const hashOf = (href: string) => (href.includes("#") ? `#${href.split("#")[1]}` : "");

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const [phase, setPhase] = useState<Phase>("idle");
  const [introDone, setIntroDone] = useState(false);
  const [label, setLabel] = useState("");
  const targetRef = useRef<string | null>(null);

  const scrollToHash = useCallback(
    (hash: string) => {
      const element = hash ? document.querySelector(hash) : null;
      if (!element) return;
      if (lenis) lenis.scrollTo(element as HTMLElement, { offset: -24, duration: 1.4 });
      else element.scrollIntoView({ behavior: "smooth" });
    },
    [lenis],
  );

  const navigate = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      const path = pathOf(href);
      if (path === pathname) {
        const hash = hashOf(href);
        if (hash) scrollToHash(hash);
        else lenis?.scrollTo(0, { duration: 1.2 });
        return;
      }
      targetRef.current = href;
      setLabel(ROUTE_LABELS[path] ?? "Fade Academy");
      setPhase("cover");
    },
    [phase, pathname, scrollToHash, lenis],
  );

  const handleCovered = useCallback(() => {
    if (targetRef.current) router.push(targetRef.current, { scroll: false });
  }, [router]);

  useEffect(() => {
    if (phase !== "cover" || !targetRef.current) return;
    if (pathOf(targetRef.current) !== pathname) return;
    const hash = hashOf(targetRef.current);
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    targetRef.current = null;
    const frame = requestAnimationFrame(() => {
      setPhase("reveal");
      if (hash) setTimeout(() => scrollToHash(hash), 900);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, phase, lenis, scrollToHash]);

  const markIntroDone = useCallback(() => setIntroDone(true), []);

  const value = useMemo<TransitionContextValue>(
    () => ({ navigate, scrollToHash, ready: introDone && phase !== "cover", markIntroDone }),
    [navigate, scrollToHash, introDone, phase, markIntroDone],
  );

  const panelState = phase === "cover" ? "cover" : phase === "reveal" ? "reveal" : "idle";

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div
        aria-hidden
        className="fixed inset-0 z-[90] overflow-hidden"
        style={{ pointerEvents: phase === "idle" ? "none" : "auto" }}
      >
        <motion.div
          className="absolute inset-0 bg-lime"
          initial="idle"
          animate={panelState}
          variants={{
            idle: { y: "100%", transition: { duration: 0 } },
            cover: { y: "0%", transition: { duration: 0.7, ease: EASE } },
            reveal: { y: "-100%", transition: { duration: 0.8, ease: EASE, delay: 0.12 } },
          }}
        />
        <motion.div
          className="grain absolute inset-0 flex items-center justify-center bg-forest-950"
          initial="idle"
          animate={panelState}
          variants={{
            idle: { y: "100%", transition: { duration: 0 } },
            cover: { y: "0%", transition: { duration: 0.7, ease: EASE, delay: 0.1 } },
            reveal: { y: "-100%", transition: { duration: 0.8, ease: EASE } },
          }}
          onAnimationComplete={(definition) => {
            if (definition === "cover") handleCovered();
            if (definition === "reveal") setPhase("idle");
          }}
        >
          <div className="overflow-hidden px-4 text-center">
            <motion.p
              className="display text-[clamp(3rem,13vw,12rem)] text-lime"
              initial={{ y: "110%" }}
              animate={phase === "cover" ? { y: "0%" } : { y: "-110%" }}
              transition={{ duration: 0.7, ease: EASE, delay: phase === "cover" ? 0.35 : 0 }}
            >
              {label}
            </motion.p>
          </div>
          <p className="eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 text-lime/60">
            Fade Academy • Education
          </p>
        </motion.div>
      </div>
    </TransitionContext.Provider>
  );
};
