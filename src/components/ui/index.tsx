"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import { TLink } from "@/components/motion/TLink";

type ButtonVariant = "lime" | "ink" | "outline-light" | "outline-dark";

const BUTTON_BASE =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime";

const BUTTON_VARIANTS: Record<ButtonVariant, { base: string; fill: string; hoverText: string }> = {
  lime: { base: "bg-lime text-forest-950", fill: "bg-ink", hoverText: "group-hover:text-lime" },
  ink: { base: "bg-ink text-lime", fill: "bg-lime", hoverText: "group-hover:text-ink" },
  "outline-light": { base: "border border-bone/30 text-bone", fill: "bg-lime", hoverText: "group-hover:text-ink" },
  "outline-dark": { base: "border border-ink/30 text-ink", fill: "bg-ink", hoverText: "group-hover:text-lime" },
};

const Arrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={clsx("h-4 w-4", className)} aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ButtonInner = ({ children, variant, arrow }: { children: ReactNode; variant: ButtonVariant; arrow: boolean }) => {
  const style = BUTTON_VARIANTS[variant];
  return (
    <>
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 translate-y-[101%] rounded-[inherit] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0",
          style.fill,
        )}
      />
      <span className={clsx("relative z-10 flex items-center gap-3 transition-colors duration-500", style.hoverText)}>
        {children}
        {arrow && (
          <span className="relative block h-4 w-4 overflow-hidden">
            <Arrow className="absolute inset-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-[150%]" />
            <Arrow className="absolute inset-0 -translate-x-[150%] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0" />
          </span>
        )}
      </span>
    </>
  );
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
};

export const Button = ({ children, href, external, onClick, variant = "lime", arrow = true, className }: ButtonProps) => {
  const classes = clsx(BUTTON_BASE, BUTTON_VARIANTS[variant].base, className);
  const inner = (
    <ButtonInner variant={variant} arrow={arrow}>
      {children}
    </ButtonInner>
  );
  if (href && /^(tel|mailto):/.test(href))
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  if (href && external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  if (href)
    return (
      <TLink href={href} className={classes}>
        {inner}
      </TLink>
    );
  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
};

export const Chip = ({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "lime" | "ink";
  className?: string;
}) => (
  <span
    className={clsx(
      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.78rem] font-medium",
      tone === "dark" && "border-bone/15 bg-bone/[0.04] text-bone/85",
      tone === "light" && "border-ink/15 bg-ink/[0.04] text-ink/80",
      tone === "lime" && "border-lime/30 bg-lime/10 text-lime",
      tone === "ink" && "border-ink bg-ink text-lime",
      className,
    )}
  >
    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-current" />
    {children}
  </span>
);

export const Eyebrow = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={clsx("eyebrow flex items-center gap-3", className)}>
    <span className="h-px w-8 bg-current opacity-60" />
    {children}
  </p>
);

export const CopyButton = ({
  value,
  children,
  className,
  hint = "Apasă pentru a copia",
}: {
  value: string;
  children: ReactNode;
  className?: string;
  hint?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button type="button" onClick={copy} className={clsx("group text-left", className)}>
      {children}
      <span className="mt-2 block text-xs uppercase tracking-[0.18em] opacity-60 transition-opacity group-hover:opacity-100">
        {copied ? "✓ Copiat" : `(${hint})`}
      </span>
    </button>
  );
};

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={clsx("h-4 w-4", className)} fill="currentColor" aria-hidden>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.72C5.79.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
  </svg>
);

export const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={clsx("h-4 w-4", className)} fill="currentColor" aria-hidden>
    <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" />
  </svg>
);

/** Large section title: Anton display + optional serif italic accent. */
export const SectionTitle = ({
  kicker,
  title,
  accent,
  subtitle,
  tone = "dark",
  className,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  tone?: "dark" | "light";
  className?: string;
}) => (
  <div className={clsx("max-w-4xl", className)}>
    {kicker && <Eyebrow className={tone === "dark" ? "mb-6 text-lime" : "mb-6 text-forest"}>{kicker}</Eyebrow>}
    <h2 className={clsx("display text-[clamp(3rem,8vw,7.5rem)] text-balance", tone === "dark" ? "text-bone" : "text-ink")}>
      {title}
      {accent && (
        <>
          {" "}
          <span className={clsx("accent", tone === "dark" ? "text-lime" : "text-forest")}>{accent}</span>
        </>
      )}
    </h2>
    {subtitle && (
      <p className={clsx("mt-6 max-w-2xl text-lg text-pretty", tone === "dark" ? "text-bone/70" : "text-ink/70")}>{subtitle}</p>
    )}
  </div>
);
