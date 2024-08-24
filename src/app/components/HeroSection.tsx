"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import bgImg from "@/images/snake-skin.webp";
import logoImg from "@/images/logo.png";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgLayer1Ref = useRef<HTMLDivElement | null>(null);
  const bgLayer2Ref = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const fadeAcademyRef = useRef<HTMLDivElement | null>(null);

  // Refs for Ciprian Ungureanu text
  const ciprianRef = useRef<HTMLDivElement | null>(null);
  const ungureanuRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Glitch effect timeline
      const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      glitchTimeline
        .to(bgLayer1Ref.current, {
          x: -10,
          skewX: 5,
          duration: 0.05,
          ease: "power4.inOut",
        })
        .to(bgLayer1Ref.current, {
          x: 0,
          skewX: 0,
          duration: 0.05,
          ease: "power4.inOut",
          delay: 0.1,
        });

      glitchTimeline
        .to(bgLayer2Ref.current, {
          x: 10,
          skewX: -5,
          duration: 0.05,
          ease: "power4.inOut",
        })
        .to(bgLayer2Ref.current, {
          x: -10,
          skewX: 5,
          duration: 0.05,
          ease: "power4.inOut",
          delay: 0.1,
        })
        .to(bgLayer2Ref.current, {
          x: 0,
          skewX: 0,
          duration: 0.5,
          ease: "power4.inOut",
          delay: 0.1,
        });

      // Animation for the name "Ciprian Ungureanu"
      const nameTimeline = gsap.timeline();

      nameTimeline
        .from(ciprianRef.current, {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "sine.in",
        })
        .from(ungureanuRef.current, {
          y: -100,
          opacity: 0,
          duration: 1,
          delay: 0.25,
          ease: "sine.in",
        });

      // Stamp effect animation for the logo
      gsap.fromTo(
        logoRef.current,
        { scale: 4, rotate: -75, opacity: 0, y: -200 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          y: 50,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          delay: 1.5,
        }
      );

      // Bounce in effect for FADE ACADEMY text
      gsap.from(fadeAcademyRef.current, {
        x: -500,
        opacity: 0,
        duration: 2.5,
        ease: "bounce.out",
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Layers for Glitch Effect */}
      <div
        ref={bgLayer1Ref}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "98% 100%",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        ref={bgLayer2Ref}
        className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-20 flex flex-col space-y-6 md:space-y-4">
        {/* Ciprian Ungureanu Name */}
        <div className="flex flex-row space-x-2 md:space-x-6 items-center justify-center pt-20 lg:pt-0">
          <div ref={ciprianRef} className="flex items-center">
            <h1 className="font-luxurious-script text-7xl md:text-9xl text-[#000000] pr-2">
              C
            </h1>
            <h1 className="font-familjen-grotesk text-4xl md:text-6xl text-[#000000] opacity-85">
              iprian
            </h1>
          </div>
          <div ref={ungureanuRef} className="flex items-center">
            <h1 className="font-luxurious-script text-7xl md:text-9xl text-[#000000] pr-2">
              U
            </h1>
            <h1 className="font-familjen-grotesk text-4xl md:text-6xl text-[#000000] opacity-85">
              ngureanu
            </h1>
          </div>
        </div>

        <div
          ref={logoRef}
          className="absolute z-10 top-14 left-20 md:top-20 md:left-20 pt-10 lg:pt-0"
        >
          <Image
            src={logoImg}
            alt="logo by Ciprian Ungureanu"
            className="w-24 h-24 lg:w-80 lg:h-80"
          />
        </div>

        {/* Text Sections */}
        <h1
          ref={fadeAcademyRef}
          className="text-5xl lg:text-[11.5rem] font-stint-ultra-expanded text-right pr-5 lg:pr-20 text-[#333333] pt-10 md:pt-0"
        >
          FADE ACADEMY
        </h1>
        <h1 className="text-3xl md:text-6xl font-pontano-sans text-center pr-5 md:pr-20 lg:pr-0 text-[#33333] pt-6 md:pt-10 opacity-85">
          Invata de la cel mai{" "}
          <span className="font-extrabold text-4xl md:text-7xl font-stint-ultra-expanded text-[#00BD9D]">
            BUN
          </span>
        </h1>

        <h1 className="text-md md:text-4xl font-pontano-sans text-right pr-6 max-w-sm md:max-w-7xl ml-auto pt-22 lg:pt-6 text-[#070014] border-b-4 border-[#120808]">
          Sub indrumarea unui expert cu recunoastere internationala, vei invata
          frizeria de la zero, avand siguranta unei cariere de succes in aceasta
          industrie.
        </h1>

        {/* Buttons (centered) */}
      </div>
    </div>
  );
}
