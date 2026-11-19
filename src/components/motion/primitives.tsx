"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import clsx from "clsx";
import { usePageTransition } from "./transition";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Fades + lifts its children when scrolled into view. */
export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 40,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "article" | "p" | "span";
}) => {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
};

/**
 * Masked word-by-word reveal. `trigger="ready"` waits for the page curtain/intro (for heroes);
 * `trigger="view"` waits until scrolled into view.
 */
export const SplitText = ({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  trigger = "view",
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  trigger?: "view" | "ready";
  as?: ElementType;
}) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const { ready } = usePageTransition();
  const show = trigger === "ready" ? ready : inView && ready;
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden className="-mt-[0.16em] inline-block overflow-hidden pb-[0.08em] pt-[0.16em] align-bottom">
          <motion.span
            className={clsx("inline-block will-change-transform", wordClassName)}
            initial={{ y: "115%" }}
            animate={show ? { y: "0%" } : { y: "115%" }}
            transition={{ duration: 1, ease: EASE_OUT, delay: delay + index * stagger }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

/** Hero-only entrance (waits for the curtain). */
export const Enter = ({
  children,
  className,
  delay = 0,
  y = 30,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) => {
  const { ready } = usePageTransition();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 1.1, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
};

export const Marquee = ({
  children,
  className,
  duration = 30,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) => (
  <div className={clsx("flex overflow-hidden", className)}>
    <div
      className="flex shrink-0 animate-marquee items-center"
      style={{
        ["--marquee-duration" as string]: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      <div className="flex shrink-0 items-center">{children}</div>
      <div className="flex shrink-0 items-center" aria-hidden>
        {children}
      </div>
    </div>
  </div>
);

/** Rolling slot that cycles through values with a vertical mask transition. */
export const Roller = ({
  items,
  interval = 1600,
  className,
  itemClassName,
  holdLastFor = 0,
}: {
  items: readonly (string | number)[];
  interval?: number;
  className?: string;
  itemClassName?: string;
  /** Extra time (ms) to rest on the final item before looping. */
  holdLastFor?: number;
}) => {
  const [index, setIndex] = useState(0);
  const { ready } = usePageTransition();

  useEffect(() => {
    if (!ready) return;
    const isLast = index === items.length - 1;
    const timer = setTimeout(() => setIndex((current) => (current + 1) % items.length), interval + (isLast ? holdLastFor : 0));
    return () => clearTimeout(timer);
  }, [index, items.length, interval, holdLastFor, ready]);

  return (
    <span className={clsx("relative inline-grid overflow-hidden align-bottom", className)}>
      {/* invisible sizer keeps width stable */}
      <span className={clsx("invisible col-start-1 row-start-1", itemClassName)} aria-hidden>
        {items.reduce<string>((longest, item) => (String(item).length > longest.length ? String(item) : longest), "")}
      </span>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={String(items[index])}
          className={clsx("col-start-1 row-start-1", itemClassName)}
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/** Vertical parallax wrapper. */
export const Parallax = ({
  children,
  className,
  distance = 80,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
};

/** Image whose mask wipes open upward when it enters the viewport. */
export const ClipReveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
    whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay }}
  >
    <motion.div
      className="h-full w-full"
      initial={{ scale: 1.25 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.6, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);
