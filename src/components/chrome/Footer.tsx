"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { TLink } from "@/components/motion/TLink";
import { CONTACT, NAV } from "@/data/site";

const LEGAL_LOGOS = [
  { src: "/anpc-logo.webp", alt: "ANPC", href: "https://anpc.ro/ce-este-sal/" },
  { src: "/litigii-logo.webp", alt: "Soluționarea online a litigiilor", href: "https://ec.europa.eu/consumers/odr" },
  { src: "/comunicat-ue-logo.webp", alt: "Comunicat UE", href: "https://ec.europa.eu/consumers/odr" },
];

export const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
  const wordY = useTransform(scrollYProgress, [0.4, 1], ["60%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-lime text-forest-950">
      <motion.div style={{ y }} className="container-x pt-24 md:pt-32">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6 text-forest">Contactează-ne</p>
            <div className="flex flex-col">
              {CONTACT.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="display group flex w-fit items-center gap-3 text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05]"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_3px]">
                    {phone.label}
                  </span>
                </a>
              ))}
              <a href={`mailto:${CONTACT.email}`} className="mt-4 w-fit text-xl font-medium underline-offset-4 hover:underline">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-6 text-forest">Navigare</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[0.95rem] font-medium">
              {NAV.map((item) => (
                <li key={item.href}>
                  <TLink href={item.href} className="hover:underline">
                    {item.label}
                  </TLink>
                </li>
              ))}
              <li>
                <TLink href="/politica-cookie-uri" className="hover:underline">
                  Politica cookie-uri
                </TLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-6 text-forest">Social</p>
            <ul className="space-y-2 text-[0.95rem] font-medium">
              <li>
                <a href={CONTACT.social.facebook.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook · {CONTACT.social.facebook.handle}
                </a>
              </li>
              <li>
                <a href={CONTACT.social.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram · {CONTACT.social.instagram.handle}
                </a>
              </li>
              <li>
                <a href={CONTACT.social.tiktok.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  TikTok · {CONTACT.social.tiktok.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-forest-950/20 pt-8 md:flex-row md:items-center">
          <p className="accent text-3xl md:text-4xl">Lideri în industrie | Garantăm excelența</p>
          <div className="flex flex-wrap items-center gap-3">
            {LEGAL_LOGOS.map((logo) => (
              <a key={logo.src} href={logo.href} target="_blank" rel="noopener noreferrer" className="rounded-lg p-1.5 mix-blend-multiply transition hover:bg-forest-950/10">
                <Image src={logo.src} alt={logo.alt} width={150} height={38} className="h-9 w-auto" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="overflow-hidden">
        <motion.p
          style={{ y: wordY }}
          aria-hidden
          className="display select-none whitespace-nowrap pt-10 text-center text-[17.6vw] leading-[0.8] tracking-tight text-forest-950"
        >
          Fade Academy
        </motion.p>
      </div>
      <div className="container-x flex flex-col justify-between gap-2 py-5 text-xs font-medium uppercase tracking-[0.16em] text-forest-950/70 sm:flex-row">
        <span>© {new Date().getFullYear()} Usagi Technologies</span>
        <span>Fade Academy Education · by Ciprian Ungureanu</span>
      </div>
    </footer>
  );
};
