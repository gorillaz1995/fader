"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Full-width signature artwork (alege-sig.svg) that scales into place on scroll. */
export const SignatureBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], ["4rem", "2rem"]);

  return (
    <div ref={ref} className="bg-ink pt-20 md:pt-28">
      <div className="container-x">
        <motion.div style={{ scale, borderRadius: radius }} className="overflow-hidden bg-forest">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/alege-sig.svg" alt="Alege Fade Academy — semnătura Ciprian Ungureanu" className="h-auto w-full" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
};
