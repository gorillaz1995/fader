"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./AnimatedText.module.css";

const AnimatedText: React.FC = () => {
  const textRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    gsap.to(textRefs.current, {
      scale: 1.72, // Slight scale for emphasis
      y: -5, // Slight vertical movement
      duration: 0.5,
      ease: "power1.inOut",
      stagger: {
        each: 1, // 1 second delay between each word's animation
      },
      repeat: -1,
      repeatDelay: 1, // 1 second delay before the whole sequence repeats
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 ref={(el) => (textRefs.current[0] = el!)} className={styles.heading}>
        #1 CURS FRIZERIE
      </h2>
      <h2 ref={(el) => (textRefs.current[1] = el!)} className={styles.heading}>
        LIDER IN INDUSTRIE
      </h2>
      <h2 ref={(el) => (textRefs.current[2] = el!)} className={styles.heading}>
        REZULTATE REALE
      </h2>
      <h2 ref={(el) => (textRefs.current[3] = el!)} className={styles.heading}>
        SUCCES GARANTAT
      </h2>
    </div>
  );
};

export default AnimatedText;
