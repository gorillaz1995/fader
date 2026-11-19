"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { GALLERY } from "@/data/content";

/** Pinned horizontal gallery: vertical scroll drives the strip sideways. */
export const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative bg-ink text-bone" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="container-x mb-8 flex items-end justify-between">
          <h2 className="display text-[clamp(3.5rem,10vw,9rem)]">
            Galerie<span className="text-lime">.</span>
          </h2>
          <p className="accent hidden max-w-xs text-right text-2xl text-bone/60 md:block">Scena, salonul, oamenii.</p>
        </div>
        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-4 pl-[clamp(1rem,4vw,3.5rem)] pr-[10vw]">
          <figure className="relative h-[58vh] w-[43vh] shrink-0 overflow-hidden rounded-[1.75rem] bg-forest">
            <video
              className="h-full w-full scale-[1.12] object-cover object-[50%_80%]"
              src="/ugnureanu-sarbatoare.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Ciprian Ungureanu pe locul 1, pe scenă"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              Locul 1 • pe scenă
            </span>
            <figcaption className="accent absolute bottom-4 left-5 text-2xl text-bone">Fapte, nu vorbe.</figcaption>
          </figure>
          {GALLERY.map((src, index) => (
            <figure
              key={src}
              className={`relative shrink-0 overflow-hidden rounded-[1.75rem] bg-forest ${
                index % 3 === 0 ? "h-[58vh] w-[42vh]" : index % 3 === 1 ? "h-[46vh] w-[64vh] self-end" : "h-[52vh] w-[40vh]"
              }`}
            >
              <Image src={src} alt={`Fade Academy galerie ${index + 1}`} fill sizes="60vh" className="object-cover transition-transform duration-1000 hover:scale-105" />
              <figcaption className="tabular absolute bottom-3 left-4 text-xs text-bone/70">
                {String(index + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <div className="container-x mt-8">
          <div className="h-px w-full bg-bone/15">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-lime" />
          </div>
        </div>
      </div>
    </section>
  );
};
