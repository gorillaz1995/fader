"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { STORIES } from "@/data/stories";
import type { Story } from "@/data/stories";
import { ClipReveal, Enter, Reveal, SplitText } from "@/components/motion/primitives";
import { TLink } from "@/components/motion/TLink";
import { Button, Chip } from "@/components/ui";

export const StoriesIndex = () => (
  <section className="grain min-h-screen bg-lime pb-24 pt-36 text-ink md:pb-36">
    <div className="container-x">
      <Enter>
        <Chip tone="ink">Absolvenți • Povești de succes</Chip>
      </Enter>
      <h1 className="mt-8">
        <SplitText text="Testimoniale" trigger="ready" className="display block text-[clamp(4rem,14vw,14rem)] leading-[0.82]" />
      </h1>
      <Enter delay={0.4}>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/75 md:text-xl">
          Descoperă poveștile de succes ale celor mai talentați studenți ai Fade Academy, care au transformat pasiunea pentru
          frizerie într-o carieră de succes. Acești absolvenți sunt sursa noastră de mândrie și inspirație pentru toți cei
          care doresc să își depășească limitele și să devină maeștri în arta frizeriei. Află cum au reușit să facă diferența
          și să inspire generațiile viitoare prin munca și dedicarea lor.
        </p>
      </Enter>

      <div className="mt-20 grid gap-4 md:grid-cols-3">
        {STORIES.map((story, index) => (
          <Reveal key={story.slug} delay={index * 0.12} className={index === 1 ? "md:mt-24" : ""}>
            <TLink href={`/${story.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-ink">
                <Image
                  src={story.cover}
                  alt={story.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale transition duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent" />
                <span className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full bg-lime text-xl transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:rotate-[-45deg] group-hover:scale-110">
                  →
                </span>
                <p className="tabular absolute left-6 top-6 text-sm text-bone/70">0{index + 1}</p>
                <h2 className="display absolute bottom-5 left-6 right-6 text-5xl text-bone">{story.name}</h2>
              </div>
            </TLink>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const StoryDetail = ({ story }: { story: Story }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const currentIndex = STORIES.findIndex((item) => item.slug === story.slug);
  const next = STORIES[(currentIndex + 1) % STORIES.length];
  const [lead, ...rest] = story.paragraphs;

  return (
    <>
      <section ref={ref} className="grain relative overflow-hidden bg-lime pt-32 text-ink">
        <motion.p
          aria-hidden
          style={{ x: nameX }}
          className="display pointer-events-none whitespace-nowrap text-[22vw] leading-[0.8] text-ink/10"
        >
          {story.heading} • {story.heading}
        </motion.p>
        <div className="container-x relative -mt-[12vw] grid items-end gap-10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Enter>
              <TLink href="/testimoniale" className="eyebrow inline-flex items-center gap-2 hover:underline">
                ← Testimoniale
              </TLink>
            </Enter>
            <h1 className="mt-6">
              <SplitText text={story.heading} trigger="ready" className="display block text-[clamp(4rem,9vw,8.5rem)]" />
            </h1>
            <Enter delay={0.3}>
              <p className="accent mt-2 text-3xl text-forest">Absolvent Fade Academy</p>
            </Enter>
          </div>
          <Enter delay={0.2} y={80} className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
              <Image src={story.portrait} alt={story.heading} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </Enter>
        </div>
      </section>

      <section className="bg-ink py-24 text-bone md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="display text-[clamp(2.4rem,4.5vw,4rem)] leading-[0.95] text-lime">{lead}</p>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-bone/75 lg:col-span-6 lg:col-start-7">
            {rest.map((paragraph) => (
              <Reveal key={paragraph} y={24}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {story.achievements && (
          <div className="container-x mt-24">
            <h2 className="display text-[clamp(3rem,7vw,6rem)]">
              Realizări<span className="text-lime">.</span>
            </h2>
            <ol className="mt-10 border-t border-bone/10">
              {story.achievements.map((achievement, index) => (
                <Reveal as="li" key={achievement} y={20} className="grid gap-4 border-b border-bone/10 py-6 md:grid-cols-[120px_1fr]">
                  <span className="display text-4xl text-lime">0{index + 1}</span>
                  <span className="text-lg text-bone/80">{achievement}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        )}
      </section>

      <section className="bg-forest-950 py-20 text-bone">
        <TLink href={`/${next.slug}`} className="group container-x flex items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-bone/50">Următoarea poveste</p>
            <p className="display mt-3 text-[clamp(3rem,9vw,8rem)] transition-colors duration-500 group-hover:text-lime">{next.heading}</p>
          </div>
          <ClipReveal className="relative hidden aspect-square w-48 overflow-hidden rounded-full md:block">
            <Image src={next.cover} alt="" fill sizes="200px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </ClipReveal>
        </TLink>
        <div className="container-x mt-12">
          <Button href="/testimoniale" variant="outline-light">
            Toate testimonialele
          </Button>
        </div>
      </section>
    </>
  );
};
