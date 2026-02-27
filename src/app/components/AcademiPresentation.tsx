"use client";

import React, { useEffect, useRef } from "react";
import {
  Grid,
  GridItem,
  Text,
  Box,
  Image,
  keyframes,
  Badge,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#79FD15";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.65; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
`;

interface FadeAcademySectionProps {
  imageSrc: string;
  formatorName: string;
  locationName: string;
  description: string;
}

const FadeAcademySection: React.FC<FadeAcademySectionProps> = ({
  imageSrc,
  formatorName,
  locationName,
  description,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const formatorBoxRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    if (
      containerRef.current &&
      formatorBoxRef.current &&
      descriptionRef.current
    ) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          [formatorBoxRef.current, descriptionRef.current],
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            stagger: 0.18,
          },
        );

        // subtle image pop
        if (imageRef.current) {
          tl.fromTo(
            imageRef.current,
            { scale: 0.98, opacity: 0.92 },
            { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" },
            0,
          );
        }
      }, containerRef);
    }

    return () => ctx?.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      position="relative"
      overflow="hidden"
      py={{ base: 8, md: 10 }}
    >
      {/* Background: black + neon accents */}
      <Box position="absolute" inset={0} bg="black" />
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial-gradient(900px 420px at 50% 15%, rgba(121,253,21,0.16), rgba(0,0,0,0) 60%), linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95))"
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.12}
        backgroundImage="linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
        backgroundSize="34px 34px"
      />
      <Box
        position="absolute"
        top="-120px"
        left="50%"
        transform="translateX(-50%)"
        w="520px"
        h="520px"
        borderRadius="full"
        bg={`${ACCENT}20`}
        filter="blur(110px)"
        animation={`${glowPulse} 6s ease-in-out infinite`}
      />

      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={{ base: 6, md: 8 }}
        w="full"
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        position="relative"
        zIndex={1}
      >
        {/* Image (mobile first: top) */}
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="2xl"
            border="1px solid"
            borderColor="rgba(121,253,21,0.18)"
            boxShadow="0 18px 70px rgba(0,0,0,0.75)"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            animation={`${float} 4.5s ease-in-out infinite`}
          >
            {/* top accent line */}
            <Box
              h="3px"
              w="full"
              bgGradient={`linear(to-r, transparent, ${ACCENT}, transparent)`}
            />
            <Image
              ref={imageRef}
              src={imageSrc}
              alt={`Fade ${locationName}`}
              width="100%"
              height="auto"
              objectFit="cover"
              loading="lazy"
              transform="scale(1.01)"
              filter="contrast(1.03) saturate(1.05)"
            />

            {/* bottom fade */}
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-b, rgba(0,0,0,0.05), rgba(0,0,0,0.55))"
            />
          </Box>

          {/* Mobile quick chip */}
          <Box
            mt={4}
            display={{ base: "flex", lg: "none" }}
            justifyContent="center"
          >
            <Badge
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="whiteAlpha.900"
              px={4}
              py={2}
              borderRadius="full"
              backdropFilter="blur(10px)"
            >
              <Box as="span" color={ACCENT} fontWeight="800">
                Fade Academy
              </Box>{" "}
              • {locationName}
            </Badge>
          </Box>
        </GridItem>

        {/* Text column */}
        <GridItem colSpan={1} order={{ base: 2, lg: 1 }}>
          <Grid
            templateRows="repeat(2, auto)"
            gap={{ base: 4, md: 5 }}
            height="100%"
          >
            {/* Formator card */}
            <GridItem
              ref={formatorBoxRef}
              opacity={0}
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              p={{ base: 5, md: 6 }}
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="rgba(121,253,21,0.18)"
              boxShadow="0 18px 70px rgba(0,0,0,0.75)"
            >
              {/* accent line */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="3px"
                bgGradient={`linear(to-r, transparent, ${ACCENT}, transparent)`}
              />
              {/* subtle neon corner glow */}
              <Box
                position="absolute"
                top="-120px"
                left="-120px"
                w="240px"
                h="240px"
                borderRadius="full"
                bg={`${ACCENT}1A`}
                filter="blur(60px)"
              />
              <Box
                position="relative"
                zIndex={1}
                textAlign={{ base: "center", lg: "left" }}
              >
                <Badge
                  bg={`${ACCENT}`}
                  color="black"
                  borderRadius="full"
                  px={3}
                  py={1}
                  mb={3}
                  fontWeight="900"
                  letterSpacing="0.3px"
                >
                  FORMATOR
                </Badge>

                <Text
                  fontFamily="Stint Ultra Expanded, serif"
                  fontSize={{ base: "22px", md: "28px" }}
                  lineHeight="1.15"
                >
                  {formatorName}
                  <Box as="span" color={ACCENT}>
                    .
                  </Box>
                </Text>

                <Text
                  mt={2}
                  fontFamily="Pontano Sans, sans-serif"
                  fontSize={{ base: "sm", md: "md" }}
                  color="whiteAlpha.800"
                >
                  Formator Fade Academy{" "}
                  <Box as="span" color={ACCENT}>
                    {locationName}
                  </Box>
                </Text>

                {/* Micro highlights */}
                <Grid
                  mt={4}
                  templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
                  gap={3}
                >
                  {[
                    { k: "Focus", v: "tehnici moderne" },
                    { k: "Metodă", v: "practică controlată" },
                    { k: "Standard", v: "high-end" },
                  ].map((x) => (
                    <Box
                      key={x.k}
                      borderRadius="xl"
                      p={3}
                      bg="rgba(255,255,255,0.03)"
                      border="1px solid"
                      borderColor="rgba(121,253,21,0.14)"
                      textAlign="center"
                    >
                      <Text
                        fontSize="xs"
                        color="whiteAlpha.700"
                        fontFamily="Pontano Sans, sans-serif"
                      >
                        {x.k}
                      </Text>
                      <Text
                        mt={1}
                        fontSize="sm"
                        fontFamily="Pontano Sans, sans-serif"
                        color="whiteAlpha.900"
                        fontWeight="700"
                      >
                        <Box as="span" color={ACCENT}>
                          {x.v}
                        </Box>
                      </Text>
                    </Box>
                  ))}
                </Grid>
              </Box>
            </GridItem>

            {/* Description card */}
            <GridItem ref={descriptionRef} opacity={0}>
              <Box
                borderRadius="2xl"
                p={{ base: 5, md: 6 }}
                bg="rgba(255,255,255,0.03)"
                border="1px solid"
                borderColor="rgba(121,253,21,0.16)"
                boxShadow="0 18px 70px rgba(0,0,0,0.65)"
                backdropFilter="blur(10px)"
                textAlign={{ base: "center", lg: "left" }}
              >
                <Text
                  fontFamily="Pontano Sans, sans-serif"
                  fontSize={{ base: "sm", md: "md" }}
                  color="whiteAlpha.900"
                  lineHeight="1.85"
                >
                  {description}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FadeAcademySection;
