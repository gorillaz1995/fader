"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import clsx from "clsx";
import type { Review } from "@/data/content";
import { ROTATING_LINES } from "@/data/site";
import { Enter, Marquee, Reveal, Roller, SplitText } from "@/components/motion/primitives";
import { Chip, SectionTitle, Star } from "@/components/ui";

/** Dark page hero with optional background photo that drifts on scroll. */
export const PageHero = ({
  badge,
  title,
  accent,
  image,
  imagePosition = "center",
  children,
  facts,
}: {
  badge: string;
  title: string;
  accent?: string;
  image?: string;
  imagePosition?: string;
  children?: ReactNode;
  facts?: { label: string; value: string; note?: string }[];
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section ref={ref} className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-950 text-bone">
      {image && (
        <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
        </motion.div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/75 to-forest-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 to-transparent" />

      <div className="container-x relative pb-14 pt-36 md:pb-20">
        <Enter>
          <Chip tone="lime">{badge}</Chip>
        </Enter>
        <h1 className="mt-8">
          <SplitText text={title} trigger="ready" delay={0.1} className="display block text-[clamp(3.6rem,11vw,11rem)]" />
          {accent && (
            <Enter delay={0.45} className="accent block text-[clamp(2.4rem,6vw,6rem)] leading-none text-lime">
              {accent}
            </Enter>
          )}
        </h1>
        {children && (
          <Enter delay={0.55} className="mt-8 max-w-3xl">
            {children}
          </Enter>
        )}
        {facts && (
          <Enter delay={0.7} className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-forest-950/80 p-5 backdrop-blur-md">
                <p className="eyebrow text-bone/50">{fact.label}</p>
                <p className="display mt-2 text-3xl text-lime md:text-4xl">{fact.value}</p>
                {fact.note && <p className="mt-1 text-sm text-bone/60">{fact.note}</p>}
              </div>
            ))}
          </Enter>
        )}
      </div>
    </section>
  );
};

/** "#1 CURS FRIZERIE / LIDER ÎN INDUSTRIE / ..." big rolling statement on lime. */
export const RotatingStatement = ({ tone = "lime" }: { tone?: "lime" | "ink" }) => (
  <section className={clsx("overflow-hidden", tone === "lime" ? "bg-lime text-ink" : "bg-ink text-lime")}>
    <div className="container-x flex flex-col items-start gap-2 py-14 md:flex-row md:items-end md:justify-between md:py-20">
      <p className="eyebrow opacity-70">Fade Academy • Standard</p>
      <Roller
        items={ROTATING_LINES}
        interval={1800}
        className="text-left md:text-right"
        itemClassName="display block text-[clamp(3rem,9vw,9rem)] leading-[0.9]"
      />
    </div>
  </section>
);

export const ReviewCard = ({ review, className }: { review: Review; className?: string }) => (
  <figure className={clsx("flex w-[min(80vw,380px)] shrink-0 flex-col justify-between rounded-[1.75rem] border border-bone/10 bg-forest-900 p-6", className)}>
    <div>
      <div className="flex gap-1 text-lime">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} />
        ))}
      </div>
      <blockquote className="mt-4 text-[0.98rem] leading-relaxed text-bone/80">„{review.text}”</blockquote>
    </div>
    <figcaption className="mt-6 flex items-center gap-3">
      <span className="display grid h-10 w-10 place-items-center rounded-full bg-lime text-lg text-ink">{review.name.charAt(0)}</span>
      <span className="font-semibold">{review.name}</span>
    </figcaption>
  </figure>
);

export const Reviews = ({
  reviews,
  title = "Recenzii",
  subtitle = "Evaluări autentice furnizate de clienți reali",
}: {
  reviews: Review[];
  title?: string;
  subtitle?: string;
}) => {
  const half = Math.ceil(reviews.length / 2);
  const rows = reviews.length > 4 ? [reviews.slice(0, half), reviews.slice(half)] : [reviews];

  return (
    <section className="overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionTitle kicker="Cursanți & clienți" title={title} accent="." subtitle={subtitle} />
        <p className="eyebrow text-bone/40">{reviews.length} recenzii reale</p>
      </div>
      <div className="mt-14 flex flex-col gap-4 [&:hover_.animate-marquee]:[animation-play-state:paused]">
        {rows.map((row, index) => (
          <Marquee key={index} duration={row.length * 9} reverse={index % 2 === 1}>
            {[...row, ...(row.length < 4 ? row : [])].map((review, reviewIndex) => (
              <ReviewCard key={`${review.name}-${reviewIndex}`} review={review} className="mr-4" />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export const MapBlock = ({ title = "Unde ne găsești", query, address }: { title?: string; query: string; address: string }) => (
  <section className="bg-ink pb-24 text-bone md:pb-32">
    <div className="container-x">
      <Reveal className="flex flex-col justify-between gap-4 border-t border-bone/10 pt-14 md:flex-row md:items-end">
        <h2 className="display text-[clamp(3rem,7vw,6rem)]">{title}</h2>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="accent text-2xl text-lime underline-offset-4 hover:underline md:text-3xl"
        >
          {address} ↗
        </a>
      </Reveal>
      <Reveal className="mt-10 overflow-hidden rounded-[2rem] border border-bone/10">
        <iframe
          title={`Hartă — ${address}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
          className="h-[420px] w-full grayscale invert-[0.92] hue-rotate-180 md:h-[520px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </div>
  </section>
);
