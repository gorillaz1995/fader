"use client";

import React, { useEffect, useRef } from "react";
import {
  Grid,
  GridItem,
  Text,
  Box,
  Image,
  Badge,
  keyframes,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#79FD15";

const glowPulse = keyframes`
  0%, 100% { opacity: 0.65; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
`;

interface FadeAcademySectionProps {
  imageSrc: string;
  formatorName: string;
  description: string;
  achievements: string;
}

const formatorData = {
  alinCiucas: {
    imageSrc: "/images/testimoniale/ciucas2.webp",
    formatorName: "Alin Ciucas",
    description: `
      <b style="color:${ACCENT}">DE FOAME.</b> Da, ați citit bine: FOAMEA este cea care mi-a descoperit PASIUNEA pentru tuns.<br><br>

      La vârsta de 35 de ani, după 17 ani dedicați domeniului vânzărilor, am rămas fără job. Eram ASM la o firmă mare și vizibilă pe piață. Salariu mare… și, dintr-odată, a doua zi: ZERO.<br><br>

      Un magazin chinezesc în centru, două mașini de tuns, un set de piepteni, o pelerină, un scaun cu sondă din Leroy Merlin… și m-am apucat de treabă.<br><br>

      Toți ne naștem cu un talent ascuns, dar de multe ori greutățile, nevoile sau dorința părinților noștri de a ne face "astronauți" ne împiedică să ne descoperim adevărata chemare.<br><br>

      Când am realizat că tunsul este drumul meu, am făcut tot ce era necesar să evoluez. Am plecat de acasă, lăsând familia, nevoile financiare și prietenii pe plan secund pentru a participa la fiecare seminar, curs sau workshop care mă propulsa înainte.<br><br>

      Azi culeg ROADELE. Dacă există o persoană căreia trebuie să îi mulțumesc toată viața, acela este Ciprian Ungureanu, omul care a văzut în mine ceea ce eu nu vedeam!<br><br>

      Nevoia de supraviețuire mi-a descoperit pasiunea pentru TUNS, pe care am transformat-o în carieră cu 90% muncă și 10% talent.<br><br>

      Acum, la 43 de ani, iubesc această meserie. Ea îmi oferă stabilitate materială și spirituală, iar prin ea sunt înconjurat de oameni frumoși. Poate mulți dintre voi vă veți regăsi în această poveste, iar pentru cei care nu au rămas corijenți la viață, mă bucur din suflet pentru voi.<br><br>

      Luv ya ♥️💈
    `,
    achievements: `
      Din 2016, nu cred că am ratat mai mult de 10 concursuri organizate fizic sau online.<br><br>

      În noiembrie 2018, am fost nominalizat <b style="color:${ACCENT}">BEST BARBER</b> pe cel mai mare grup de frizerie din România și am câștigat unul dintre cele mai râvnite trofee ale vremii!<br><br>

      Am investit în imaginea mea și am participat la peste 20 de concursuri, reușind să urc pe podium.<br><br>

      În perioada pandemiei, am ținut unită comunitatea frizerilor printr-un proiect unic: <b style="color:${ACCENT}">BARBER LA MICROFON</b>. Împreună cu Ciprian Ungureanu, am adus în prim-plan cei mai buni frizeri din România prin live-uri.<br><br>

      În 2023, am creat propriul eveniment/concurs, <b style="color:${ACCENT}">THEBARBERPOST ROMANIA</b>, împreună cu Ciprian Ungureanu. Concursul a adunat 60 de participanți și a oferit unele dintre cele mai mari premii din România!<br><br>

      Astăzi fac parte cu onoare din Fade Academy, unde sunt asistent-educator și ajut la formarea noii generații.<br><br>
    `,
  },
};

const FadeAcademySection: React.FC<FadeAcademySectionProps> = ({
  imageSrc,
  formatorName,
  description,
  achievements,
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

        if (imageRef.current) {
          tl.fromTo(
            imageRef.current,
            { scale: 0.985, opacity: 0.9 },
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
      {/* Background */}
      <Box position="absolute" inset={0} bg="black" />
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial-gradient(900px 420px at 50% 15%, rgba(121,253,21,0.14), rgba(0,0,0,0) 60%), linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.95))"
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
        px={{ base: 4, md: 6, lg: 10 }}
        position="relative"
        zIndex={1}
      >
        {/* Image */}
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Box
            borderRadius="3xl"
            overflow="hidden"
            border="1px solid"
            borderColor="rgba(121,253,21,0.18)"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            boxShadow="0 18px 70px rgba(0,0,0,0.75)"
          >
            <Box
              h="3px"
              w="full"
              bgGradient={`linear(to-r, transparent, ${ACCENT}, transparent)`}
            />
            <Image
              ref={imageRef}
              src={imageSrc}
              alt={formatorName}
              width="100%"
              height="auto"
              objectFit="cover"
              loading="lazy"
              filter="contrast(1.02) saturate(1.05)"
            />
            <Box
              position="absolute"
              inset={0}
              pointerEvents="none"
              bgGradient="linear(to-b, rgba(0,0,0,0.05), rgba(0,0,0,0.55))"
            />
          </Box>

          {/* Mobile badge */}
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
              • Testimonial
            </Badge>
          </Box>
        </GridItem>

        {/* Text */}
        <GridItem colSpan={1} order={{ base: 2, lg: 1 }}>
          <Grid
            templateRows="repeat(2, auto)"
            gap={{ base: 5, md: 6 }}
            height="100%"
          >
            {/* Name card */}
            <GridItem
              ref={formatorBoxRef}
              opacity={0}
              borderRadius="3xl"
              position="relative"
              overflow="hidden"
              p={{ base: 6, md: 8 }}
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="rgba(121,253,21,0.18)"
              boxShadow="0 18px 70px rgba(0,0,0,0.75)"
              textAlign={{ base: "center", lg: "left" }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="3px"
                bgGradient={`linear(to-r, transparent, ${ACCENT}, transparent)`}
              />
              <Box
                position="absolute"
                top="-140px"
                left="-140px"
                w="280px"
                h="280px"
                borderRadius="full"
                bg={`${ACCENT}1A`}
                filter="blur(70px)"
              />

              <Box position="relative" zIndex={1}>
                <Badge
                  bg={ACCENT}
                  color="black"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontWeight="900"
                >
                  POVESTE REALĂ
                </Badge>

                <Text
                  mt={4}
                  fontFamily="Stint Ultra Expanded, serif"
                  fontSize={{ base: "26px", md: "38px" }}
                  lineHeight="1.1"
                >
                  {formatorName}
                  <Box as="span" color={ACCENT}>
                    .
                  </Box>
                </Text>

                <Text
                  mt={3}
                  fontFamily="Pontano Sans, sans-serif"
                  color="whiteAlpha.800"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Transformare prin disciplină, muncă și comunitate.
                </Text>
              </Box>
            </GridItem>

            {/* Story + achievements card */}
            <GridItem ref={descriptionRef} opacity={0}>
              <Box
                borderRadius="3xl"
                p={{ base: 6, md: 8 }}
                bg="rgba(255,255,255,0.03)"
                border="1px solid"
                borderColor="rgba(121,253,21,0.16)"
                boxShadow="0 18px 70px rgba(0,0,0,0.65)"
                backdropFilter="blur(10px)"
              >
                <Text
                  fontFamily="Pontano Sans, sans-serif"
                  color="whiteAlpha.900"
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight="1.9"
                  textAlign="left"
                  dangerouslySetInnerHTML={{ __html: description }}
                />

                <Box my={{ base: 6, md: 8 }} h="1px" bg="whiteAlpha.200" />

                <Badge
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="rgba(121,253,21,0.22)"
                  color="white"
                  borderRadius="full"
                  px={3}
                  py={1}
                  mb={4}
                >
                  Realizări
                  <Box as="span" color={ACCENT} ml={2}>
                    ●
                  </Box>
                </Badge>

                <Text
                  fontFamily="Pontano Sans, sans-serif"
                  color="whiteAlpha.900"
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight="1.9"
                  textAlign="left"
                  dangerouslySetInnerHTML={{ __html: achievements }}
                />
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

const AlinCiucasSection: React.FC = () => {
  return <FadeAcademySection {...formatorData.alinCiucas} />;
};

export default AlinCiucasSection;
