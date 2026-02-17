"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Import teacher and assistant images
import aiaImage from "@/images/aia121.jpeg";
import faraonusImage from "@/images/stupari.jpg";
import andreiiImage from "@/images/andrei14.jpeg";
import antonioImage from "@/images/antonio121.jpeg";

// Animation variants for scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// BorderBeam component for card animations - Fixed for hydration
const BorderBeam = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden rounded-xl ${className}`}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full bg-gradient-conic from-[#023d82] via-[#0461ab] to-[#023d82] rounded-xl"
      />
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let start = 0;
          const increment = end / (duration * 60); // 60 FPS
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return <span ref={counterRef}>{count}</span>;
};

export default function CursSecundarFrizerie() {
  const heroRef = useRef<HTMLDivElement>(null);
  const teachersRef = useRef<HTMLDivElement>(null);
  const assistantsRef = useRef<HTMLDivElement>(null);
  const courseDetailsRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  // State for video loading error
  const [videoError, setVideoError] = useState(false);

  // Framer Motion useInView hooks for scroll animations
  const teachersInView = useInView(teachersRef, { once: true, amount: 0.3 });
  const assistantsInView = useInView(assistantsRef, {
    once: true,
    amount: 0.3,
  });
  const courseDetailsInView = useInView(courseDetailsRef, {
    once: true,
    amount: 0.3,
  });
  const priceInView = useInView(priceRef, { once: true, amount: 0.3 });

  return (
    <main className="flex flex-col overflow-hidden">
      {/* Hero Section - Mobile First Design */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#ffd700]/80 via-black to-[#ff8c00]/80 px-4 py-8 sm:py-12 md:py-20"
      >
        {/* Desktop Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 hidden sm:block">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image
            src="/images/F.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Video Background - Only on mobile devices with fallback */}
        <div className="absolute inset-0 w-full h-full z-0 sm:hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {!videoError ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              poster="/images/F.webp"
              onError={() => setVideoError(true)}
            >
              <source src="/public/video-bg-c2.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support video */}
              <Image
                src="/images/F.webp"
                alt="Background"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </video>
          ) : (
            // Fallback image when video fails to load
            <Image
              src="/images/F.webp"
              alt="Background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          )}
        </div>

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-stint-ultra-expanded text-white mb-3 sm:mb-4 md:mb-6 leading-tight text-shadow-lg">
              CURS FRIZERIE
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-stint-ultra-expanded text-white mb-4 sm:mb-6 md:mb-8 text-shadow-lg">
              pentru incepatori
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-[#023d82] to-[#0461ab] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-pontano-sans font-semibold">
                PROFESORI FADE ACADEMY BUCURESTI
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <p className="text-base sm:text-lg md:text-xl font-pontano-sans text-white max-w-4xl mx-auto leading-relaxed px-4 text-shadow-sm bg-black/40 p-4 rounded-lg">
              🎓 Începe-ți cariera în frizerie! Acest curs intensiv este
              destinat celor care doresc să învețe tehnicile esențiale ale
              frizeriei, sub îndrumarea unor{" "}
              <strong>
                profesioniști instruiți în arta predării frizeriei de către
                Ciprian Ungureanu
              </strong>
            </p>
          </motion.div>

          {/* Hero Cards - Improved Mobile Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2"
          >
            {/* Price Card - Mobile Optimized */}
            <div className="text-center bg-white/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-stint-ultra-expanded text-[#023d82] leading-tight">
                <AnimatedCounter end={3500} />
              </div>
              <div className="text-xs sm:text-sm md:text-base font-pontano-sans text-[#333333] mt-1 leading-tight">
                Lei - Preț Curs
              </div>
            </div>

            {/* Duration Card - Mobile Optimized */}
            <div className="text-center bg-white/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-stint-ultra-expanded text-[#023d82] leading-tight">
                <AnimatedCounter end={10} />
              </div>
              <div className="text-xs sm:text-sm md:text-base font-pontano-sans text-[#333333] mt-1 leading-tight">
                Săptămâni
              </div>
            </div>

            {/* Date Card - Mobile Optimized */}
            <div className="text-center bg-white/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-stint-ultra-expanded text-[#023d82] leading-tight">
                14 Aprilie - 3 Iulie
              </div>
              <div className="text-xs sm:text-sm md:text-base font-pontano-sans text-[#333333] mt-1 leading-tight">
                2026
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teachers Section - Mobile Optimized */}
      <section
        ref={teachersRef}
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#cbdad4] to-[#bfd1ca] px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4 md:mb-6">
              PROFESORII NOSTRI
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-pontano-sans text-[#333333] max-w-3xl mx-auto px-4">
              Învață de la cei mai buni profesioniști cu recunoaștere
              internațională
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Teacher 1 - Aia */}
            <motion.div className="teacher-card relative">
              <div className="relative overflow-hidden rounded-2xl shadow-[4px_8px_16px_rgba(0,0,0,0.3)] bg-[#1a1a1a] border-2 border-[#333333]">
                <div className="relative z-10 p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-[#023d82] ring-opacity-20">
                        <Image
                          src={aiaImage}
                          alt="Aia - Profesor principal"
                          width={224}
                          height={224}
                          className="w-full h-full object-cover object-[center_5%]"
                          priority
                          loading="eager"
                        />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#023d82] rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                          ★
                        </span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-stint-ultra-expanded text-[#4a90e2] mb-2 text-center">
                      TEODORA
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-pontano-sans text-[#e0e0e0] text-center leading-relaxed">
                      Tânără profesoară talentată, formată sub îndrumarea
                      maestrului Ciprian Ungureanu. Excelează în tehnici moderne
                      de frizerie și demonstrează o precizie deosebită în
                      execuție. Pasionată de arta frizeriei și dedicată
                      transmiterii cunoștințelor dobândite către noua generație.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Teacher 2 - Faraonus */}
            <motion.div className="teacher-card relative">
              <div className="relative overflow-hidden rounded-2xl shadow-[4px_8px_16px_rgba(0,0,0,0.3)] bg-[#1a1a1a] border-2 border-[#333333]">
                <div className="relative z-10 p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-[#023d82] ring-opacity-20">
                        <Image
                          src={faraonusImage}
                          alt="Faraonus - Profesor principal"
                          width={224}
                          height={224}
                          className="w-full h-full object-cover object-[center_5%]"
                          priority
                          loading="eager"
                        />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.7,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#023d82] rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                          ★
                        </span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-stint-ultra-expanded text-[#4a90e2] mb-2 text-center">
                      Robert Micu & Alberto Sarbu
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-pontano-sans text-[#e0e0e0] text-center leading-relaxed">
                      Maeștri în arta frizeriei, Robert Micu și Alberto Sârbu
                      combină experiența vastă și precizia impecabilă cu
                      viziunea inovatoare asupra stilului și tehnicilor moderne.
                      Împreună, creează un mediu de învățare dinamic, în care
                      cursanții învață atât rigurozitatea clasica a frizeriei,
                      cât și abordările creative, dezvoltându-și propriul stil
                      și excelența în fiecare detaliu al lucrului lor. Pasiunea
                      lor pentru artă și dedicarea față de transmiterea
                      cunoștințelor asigură o experiență completă și
                      inspirațională pentru fiecare student.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assistants Section - Improved Mobile Design */}
      <section
        ref={assistantsRef}
        className="py-12 sm:py-16 md:py-20 bg-[#cbdad4] px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4 md:mb-6">
              ASISTENTII NOSTRI
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-pontano-sans text-[#333333] max-w-3xl mx-auto px-4">
              Echipa de suport pentru o experiență de învățare completă
            </p>
          </div>

          {/* Improved Mobile Layout - Stack vertically on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Assistant 1 - Andreii */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="assistant-card relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="p-6 sm:p-8">
                  {/* Mobile: Stack vertically, Desktop: Side by side */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-[#023d82] ring-opacity-20 flex-shrink-0">
                      <Image
                        src={andreiiImage}
                        alt="Andrei - Asistent"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-[center_20%]"
                        priority
                        loading="eager"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <h3 className="text-xl sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-2 sm:mb-1">
                        ANDREI
                      </h3>
                      <p className="text-base sm:text-base font-pontano-sans text-[#333333] mb-2 sm:mb-1">
                        Asistent Tehnic
                      </p>
                      <p className="text-sm sm:text-sm font-pontano-sans text-[#666666] leading-relaxed">
                        Specializat în tehnici moderne de styling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Assistant 2 - Antonio */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="assistant-card relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="p-6 sm:p-8">
                  {/* Mobile: Stack vertically, Desktop: Side by side */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-[#023d82] ring-opacity-20 flex-shrink-0">
                      <Image
                        src={antonioImage}
                        alt="Antonio - Asistent"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-[center_15%]"
                        priority
                        loading="eager"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <h3 className="text-xl sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-2 sm:mb-1">
                        ANTONIO
                      </h3>
                      <p className="text-base sm:text-base font-pontano-sans text-[#333333] mb-2 sm:mb-1">
                        Asistent Tehnic
                      </p>
                      <p className="text-sm sm:text-sm font-pontano-sans text-[#666666] leading-relaxed">
                        Expert în tehnici clasice de frizerie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details Section - Mobile Optimized */}
      <section
        ref={courseDetailsRef}
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#bfd1ca] to-[#cbdad4] px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4 md:mb-6">
              DETALII CURS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Course Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="course-detail bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4">
                  📅 PERIOADA CURSULUI
                </h3>
                <div className="space-y-2 font-pontano-sans text-[#333333] text-sm sm:text-base">
                  <p>
                    <strong>Perioada:</strong> APRILIE - IULIE 2026
                  </p>
                  <p>
                    <strong>Data începerii:</strong> 14 APRILIE 2026
                  </p>
                  <p>
                    <strong>Durată:</strong> 2 luni și jumătate (10 săptămâni)
                  </p>
                  <p>
                    <strong>Diplomă:</strong> Recunoscută național și
                    internațional
                  </p>
                </div>
              </div>

              <div className="course-detail bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4">
                  ⏰ PROGRAM
                </h3>
                <div className="space-y-2 font-pontano-sans text-[#333333] text-sm sm:text-base">
                  <p>
                    <strong>📖 Teorie:</strong> 6 ore/săptămână - Marti,
                    Miercuri, Joi in functie de numarul de grupe
                  </p>
                  <p>
                    <strong>✂️ Practică:</strong> 12:00-18:00
                  </p>
                  <p>
                    <strong>🏢 Locație practică:</strong> Salonul nostru
                  </p>
                  <p>
                    <strong>📅 Zilele de practică:</strong> Luni, Marți,
                    Miercuri, Joi
                  </p>
                </div>
              </div>

              <div className="course-detail bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4">
                  📍 LOCAȚIE
                </h3>
                <div className="font-pontano-sans text-[#333333] text-sm sm:text-base">
                  <p>
                    <strong>🗺️ Adresă:</strong> București, Sector 2, Șos.
                    Pantelimon nr. 16
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-4 sm:space-y-6">
              <div className="course-detail bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4">
                  📚 CE VEI ÎNVĂȚA?
                </h3>
                <div className="space-y-2 font-pontano-sans text-[#333333] text-sm sm:text-base">
                  <p>✔️ Tunsori personalizate adaptate fizionomiei</p>
                  <p>✔️ Tehnici clasice cu foarfeca și pieptănul</p>
                  <p>✔️ Tunsori cu mașina de tuns</p>
                  <p>✔️ Clipper over comb</p>
                  <p>✔️ Skin fade și geometria necesară</p>
                  <p>✔️ Rasul bărbii cu briciul</p>
                  <p>✔️ Spălarea părului și îngrijirea scalpului</p>
                  <p>✔️ Styling și tehnici profesionale</p>
                  <p>✔️ Masaj facial și capilar</p>
                  <p>✔️ Noțiuni de geometrie aplicată</p>
                </div>
              </div>

              <div className="course-detail bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4">
                  🛠️ ECHIPAMENTE
                </h3>
                <div className="space-y-2 font-pontano-sans text-[#333333] text-sm sm:text-base">
                  <p>Fiecare cursant trebuie să aibă propriile ustensile</p>
                  <p>Acestea pot fi achiziționate cu reducere</p>
                  <p>
                    🔗 <strong>Barber Store</strong> - partenerul nostru
                  </p>
                  <p>Academia dispune de ustensile pentru practică</p>
                  <p>Practică pe cap de manechin și modele umane</p>
                </div>
              </div>

              <div className="course-detail bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4">
                  📄 ACTE NECESARE
                </h3>
                <div className="space-y-1 font-pontano-sans text-[#333333] text-xs sm:text-sm">
                  <p>📌 Copie certificat de naștere</p>
                  <p>📌 Copie carte de identitate</p>
                  <p>📌 Copie certificat de căsătorie (dacă este cazul)</p>
                  <p>📌 Copie diplomă de studii (minim 8 clase)</p>
                  <p>📌 Aviz medical pentru aptitudine</p>
                  <p className="text-red-600 font-bold">
                    ⚠️ Vârsta minimă: 16 ani
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price and Contact Section - Mobile Optimized */}
      <section
        ref={priceRef}
        className="py-12 sm:py-16 md:py-20 bg-[#cbdad4] px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4 md:mb-6">
              PRET SI CONTACT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Price Card - Mobile Optimized */}
            <div className="price-card relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 bg-white p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-stint-ultra-expanded text-[#023d82] mb-4 sm:mb-6 text-center">
                    💰 COSTURI ȘI PLĂȚI
                  </h3>

                  <div className="space-y-4 font-pontano-sans text-[#333333]">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-stint-ultra-expanded text-[#023d82] mb-2">
                        3500 LEI
                      </div>
                      <div className="text-sm sm:text-base md:text-lg">
                        Preț standard
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-center bg-gradient-to-r from-[#023d82] to-[#0461ab] text-white p-3 sm:p-4 rounded-lg mb-4">
                        <div className="text-xl sm:text-2xl md:text-3xl font-stint-ultra-expanded">
                          3150 LEI
                        </div>
                        <div className="text-xs sm:text-sm">
                          Reducere 10% - plată integrală
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-bold text-base sm:text-lg mb-2">
                        🔹 Plată în rate:
                      </h4>
                      <div className="space-y-1 text-sm sm:text-base">
                        <p>• 1.000 lei – rezervarea locului</p>
                        <p>• 1.500 lei – la începutul cursului</p>
                        <p>• 1.000 lei – la jumătatea cursului</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6">
              <div className="price-card relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 bg-white p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-stint-ultra-expanded text-[#023d82] mb-4 sm:mb-6 text-center">
                      📞 INFORMAȚII ȘI ÎNSCRIERI
                    </h3>

                    <div className="space-y-4 font-pontano-sans text-[#333333]">
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2">
                          📲 Telefon:
                        </h4>
                        <div className="space-y-1 text-sm sm:text-base">
                          <p>
                            📞{" "}
                            <a
                              href="tel:0723403403"
                              className="text-[#023d82] hover:underline font-medium"
                            >
                              0723 403 403
                            </a>
                          </p>
                          <p>
                            📞{" "}
                            <a
                              href="tel:0723705702"
                              className="text-[#023d82] hover:underline font-medium"
                            >
                              0723 705 702
                            </a>
                          </p>
                          <p>
                            📞{" "}
                            <a
                              href="tel:0771418581"
                              className="text-[#023d82] hover:underline font-medium"
                            >
                              0771 418 581
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-bold text-base sm:text-lg mb-2">
                          🔹 Cont bancar:
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          <p>
                            <strong>Beneficiar:</strong> SC Anto Perfect Style
                            SRL
                          </p>
                          <p className="break-all">
                            <strong>IBAN:</strong> RO53BTRLRONCRT0P67302901
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                          <p className="text-red-600 font-bold text-xs sm:text-sm">
                            ⚠️ Politica de anulare: Cu două săptămâni înainte de
                            începerea cursului, avansul nu mai poate fi returnat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="price-card relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative z-10 bg-gradient-to-r from-[#023d82] to-[#0461ab] text-white p-4 sm:p-6 md:p-8 text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-stint-ultra-expanded mb-3 sm:mb-4">
                      🎯 LOCURILE SUNT LIMITATE!
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-pontano-sans mb-4 sm:mb-6">
                      Rezervă-ți acum locul și începe-ți cariera în frizerie!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        window.open("https://wa.me/40723403403", "_blank")
                      }
                      className="bg-white text-[#023d82] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full font-pontano-sans font-bold text-sm sm:text-base"
                    >
                      REZERVĂ ACUM
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
