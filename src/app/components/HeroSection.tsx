"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Typed from "typed.js";
import logoImg from "@/images/logo.png";
import ScrollButton from "./Buxt";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const fadeAcademyRef = useRef<HTMLDivElement>(null);
  const ciprianRef = useRef<HTMLDivElement>(null);
  const ungureanuRef = useRef<HTMLDivElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);

  /* ---------------- TYPED EFFECT ---------------- */
  useEffect(() => {
    if (!typedRef.current) return;

    const el = typedRef.current;

    Object.assign(el.style, {
      display: "inline-block",
      minWidth: "7ch",
      backgroundColor: "#023d82",
      color: "#ededed",
      padding: "0.15em 0.4em",
      borderRadius: "0.6em",
    });

    const typed = new Typed(el, {
      strings: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false,
      preStringTyped: () => {
        el.style.fontFamily = "'Stint Ultra Expanded', cursive";
        el.style.letterSpacing = "0.15em";
      },
    });

    return () => typed.destroy();
  }, []);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(ciprianRef.current, {
          y: -60,
          opacity: 0,
          duration: 0.8,
        })
        .from(ungureanuRef.current, {
          y: -60,
          opacity: 0,
          duration: 0.8,
        });

      gsap.fromTo(
        logoRef.current,
        { scale: 3, rotate: -60, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1,0.5)",
          delay: 1,
        }
      );

      gsap.from(fadeAcademyRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.2,
        delay: 1.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- SCROLL ---------------- */
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6"
    >
      {/* LOGO */}
      <div ref={logoRef} className="absolute top-6 left-6 md:top-10 md:left-10">
        <Image
          src={logoImg}
          alt="logo"
          width={200}
          height={200}
          className="w-16 md:w-24 lg:w-32"
          priority
        />
      </div>

      {/* NAME */}
      <div className="flex gap-4 mb-6">
        <div ref={ciprianRef} className="flex items-center">
          <h1 className="font-luxurious-script text-5xl md:text-7xl">C</h1>
          <h1 className="font-familjen-grotesk text-2xl md:text-4xl opacity-80">
            iprian
          </h1>
        </div>

        <div ref={ungureanuRef} className="flex items-center">
          <h1 className="font-luxurious-script text-5xl md:text-7xl">U</h1>
          <h1 className="font-familjen-grotesk text-2xl md:text-4xl opacity-80">
            ngureanu
          </h1>
        </div>
      </div>

      {/* MAIN TITLE */}
      <h1
        ref={fadeAcademyRef}
        className="text-4xl md:text-6xl lg:text-8xl font-stint-ultra-expanded text-center text-[#333] mb-6"
      >
        FADE ACADEMY <br />
        <span className="text-[#023d82]">Education</span>
      </h1>

      {/* SUBTITLE */}
      <h2 className="text-lg md:text-2xl font-pontano-sans text-center opacity-80 mb-4">
        Cea mai buna scoala de frizerie <br />
        <span className="font-stint-ultra-expanded text-[#023d82] text-xl md:text-3xl">
          6 ani consecutivi
        </span>
        <br />
        <span ref={typedRef}></span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-lg text-center max-w-3xl opacity-90 mb-8">
        Invata frizerie de la zero si descopera cum au devenit celebri cei mai
        buni frizeri, sub ghidarea unui expert cu recunoastere internationala.
      </p>

      {/* BUTTON */}
      <ScrollButton onClick={handleScroll}>
        Informatii necesare inscriere curs
      </ScrollButton>
    </section>
  );
}
