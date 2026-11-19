"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { ASSISTANTS, TEACHERS } from "@/data/team";
import type { Teacher } from "@/data/team";
import { ClipReveal, Reveal } from "@/components/motion/primitives";
import { Chip, SectionTitle } from "@/components/ui";

const TeacherBlock = ({ teacher, index }: { teacher: Teacher; index: number }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const flipped = index % 2 === 1;

  return (
    <article className="grid gap-10 border-t border-bone/10 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
      <div className={clsx("lg:col-span-5", flipped && "lg:order-2")}>
        <div className="lg:sticky lg:top-24">
          <ClipReveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest">
            <Image src={teacher.image} alt={teacher.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </ClipReveal>
          <p className="accent mt-5 text-3xl text-lime">„{teacher.motto}”</p>
          <p className="eyebrow mt-1 text-bone/40">Stilul de predare</p>
        </div>
      </div>

      <div className={clsx("lg:col-span-7", flipped && "lg:order-1")}>
        <p className="tabular text-sm text-bone/40">{String(index + 1).padStart(2, "0")} / {String(TEACHERS.length).padStart(2, "0")}</p>
        <Reveal>
          <h3 className="display mt-3 text-[clamp(3.5rem,8vw,7.5rem)]">{teacher.name}</h3>
          <p className="mt-2 text-lg text-bone/60">{teacher.role}</p>
          {teacher.chips && (
            <div className="mt-5 flex flex-wrap gap-2">
              {teacher.chips.map((chip) => (
                <Chip key={chip} tone="lime">
                  {chip}
                </Chip>
              ))}
            </div>
          )}
        </Reveal>

        <ul className="mt-10 border-b border-bone/10">
          {teacher.qa.map((item, qaIndex) => {
            const open = openIndex === qaIndex;
            return (
              <li key={item.q} className="border-t border-bone/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : qaIndex)}
                  aria-expanded={open}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className={clsx("text-lg font-semibold transition-colors md:text-xl", open ? "text-lime" : "group-hover:text-lime")}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className={clsx(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-full border text-lg",
                      open ? "border-lime bg-lime text-ink" : "border-bone/20",
                    )}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 leading-relaxed text-bone/70">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export const Teachers = () => (
  <section id="profesori" className="bg-ink pt-24 text-bone md:pt-36">
    <div className="container-x">
      <SectionTitle
        kicker="Top-level training • standarde reale, fără scurtături"
        title="Profesorii"
        accent="noștri."
        subtitle="O echipă construită pe disciplină, practică și mentalitatea „faci de 100 de ori până iese perfect”."
      />
      <div className="mt-12">
        {TEACHERS.map((teacher, index) => (
          <TeacherBlock key={teacher.name} teacher={teacher} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export const Assistants = () => (
  <section className="bg-forest-950 py-24 text-bone md:py-32">
    <div className="container-x">
      <SectionTitle
        kicker="Suport real în sală • feedback rapid • ritm bun"
        title="Asistenții"
        accent="noștri."
        subtitle="Îți stau aproape în practică: poziție, unghiuri, control și corecții — fix când ai nevoie."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {ASSISTANTS.map((assistant, index) => (
          <Reveal key={assistant.name} delay={index * 0.1}>
            <article className="group grid h-full overflow-hidden rounded-[2rem] border border-bone/10 bg-forest-900 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-square sm:aspect-auto">
                <Image
                  src={assistant.image}
                  alt={assistant.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="display text-5xl">{assistant.name}</h3>
                  <p className="mt-1 text-sm text-lime">{assistant.role}</p>
                  <p className="mt-5 leading-relaxed text-bone/70">{assistant.text}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {assistant.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-bone/5 px-3 py-1 text-xs uppercase tracking-widest text-bone/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
