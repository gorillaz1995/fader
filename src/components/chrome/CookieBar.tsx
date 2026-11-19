"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TLink } from "@/components/motion/TLink";

const STORAGE_KEY = "fa_cookie_consent";

const readConsent = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return "unavailable";
  }
};

const writeConsent = (value: "accepted" | "refused") => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage blocked — banner simply closes for this visit */
  }
};

export const CookieBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent()) return;
    const timer = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const decide = (value: "accepted" | "refused") => {
    writeConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Preferințe cookie-uri"
          className="fixed bottom-3 left-3 right-3 z-[60] max-w-md rounded-3xl border border-bone/10 bg-forest-950/95 p-6 text-bone shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6"
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "120%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-3 text-lime">Cookie-uri</p>
          <p className="text-sm leading-relaxed text-bone/75">
            Site-ul nostru utilizează cookie-uri pentru a-ți îmbunătăți experiența și pentru a-ți afișa conținut și anunțuri
            relevante atunci când navighezi pe web. Continuă să navighezi pe site sau alege să accepți dacă ești de acord cu
            utilizarea cookie-urilor. Alternativ, poți alege tipurile de cookie-uri pe care ești de acord să le folosim.{" "}
            <TLink href="/politica-cookie-uri" className="text-lime underline underline-offset-4">
              Află mai multe
            </TLink>
          </p>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="flex-1 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition active:scale-[0.97]"
            >
              Permite Cookies
            </button>
            <button
              type="button"
              onClick={() => decide("refused")}
              className="flex-1 rounded-full border border-bone/20 px-5 py-3 text-sm font-semibold transition hover:bg-bone/10 active:scale-[0.97]"
            >
              Refuză
            </button>
          </div>
          <p className="mt-4 text-xs text-bone/45">Poți schimba oricând preferințele din setările browserului.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
