"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import clsx from "clsx";
import { TLink } from "@/components/motion/TLink";
import { CONTACT, NAV } from "@/data/site";

const EASE = [0.76, 0, 0.24, 1] as const;

const PREVIEWS: Record<string, string> = {
  "/": "/images/ungureanu2026-5.jpg",
  "/curs-frizerie-bucuresti": "/images/ungureanu2026-1.jpg",
  "/curs-secundar-frizerie": "/images/3-muschetari.jpeg",
  "/curs-1-1": "/images/ung123.jpeg",
  "/curs-frizerie-satu-mare": "/images/sm-foto.png",
  "/curs-frizerie-botosani": "/images/botosani-prime.png",
  "/evenimente": "/images/ungureanu2026-4.jpg",
  "/testimoniale": "/images/testimoniale/ciucas2.webp",
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  useLenis(({ scroll }) => setScrolled(scroll > 40));

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const preview = PREVIEWS[hovered ?? pathname] ?? PREVIEWS["/"];

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[80]">
        <div className="container-x flex items-center justify-between py-4 md:py-6">
          <TLink
            href="/"
            aria-label="Fade Academy — acasă"
            className={clsx(
              "pointer-events-auto flex items-center gap-3 rounded-full bg-ink/85 py-1.5 pl-1.5 pr-5 backdrop-blur-md transition-all duration-500",
              scrolled || open ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "",
            )}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-lime">
              <Image src="/images/logo.png" alt="" width={40} height={40} className="h-9 w-9" priority />
            </span>
            <span
              className="display hidden text-xl leading-none text-lime sm:inline"
            >
              Fade Academy
            </span>
          </TLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="group pointer-events-auto relative flex h-12 items-center gap-3 overflow-hidden rounded-full bg-ink pl-6 pr-2 text-lime transition-transform active:scale-[0.96]"
          >
            <span className="relative block h-4 overflow-hidden text-sm font-semibold uppercase tracking-[0.22em]">
              <motion.span className="block" animate={{ y: open ? "-100%" : "0%" }} transition={{ duration: 0.5, ease: EASE }}>
                Meniu
              </motion.span>
              <motion.span
                className="absolute left-0 top-full block"
                animate={{ y: open ? "-100%" : "0%" }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                Închide
              </motion.span>
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-ink">
              <span className="relative block h-2.5 w-3.5">
                <motion.span
                  className="absolute left-0 top-0 h-[2px] w-full bg-current"
                  animate={open ? { top: "50%", rotate: 45, y: "-50%" } : { top: "0%", rotate: 0, y: "0%" }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-current"
                  animate={open ? { bottom: "50%", rotate: -45, y: "50%" } : { bottom: "0%", rotate: 0, y: "0%" }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </span>
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            aria-label="Meniu principal"
            className="grain fixed inset-0 z-[70] overflow-y-auto bg-forest-950 text-bone"
            initial={{ clipPath: "circle(0% at calc(100% - 3.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3.5rem) 2.5rem)" }}
            transition={{ duration: 0.9, ease: EASE }}
            data-lenis-prevent
          >
            <div className="container-x grid min-h-full gap-10 pb-10 pt-28 lg:grid-cols-[1.4fr_1fr] lg:pt-32">
              <ul className="flex flex-col">
                {NAV.map((item, index) => {
                  const showGroup = item.group && item.group !== NAV[index - 1]?.group;
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      {showGroup && (
                        <motion.p
                          className="eyebrow mb-1 mt-5 text-lime/60"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                        >
                          {item.group}
                        </motion.p>
                      )}
                      <div className="overflow-hidden">
                        <motion.div
                          initial={{ y: "110%" }}
                          animate={{ y: "0%" }}
                          exit={{ y: "110%" }}
                          transition={{ duration: 0.8, ease: EASE, delay: 0.15 + index * 0.05 }}
                        >
                          <TLink
                            href={item.href}
                            onClick={() => setOpen(false)}
                            onMouseEnter={() => setHovered(item.href)}
                            onMouseLeave={() => setHovered(null)}
                            className={clsx(
                              "group flex items-baseline gap-4 py-1 transition-colors duration-300",
                              active ? "text-lime" : "text-bone hover:text-lime",
                            )}
                          >
                            <span className="tabular w-8 text-xs text-bone/40">{String(index + 1).padStart(2, "0")}</span>
                            <span className="display text-[clamp(2.4rem,6.2vw,5.4rem)] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-4">
                              {item.label}
                            </span>
                          </TLink>
                        </motion.div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <motion.aside
                className="flex flex-col justify-between gap-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
              >
                <div className="relative hidden aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest lg:block">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={preview}
                      className="absolute inset-0"
                      initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
                      animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: EASE }}
                    >
                      <Image src={preview} alt="" fill sizes="30vw" className="object-cover" />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent" />
                  <p className="display absolute bottom-6 left-6 text-5xl text-lime">#1 România</p>
                </div>
                <div className="grid gap-6 text-sm sm:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-3 text-lime/60">Contact</p>
                    {CONTACT.phones.map((phone) => (
                      <a key={phone.tel} href={`tel:${phone.tel}`} className="block py-0.5 hover:text-lime">
                        {phone.label}
                      </a>
                    ))}
                    <a href={`mailto:${CONTACT.email}`} className="block py-0.5 hover:text-lime">
                      {CONTACT.email}
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow mb-3 text-lime/60">Social</p>
                    {Object.entries(CONTACT.social).map(([key, social]) => (
                      <a key={key} href={social.url} target="_blank" rel="noopener noreferrer" className="block py-0.5 capitalize hover:text-lime">
                        {key}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.aside>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
