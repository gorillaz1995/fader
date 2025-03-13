"use client";

import React from "react";
import Image from "next/image";
import { Heading, Highlight, Box } from "@chakra-ui/react";
import faderImage from "@/images/hero/fader.webp";
import { motion } from "framer-motion";

// BorderBeam component for the card animation
const BorderBeam = ({
  size = 160,
  duration = 1.5,
  colorFrom = "#023d82",
  colorTo = "#0461ab",
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden rounded-xl ${className}`}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          borderRadius: `${size}%`,
          top: `calc(50% - ${size}%)`,
          left: `calc(50% - ${size}%)`,
          height: `${size * 2}%`,
          width: `${size * 2}%`,
        }}
      />
    </div>
  );
};

const Details: React.FC = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] lg:min-h-[60vh] gap-6 py-10">
      {/* Image Section */}
      <div className="relative flex items-center justify-center pb-2 lg:pb-0">
        <div className="relative z-10">
          <Image
            src={faderImage}
            alt="Ciprian Ungureanu - Master barber - Curs frizerie incepatori"
            width={306}
            height={282}
            quality={100}
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Text Section - Now in a Card */}
      <div className="flex flex-col justify-center items-center lg:items-start z-20 px-4 lg:px-0">
        {/* Bento Card Implementation */}
        <div
          className="group relative  flex flex-col justify-between overflow-hidden rounded-xl 
                      background-color shadow-lg dark:bg-background dark:border border-[rgba(255,255,255,0.1)]
                      transform-gpu"
        >
          {/* Card Content */}
          <Box className="p-6 z-10 relative">
            <h1 className="text-2xl font-semibold text-[#023d82] mb-4 text-center lg:text-left font-stint-ultra-expanded lg:pt-0">
              Debutul ideal in cariera de frizer
            </h1>

            <Heading
              as="h2"
              className="text-lg font-pontano-sans font-semibold text-center lg:text-left"
              lineHeight="tall"
            >
              <Highlight
                query="PROGRAM CURSURI FRIZERIE INCEPATORI"
                styles={{
                  color: "#F9FBFB",
                  px: "2",
                  py: "1",
                  bg: "linear-gradient(to right, #023d82, #0461ab)",
                  rounded: "full",
                }}
              >
                PROGRAM CURSURI FRIZERIE INCEPATORI - Bucuresti
              </Highlight>
            </Heading>

            <p className="text-md text-[#070F18] text-center lg:text-left leading-relaxed font-pontano-sans py-4">
              <span className="border-b-2 border-[#023d82] inline-block">
                Locurile se ocupa foarte repede, asa ca grabeste-te!
              </span>
              <br />
              CURS 23 <span className="font-extrabold">APRILIE</span> - 01{" "}
              <span className="font-extrabold">IULIE</span> 2025
              <br />
              <span className="font-extrabold">Ultima zi</span> de inscrieri: 25
              APRILIE
              <br />
              Durata totala - 2 luni jumate /
              <span className="font-extrabold"> 10 saptamani</span>
            </p>
          </Box>

          {/* Hover effect overlay */}
        </div>
      </div>
    </div>
  );
};

export default Details;
