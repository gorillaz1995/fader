"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Typed from "typed.js";
import logoImg from "@/images/logo.png";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const fadeAcademyRef = useRef<HTMLDivElement>(null);
  const ciprianRef = useRef<HTMLDivElement>(null);
  const ungureanuRef = useRef<HTMLDivElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      // Set a fixed width to prevent layout shift
      typedRef.current.style.display = "inline-block";
      typedRef.current.style.minWidth = "7ch"; // Adjust based on the longest year

      const typed = new Typed(typedRef.current, {
        strings: ["2019", "2020", "2021", "2022", "2023", "2024"],
        typeSpeed: 70, // Slower typing speed
        backSpeed: 40, // Slower backspace speed
        backDelay: 1700, // Increased delay before backspacing
        loop: true,
        showCursor: false,
        // Remove the stringsElement property
        preStringTyped: (arrayPos, self) => {
          if (typedRef.current) {
            typedRef.current.style.color = "#023d82";
            typedRef.current.style.fontFamily =
              "'Stint Ultra Expanded', cursive";
            typedRef.current.style.letterSpacing = "0.15em";
          }
        },
      });

      return () => {
        typed.destroy(); // Cleanup on unmount
        if (typedRef.current) {
          typedRef.current.style.display = "  ";
          typedRef.current.style.minWidth = " ";
        }
      };
    }
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
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

      gsap.from(fadeAcademyRef.current, {
        x: -500,
        opacity: 0,
        duration: 2.5,
        ease: "bounce.out",
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-20 flex flex-col space-y-6 md:space-y-4">
        <div className="flex flex-row space-x-2 md:space-x-6 items-center justify-center pt-10  lg:pt-0">
          <div ref={ciprianRef} className="flex items-center">
            <h1 className="font-luxurious-script text-7xl md:text-9xl text-black pr-2">
              C
            </h1>
            <h1 className="font-familjen-grotesk text-4xl md:text-6xl text-black opacity-85">
              iprian
            </h1>
          </div>
          <div ref={ungureanuRef} className="flex items-center">
            <h1 className="font-luxurious-script text-7xl md:text-9xl text-black pr-2">
              U
            </h1>
            <h1 className="font-familjen-grotesk text-4xl md:text-6xl text-black opacity-85">
              ngureanu
            </h1>
          </div>
        </div>

        <div
          ref={logoRef}
          className="absolute z-10 top-2 left-20 md:top-20 md:left-20 pt-10 lg:pt-0"
        >
          <Image
            src={logoImg}
            alt="logo by Ciprian Ungureanu"
            width={320}
            height={320}
            className="w-24 h-24 lg:w-80 lg:h-80"
            priority
          />
        </div>

        <h1
          ref={fadeAcademyRef}
          className="text-5xl lg:text-[11.5rem] font-stint-ultra-expanded text-right pr-5 lg:pr-20 text-[#333333] pt-10 md:pt-0"
        >
          FADE ACADEMY
        </h1>

        <h1 className="text-4xl md:text-4xl font-pontano-sans text-center pr-5 md:pr-20 lg:pr-0 text-[#333] pt-6 md:pt-10 opacity-85">
          Cea mai buna scoala de frizerie{" "}
          <span className="font-extrabold text-[#023d82]">5 ani</span> la rand!{" "}
          <br></br>
          <span ref={typedRef}></span>
        </h1>

        <h1 className="text-md md:text-4xl font-pontano-sans text-right pr-6 max-w-sm md:max-w-7xl ml-auto pt-22 lg:pt-6 text-[#000000] border-b-4 border-[#023d82]">
          Invata frizerie de la zero si descopera cum au devenit celebri cei mai
          buni frizeri, sub ghidarea unui expert cu recunoastere internationala.
        </h1>
      </div>
    </div>
  );
}
