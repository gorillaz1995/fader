"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { INTAKE, whatsappLink } from "@/data/site";
import { Button, WhatsAppIcon } from "@/components/ui";

const SESSION_KEY = "fa_teaser_2027";
const EASE = [0.76, 0, 0.24, 1] as const;
const EXCLUDED = ["/politica-cookie-uri"];

const getRemaining = () => {
  const diff = Math.max(0, new Date(INTAKE.startISO).getTime() - Date.now());
  return {
    zile: Math.floor(diff / 86_400_000),
    ore: Math.floor((diff / 3_600_000) % 24),
    min: Math.floor((diff / 60_000) % 60),
    sec: Math.floor((diff / 1000) % 60),
  };
};

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
};

const markSeen = () => {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
};

/** Suspense CTA for the 2027 intake. Opens once per session after a delay or deep scroll. */
export const Teaser2027 = () => {
  const [open, setOpen] = useState(false);
  const [remaining, setRemaining] = useState(getRemaining);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (EXCLUDED.includes(pathname) || alreadySeen()) return;
    const show = () => {
      if (alreadySeen()) return;
      markSeen();
      setOpen(true);
    };
    const timer = setTimeout(show, 9000);
    const onScroll = () => {
      const depth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (depth > 0.45) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const tick = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => {
      clearInterval(tick);
      lenis?.start();
    };
  }, [open, lenis]);

  const digits = String(INTAKE.year).split("");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[85] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          role="dialog"
          aria-modal="true"
          aria-label={`Înscrieri ${INTAKE.year}`}
        >
          <button type="button" aria-label="Închide" className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <motion.div
            className="grain relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-forest-950 text-bone md:grid-cols-[1fr_1.15fr]"
            initial={{ clipPath: "inset(50% 50% 50% 50% round 2rem)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
            exit={{ clipPath: "inset(50% 50% 50% 50% round 2rem)" }}
            transition={{ duration: 0.9, ease: EASE }}
            data-lenis-prevent
          >
            <div className="relative hidden min-h-[520px] md:block">
              <Image src="/images/ungureanu2026-5.jpg" alt="Ciprian Ungureanu pe scenă" fill sizes="45vw" className="object-cover grayscale" />
              <div className="absolute inset-0 bg-lime mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-950" />
              <p className="eyebrow absolute left-6 top-6 text-ink">Recunoaștere internațională</p>
            </div>

            <div className="relative p-7 sm:p-10">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone/70 transition hover:bg-lime hover:text-ink"
                aria-label="Închide"
              >
                ✕
              </button>
              <p className="eyebrow text-lime">Grupa {INTAKE.year} • Fade Academy</p>
              <h2 className="display mt-5 text-[clamp(2.6rem,6vw,4.4rem)]">
                Fapte, <span className="accent text-lime">nu vorbe.</span>
              </h2>

              <div className="mt-2 flex text-[clamp(5rem,13vw,9.5rem)] leading-none" aria-hidden>
                {digits.map((digit, index) => (
                  <span key={index} className="display overflow-hidden">
                    <motion.span
                      className="block text-lime"
                      initial={{ y: "100%", filter: "blur(12px)" }}
                      animate={{ y: "0%", filter: "blur(0px)" }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 + index * 0.18 }}
                    >
                      {digit}
                    </motion.span>
                  </span>
                ))}
              </div>

              <p className="max-w-md text-bone/75">
                Excelență validată — mentorat pentru frizeri care vor rezultate reale. Următoarea generație începe pe{" "}
                <strong className="text-bone">{INTAKE.startLabel}</strong>. Locurile se ocupă înainte să fie anunțate public.
              </p>

              <div className="mt-6 grid grid-cols-4 gap-2" aria-label="Timp rămas până la începerea cursului">
                {Object.entries(remaining).map(([unit, value]) => (
                  <div key={unit} className="rounded-2xl border border-bone/10 bg-bone/[0.03] px-2 py-3 text-center">
                    <p className="display tabular text-3xl text-bone sm:text-4xl">{String(value).padStart(2, "0")}</p>
                    <p className="eyebrow mt-1 text-[0.6rem] text-bone/50">{unit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  href={whatsappLink(`Bună! Vreau să fiu pe lista prioritară pentru grupa Fade Academy ${INTAKE.year}.`)}
                  external
                  arrow={false}
                >
                  <WhatsAppIcon /> Intră pe lista {INTAKE.year}
                </Button>
                <button type="button" onClick={() => setOpen(false)} className="text-sm text-bone/60 underline-offset-4 hover:text-bone hover:underline">
                  Mai târziu
                </button>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-bone/40">Locuri limitate • Focus practică • Standard Fade Academy</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
