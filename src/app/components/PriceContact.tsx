"use client";

import React, { useEffect, useRef } from "react";
import {
  Grid,
  GridItem,
  Text,
  Box,
  Link,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

interface PriceContactProps {
  price: string;
  phoneNumber: string;
  location: string;
  facebookLink: string;
}

const PriceContact: React.FC<PriceContactProps> = ({
  price,
  phoneNumber,
  location,
  facebookLink,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const priceBoxRef = useRef<HTMLDivElement>(null);
  const contactBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    if (containerRef.current && priceBoxRef.current && contactBoxRef.current) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          priceBoxRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
        ).fromTo(
          contactBoxRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "-=1" // Overlap the animations slightly
        );
      });
    }

    return () => ctx?.revert(); // Clean up the animation
  }, []);

  const showNotification = (message: string) => {
    // ... (keep the existing showNotification function)
  };

  return (
    <Box className="overflow-hidden bg-[#cbdad4] py-7" ref={containerRef}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        className="w-full md:w-[68%] mx-auto"
        maxWidth="100%"
      >
        {/* Price Box */}
        <GridItem ref={priceBoxRef}>
          <Box
            className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
            height="85%"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              animation: `${shimmer} 4s infinite`,
            }}
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              PRET
            </Text>
            <Text className="font-stint-ultra-expanded text-3xl font-bold text-[#F9FBFB]">
              {price} RON
            </Text>
          </Box>
        </GridItem>

        {/* Contact Box */}
        <GridItem ref={contactBoxRef}>
          <Box
            className="bg-gradient-to-r from-[#023d82] to-[#0461ab] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
            height="85%"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              animation: `${shimmer} 4s infinite`,
            }}
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              Ne gasesti aici:
            </Text>
            <Text
              className="font-stint-ultra-expanded text-lg font-bold text-[#F9FBFB] mb-1 cursor-pointer hover:bg-[#0461ab] transition-colors duration-300"
              border="2px solid #fa6529"
              borderRadius="md"
              px={2}
              py={1}
              onClick={() => {
                navigator.clipboard.writeText(phoneNumber);
                showNotification("Număr de telefon copiat în clipboard!");
              }}
              title="Click pentru a copia numărul de telefon"
            >
              {phoneNumber}
              <span className="block text-sm font-normal mt-1">
                (Apasă pentru a copia)
              </span>
            </Text>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                location
              )}`}
              isExternal
              className="font-pontano-sans text-md text-center text-[#F9FBFB] mb-1 hover:underline"
            >
              {location}
            </Link>
            <Link href={facebookLink} isExternal>
              <Icon as={FaFacebook} w={7} h={7} color="#F9FBFB" />
            </Link>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PriceContact;
