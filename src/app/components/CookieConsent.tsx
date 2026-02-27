"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const ACCENT = "#79FD15";

const CookieConsent: React.FC = () => {
  // Only show after mount so we never touch localStorage during SSR/hydration
  const [mounted, setMounted] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    let cancelled = false;
    const run = () => {
      try {
        const consent = window.localStorage.getItem("cookieConsent");
        if (!cancelled && !consent) {
          const t = setTimeout(() => setShowConsent(true), 300);
          return () => clearTimeout(t);
        }
      } catch {
        // localStorage disabled or unavailable (e.g. private mode) — show banner
        if (!cancelled) setShowConsent(true);
      }
    };
    const cleanup = run();
    return () => {
      cancelled = true;
      if (typeof cleanup === "function") cleanup();
    };
  }, [mounted]);

  const handleAccept = () => {
    try {
      window.localStorage.setItem("cookieConsent", "accepted");
    } catch {
      // ignore when localStorage is disabled
    }
    setShowConsent(false);
  };

  const handleReject = () => {
    try {
      window.localStorage.setItem("cookieConsent", "rejected");
    } catch {
      // ignore when localStorage is disabled
    }
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
      {/* Glow + panel */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#79FD15]/20 blur-[90px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.75)] overflow-hidden">
        {/* Accent line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />

        <div className="p-4 sm:p-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm md:text-base font-pontano-sans text-white/85 leading-relaxed">
                Site-ul nostru utilizează cookie-uri pentru a-ți îmbunătăți
                experiența și pentru a-ți afișa conținut și anunțuri relevante
                atunci când navighezi pe web. Continuă să navighezi pe site sau
                alege să accepți dacă ești de acord cu utilizarea cookie-urilor.
                Alternativ, poți alege tipurile de cookie-uri pe care ești de
                acord să le folosim.
              </p>

              <Link
                href="/politica-cookie-uri"
                className="text-xs md:text-sm mt-2 inline-flex items-center gap-2 font-pontano-sans text-white/70 hover:text-[#79FD15] transition-colors underline underline-offset-4"
              >
                Află mai multe
                <span className="inline-block h-2 w-2 rounded-full bg-[#79FD15] shadow-[0_0_14px_#79FD15]" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <button
                onClick={handleAccept}
                className="px-6 py-3 sm:py-2 rounded-2xl bg-[#79FD15] text-black font-pontano-sans font-bold text-sm md:text-base whitespace-nowrap shadow-[0_18px_60px_rgba(0,0,0,0.6)] hover:brightness-95 transition"
              >
                Permite Cookies
              </button>

              <button
                onClick={handleReject}
                className="px-6 py-3 sm:py-2 rounded-2xl bg-white/5 border border-[#79FD15]/25 text-white font-pontano-sans font-semibold text-sm md:text-base whitespace-nowrap hover:bg-white/10 transition"
              >
                Refuză
              </button>
            </div>
          </div>

          {/* Mobile hint */}
          <p className="mt-3 text-[11px] font-pontano-sans text-white/55">
            Poți schimba oricând preferințele din setările browserului.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
