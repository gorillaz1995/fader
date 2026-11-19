"use client";

import { motion } from "motion/react";
import { BANK, COURSES, formatRon, whatsappLink } from "@/data/site";
import { Reveal } from "@/components/motion/primitives";
import { TLink } from "@/components/motion/TLink";
import { Button, CopyButton, SectionTitle, WhatsAppIcon } from "@/components/ui";

const course = COURSES.grandmaster;

export const GrandMasterPricing = () => (
  <section id="preturi" className="bg-ink py-24 text-bone md:py-36">
    <div className="container-x">
      <SectionTitle kicker="Prețuri" title="Totul clar. Totul premium." accent="Fără surprize." />

      <div className="mt-16 grid gap-4 lg:grid-cols-12">
        {/* Main price */}
        <Reveal className="lg:col-span-7">
          <article className="relative h-full overflow-hidden rounded-[2rem] bg-lime p-7 text-ink md:p-10">
            <p className="eyebrow">Curs frizerie începători</p>
            <h3 className="display mt-3 text-[clamp(2.4rem,4.6vw,4rem)]">Ciprian Ungureanu</h3>
            <p className="mt-2 max-w-md text-ink/70">Standardul #1 din România — tehnică + disciplină + rezultate.</p>

            <div className="mt-12 flex flex-wrap items-end gap-x-8 gap-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Preț standard</p>
                <p className="display relative mt-1 w-fit text-5xl text-ink/45">
                  {formatRon(course.price)}
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-[3px] w-full origin-left bg-ink"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  />
                </p>
              </div>
              <div>
                <p className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-lime">
                  Profită de 10% reducere
                </p>
                <p className="display mt-2 text-[clamp(4.5rem,10vw,8.5rem)] leading-[0.85]">{formatRon(course.discountedPrice)}</p>
              </div>
            </div>
            <p className="mt-4 max-w-lg font-medium">
              {formatRon(course.discountedPrice)} preț final pentru plata integrală a cursului frizerie începători.
            </p>
            <div className="mt-8">
              <Button
                href={whatsappLink("Bună! Vreau să rezerv un loc la cursul GrandMaster Ciprian Ungureanu.")}
                external
                variant="ink"
                arrow={false}
              >
                <WhatsAppIcon /> Rezervă locul
              </Button>
            </div>
          </article>
        </Reveal>

        {/* Installments */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <article className="flex h-full flex-col rounded-[2rem] border border-bone/10 bg-forest-900 p-7 md:p-10">
            <p className="eyebrow text-lime">Rezervare loc curs</p>
            <h3 className="display mt-3 text-4xl">Rate: se poate achita în 3 rate</h3>
            <ol className="relative mt-8 flex-1 space-y-6 pl-8">
              <motion.span
                aria-hidden
                className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-lime"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              />
              {course.installments.map((step, index) => (
                <li key={step.label} className="relative">
                  <span className="absolute -left-8 top-1 grid h-4 w-4 place-items-center rounded-full bg-lime">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                  </span>
                  <p className="text-sm text-bone/50">
                    {index + 1}. {step.label}
                  </p>
                  <p className="display text-3xl">{formatRon(step.amount)}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl bg-bone/5 p-4 text-sm text-bone/70">
              Rezervare {formatRon(course.installments[0].amount)} — Ciprian Ungureanu
            </p>
          </article>
        </Reveal>

        {/* Bank */}
        <Reveal className="lg:col-span-7">
          <article className="h-full rounded-[2rem] border border-bone/10 p-7 md:p-10">
            <p className="eyebrow text-lime">Cont bancar pentru rezervări</p>
            <CopyButton value={BANK.iban} className="mt-5 block w-full">
              <span className="display block break-all text-[clamp(1.7rem,3.6vw,3.2rem)] tracking-wide transition-colors hover:text-lime">
                {BANK.iban}
              </span>
            </CopyButton>
            <p className="mt-6 text-bone/70">
              Titular cont — <strong className="text-bone">{BANK.holder}</strong>
            </p>
            <p className="mt-6 border-t border-bone/10 pt-6 text-sm text-bone/55">
              Cu două săptămâni înainte de începerea cursului, nu se mai returnează avansul, în condițiile în care cursanții
              se răzgândesc, pentru că se depun documentele la registratura A.N.C.
            </p>
          </article>
        </Reveal>

        {/* Teachers course */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <TLink
            href="/curs-secundar-frizerie"
            className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] bg-forest p-7 text-bone transition-colors duration-500 hover:text-ink md:p-10"
          >
            <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-lime transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />
            <div className="relative">
              <p className="eyebrow">Academie</p>
              <h3 className="display mt-3 text-5xl">Curs Profesori</h3>
              <p className="mt-2 opacity-60">Fade Masters — echipa de profesori Fade Academy.</p>
            </div>
            <span className="relative mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]">
              Apasă aici <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
            </span>
          </TLink>
        </Reveal>
      </div>
    </div>
  </section>
);
