"use client";

import React, { useEffect, useRef } from "react";
import { Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeAcademySectionProps {
  imageSrc: string;
  formatorName: string;
  description: string;
}

const formatorData = {
  adyRamses: {
    imageSrc: "/images/testimoniale/morar2.webp",
    formatorName: "Ady Ramses",
    description: `Eu sunt Ady Ramses am 20 de ani faca asta de 4 ani jumate si am devenit artist Barber , pana acum un an lucram la un salon unde faceam bani dar nu eram multumit si simteam ca lot mai mult decat un lucrator la scaun si am ales sa fac primul meu seminar la ciprian de unde am simtit nevoi sa petrec mai mult timp alaturi de el si m am angajat la el sa il pot studia si mai mult si de un an de zile sunt alaturi de el prin toate seminariile in toata tara si m a ajutat foarte mult sa imi dezvolt foarte mult viziunea despre frizerie de a invata tunderea corecta a parului finisaje etc si vreau sa ajung si eu educator si sa impartasesc la randul meu cunostitele acumulate de mine`,
  },
};

const FadeAcademySection: React.FC<FadeAcademySectionProps> = ({
  imageSrc,
  formatorName,
  description,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const formatorBoxRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    if (
      containerRef.current &&
      formatorBoxRef.current &&
      descriptionRef.current
    ) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          [formatorBoxRef.current, descriptionRef.current],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      });
    }

    return () => ctx?.revert();
  }, []);

  return (
    <Box
      className="overflow-hidden bg-[#cbdad4]"
      ref={containerRef}
      minH={{ base: "100vh", md: "auto" }}
      py={{ base: 8, md: 12, lg: 16 }}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={{ base: 8, lg: 12 }}
        className="w-full lg:w-[80%] mx-auto px-4"
        maxWidth="1400px"
        alignItems="center"
      >
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Box
            className="w-full lg:w-3/4 mx-auto overflow-hidden"
            position="relative"
            paddingTop={{ base: "100%", lg: "75%" }}
          >
            <Image
              ref={imageRef}
              src={imageSrc}
              alt={formatorName}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              borderRadius="2xl"
              loading="lazy"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1} order={{ base: 2, lg: 1 }}>
          <Grid templateRows="repeat(2, auto)" gap={6} height="100%">
            <GridItem
              ref={formatorBoxRef}
              className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
              p={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #fa6529"
              maxWidth={{ base: "100%", lg: "80%" }}
              mx="auto"
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              opacity={0}
            >
              <Text className="font-pontano-sans text-center text-[#F9FBFB]">
                <Text
                  as="span"
                  className="block font-bold text-2xl md:text-3xl font-stint-ultra-expanded mb-2"
                >
                  {formatorName}
                </Text>
              </Text>
            </GridItem>

            <GridItem ref={descriptionRef} opacity={0}>
              <Text
                className="font-pontano-sans text-center text-gray-700 font-semibold whitespace-pre-line"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                px={4}
              >
                {description}
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

const MorarSection: React.FC = () => {
  return <FadeAcademySection {...formatorData.adyRamses} />;
};

export default MorarSection;
