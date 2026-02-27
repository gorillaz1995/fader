"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const ACCENT = "#79FD15";

const AwardPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenAwardPopup");
    if (!hasSeenPopup) {
      const t = setTimeout(() => setShowPopup(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (showPopup && modalRef.current) {
      const ctx = gsap.context(() => {
        gsap.set([overlayRef.current, modalRef.current], { opacity: 0 });
        gsap.set(modalRef.current, { scale: 0.92, y: 28 });
        gsap.set([imageRef.current, textRef.current, buttonRef.current], {
          opacity: 0,
          y: 14,
        });

        const tl = gsap.timeline();
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.28,
          ease: "power2.out",
        })
          .to(
            modalRef.current,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "back.out(1.2)",
            },
            "-=0.18",
          )
          .to(
            imageRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
            },
            "-=0.2",
          )
          .to(
            textRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
            },
            "-=0.28",
          )
          .to(
            buttonRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
            },
            "-=0.28",
          );
      });

      return () => ctx.revert();
    }
  }, [showPopup]);

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowPopup(false);
          localStorage.setItem("hasSeenAwardPopup", "true");
        },
      });

      tl.to([imageRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        y: -14,
        duration: 0.22,
        ease: "power2.in",
      })
        .to(
          modalRef.current,
          {
            opacity: 0,
            scale: 0.96,
            y: 18,
            duration: 0.24,
            ease: "power2.in",
          },
          "-=0.12",
        )
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.24,
            ease: "power2.in",
          },
          "-=0.12",
        );
    }
  };

  const handleEnroll = () => {
    localStorage.setItem("hasSeenAwardPopup", "true");
    router.push("/curs-frizerie-bucuresti");
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md"
        onClick={handleClose}
      >
        {/* Subtle green glow */}
        <div className="pointer-events-none absolute -bottom-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[#79FD15]/16 blur-[110px]" />
      </div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
      >
        <div
          className="pointer-events-auto relative w-full max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[95vh] overflow-y-auto rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-xl shadow-[0_18px_90px_rgba(0,0,0,0.85)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Accent line */}
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/10 hover:bg-black/85 active:bg-black flex items-center justify-center transition-colors duration-200 text-white text-2xl touch-manipulation"
            aria-label="Închide"
            title="Închide"
          >
            ×
          </button>

          {/* Content */}
          <div className="flex flex-col">
            {/* Image Section */}
            <div
              ref={imageRef}
              className="relative w-full h-52 sm:h-60 md:h-72 lg:h-80 flex items-center justify-center p-4 sm:p-6"
            >
              {/* Image container */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/ungureanu2026-5.jpg"
                  alt="Premiu recunoaștere internațională - Ciprian Ungureanu"
                  fill
                  className="object-contain rounded-2xl shadow-[0_18px_70px_rgba(0,0,0,0.75)]"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 45vw"
                />
              </div>

              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-black/25 via-transparent to-black/60" />

              {/* Corner chip */}
              <div className="absolute top-3 left-3 rounded-full bg-black/70 border border-[#79FD15]/25 px-3 py-1 text-xs font-pontano-sans text-white/90 backdrop-blur-md">
                Recunoaștere internațională
                <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[#79FD15] shadow-[0_0_16px_#79FD15]" />
              </div>
            </div>

            {/* Text Section */}
            <div
              ref={textRef}
              className="w-full p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center"
            >
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-stint-ultra-expanded text-white leading-tight">
                  Fapte, nu vorbe<span className="text-[#79FD15]">.</span>
                </h2>

                <p className="mt-3 text-sm sm:text-base md:text-lg font-pontano-sans text-white/80">
                  Excelență validată — mentorat pentru frizeri care vor
                  rezultate reale.
                </p>

                <p className="mt-2 text-xs sm:text-sm md:text-base font-pontano-sans text-white/65">
                  Alătură-te cursului condus de un educator de top și ridică
                  standardul execuției tale.
                </p>
              </div>

              <div className="rounded-2xl border border-[#79FD15]/18 bg-black/40 backdrop-blur-md p-4 sm:p-5 mb-5 sm:mb-6">
                <p className="text-base sm:text-lg md:text-xl font-pontano-sans font-semibold text-white">
                  Înscrie-te la cursul
                </p>
                <p className="mt-1 text-xl sm:text-2xl md:text-3xl font-stint-ultra-expanded text-[#79FD15] leading-tight">
                  APRILIE - IULIE 2026
                </p>
                <p className="mt-2 text-xs sm:text-sm font-pontano-sans text-white/65">
                  Locuri limitate • Focus practică • Standard Fade Academy
                </p>
              </div>

              {/* CTA Button */}
              <button
                ref={buttonRef}
                onClick={handleEnroll}
                className="w-full rounded-2xl bg-[#79FD15] text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-stint-ultra-expanded shadow-[0_18px_70px_rgba(0,0,0,0.75)] hover:brightness-95 active:scale-[0.99] transition-all duration-200 touch-manipulation"
              >
                Înscrie-te acum
              </button>

              <p className="text-xs sm:text-sm text-white/55 mt-3 sm:mt-4 text-center font-pontano-sans">
                Garantăm excelența • Vei primi detalii imediat după înscriere
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardPopup;
