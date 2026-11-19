"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { COURSE_DETAILS, DOCUMENTS } from "@/data/content";
import { Reveal } from "@/components/motion/primitives";
import { Chip } from "@/components/ui";

const EASE = [0.76, 0, 0.24, 1] as const;

const DetailsDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[85]" role="dialog" aria-modal="true" aria-label="Detalii curs nivel ELITĂ">
          <motion.button
            type="button"
            aria-label="Închide"
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="absolute bottom-0 right-0 top-0 flex w-full max-w-2xl flex-col bg-forest-950 text-bone"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="flex items-center justify-between border-b border-bone/10 px-6 py-5 sm:px-10">
              <p className="display text-2xl sm:text-3xl">
                Detalii curs nivel <span className="text-lime">Elită</span>
              </p>
              <button type="button" onClick={onClose} className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink">
                Închide
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10" data-lenis-prevent>
              <h3 className="display text-4xl">Ce vei învăța?</h3>
              <ol className="mt-5 divide-y divide-bone/10 border-y border-bone/10">
                {COURSE_DETAILS.learn.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex gap-4 py-3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="tabular w-6 text-sm text-lime">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-8 rounded-3xl bg-forest p-6 text-bone">
                <p className="eyebrow text-lime">Brand & Imagine</p>
                <ul className="mt-3 space-y-1.5">
                  {COURSE_DETAILS.brand.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-bone/70">
                  Fiecare cursant trebuie să aibă propriile ustensile. Reduceri la parteneri:{" "}
                  <strong className="text-lime">Barber Store</strong>
                </p>
              </div>

              <h3 className="display mt-12 text-4xl">Competențe</h3>
              <p className="text-bone/60">ce vei stăpâni în practică</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {COURSE_DETAILS.skills.map((item) => (
                  <li key={item} className="rounded-2xl bg-bone/[0.05] px-4 py-3 text-sm text-bone/85">
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="display mt-12 text-4xl">Program curs frizerie</h3>
              <dl className="mt-5 divide-y divide-bone/10 border-y border-bone/10">
                {COURSE_DETAILS.schedule.map((row) => (
                  <div key={row.label} className="grid grid-cols-[110px_1fr] gap-4 py-3">
                    <dt className="font-semibold">{row.label}</dt>
                    <dd className="text-bone/75">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12 rounded-3xl bg-lime p-6 text-ink">
                <h3 className="display text-3xl">Recunoscut național / internațional</h3>
                <p className="mt-3">{COURSE_DETAILS.recognition}</p>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

/** Scissors card (opens course details drawer) + documents required list. */
export const EnrollmentInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="acte" className="bg-ink py-20 md:py-28">
      <div className="container-x grid gap-4 lg:grid-cols-2">
        <Reveal>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative flex h-full min-h-[560px] w-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 text-left text-bone md:p-10"
          >
            <Image
              src="/images/foarfeci7.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
            <div className="relative flex items-start justify-between">
              <Chip tone="lime">Detalii cursuri</Chip>
              <span className="grid h-20 w-20 place-items-center rounded-full bg-lime text-xs font-bold uppercase tracking-widest text-ink transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:rotate-[360deg] group-hover:scale-110">
                Apasă
              </span>
            </div>
            <div className="relative">
              <h2 className="display text-[clamp(2.8rem,5.5vw,5rem)]">Curs frizerie începători</h2>
              <p className="mt-4 max-w-md text-lg text-bone/80">Intră în liga PRO: tehnică, disciplină, rezultate.</p>
              <p className="accent mt-1 text-2xl text-lime">Standardul #1 din România.</p>
              <p className="mt-6 text-sm text-bone/60">Apasă și vezi: ce înveți + program + certificare</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Locuri limitate", "Practică reală", "Mentorat 1:1", "Certificare"].map((chip) => (
                  <Chip key={chip}>{chip}</Chip>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:bg-ink group-hover:text-lime">
                Detalii curs <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-[2rem] bg-lime p-7 text-ink md:p-10">
            <h2 className="display text-[clamp(2.6rem,5vw,4.5rem)]">Acte necesare înscriere curs</h2>
            <p className="mt-3 text-ink/70">99% mobile friendly — listă clară, rapidă, fără stres.</p>
            <ol className="mt-8 space-y-2">
              {DOCUMENTS.map((doc, index) => (
                <Reveal as="li" key={doc.title} delay={index * 0.06} y={20}>
                  <div className="flex gap-4 rounded-2xl bg-ink/[0.06] p-4 transition-colors hover:bg-ink hover:text-bone">
                    <span className="display text-2xl leading-none text-forest">{index + 1}</span>
                    <div>
                      <p className="font-semibold">{doc.title}</p>
                      {doc.note && <p className="mt-1 text-sm opacity-70">{doc.note}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl border border-ink/20 p-4 text-sm">
              <strong>Tip rapid:</strong> Fă poze clare documentelor (scan) — te ajută la înscriere și organizare.
            </p>
          </div>
        </Reveal>
      </div>
      <DetailsDrawer open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

