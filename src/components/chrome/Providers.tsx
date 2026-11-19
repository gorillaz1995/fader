"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import { TransitionProvider } from "@/components/motion/transition";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBar } from "./CookieBar";
import { Teaser2027 } from "./Teaser2027";
import { IntroLoader } from "./IntroLoader";

export const Providers = ({ children }: { children: ReactNode }) => (
  <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
    <MotionConfig reducedMotion="user">
      <TransitionProvider>
        <IntroLoader />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <CookieBar />
        <Teaser2027 />
      </TransitionProvider>
    </MotionConfig>
  </ReactLenis>
);
