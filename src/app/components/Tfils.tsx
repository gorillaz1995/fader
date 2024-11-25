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
  achievements: string;
}

const formatorData = {
  alinCiucas: {
    imageSrc: "/images/testimoniale/ciucas2.webp",
    formatorName: "Alin Ciucas",
    description: `DE FOAME Da, ați citit bine; FOAMEA este cea care mi-a descoperit PASIUNEA pentru tuns.

      La vârsta de 35 de ani după 17 ani în care mi-am dedicat aptitudinile, in domeniul vânzărilor, am rămas fără job…Eram ASM la o firma destul de mare și vizibilă pe piață. Adică bani mulți…și…baaaam…a doua zi…ZERO. Magazin chinezesc in centru, doua mașini de tuns, un set de piepteni, o pelerină, un scaun cu sondă din Leroy și am trecut la treabă.

      E adevărat, toți ne naștem să știm să facem ceva foarte bine dar trebuie sa ajungem la lucrul ăla…De multe ori nevoile, greutățile, dorința părinților noștri de a ne face "astronauți" reprezintă piedici în drumul de a întâlni pasiunea.

      Când am realizat că ăsta e drumul, am căutat să fiu prezent la orice lucru care mă ajuta să evoluez și am plecat de acasă lăsând familia, nevoile financiare, prietenii pe locul doi pentru a fi prezent la orice seminar, curs, workshop care mă propulsa cu încă un pas înainte spre cunoaștere. Azi culeg ROADELE. Celui care trebuie să îi mulțumesc toată viața este Ciprian Ungureanu, omul care a văzut în mine ce nu am văzut eu!

      La mine nevoia de a supraviețui mi-a descoperit pasiunea pentru TUNS. Și am transformat-o in pasiune cu 90% muncă + 10% talent.

      Am 43 de ani și iubesc aceasta meserie pentru că mă asigură material și spiritual să duc o viață liniștită înconjurat de oameni frumoși. Poate mulți vă veți regăsi aici…și mă bucur pentru voi că nu ați rămas corijenți cu viața…

      Luv ya ♥️💈`,
    achievements: `Din 2016 nu cred ca am ratat 10 concursuri care s-au desfășurat in online si/sau fizic!

      In noiembrie 2018 am fost nominalizat BEST BARBER pe ce mai mare grup de frizerie din Romania "FRIZURI COAFURI SI TUNSORI DE TOP si am castigat unul dintre cele mai râvnite trofee la acea vreme!

      Am profitat de toate cunoștințele si publicitatea gratuită pe care o oferă meeiul online si am investit in imaginea mea! Am peste 20 de concursuri in care am reușit sa urc pe podium!

      In perioada pandemiei am reușit sa tin unita aceasta comunitate cu unul dintre cele mai tari proiecte, BARBER LA MICROFON unde împreună cu Ciprian Ungureanu am adus in prin-plan toți frizerii de top prin liveuri pe grupul de mai sus!

      In 2023 am creat fizic propriul eveniment/concurs THEBARBERPOST ROMANIA împreună cu Ciprian Ungureanu unde am avut pe scena iconii industriei cu demonstrații de măestrie iar concursul din cadrul evenimentului a adunat pe 60 de concurenți unde câștigătorii au avit parte de cele mai mari premii valoric care s-au dat vreodată in România!

      In prezent fac parte cu onoare din FadeAcademy unde sunt asistent-aducator ajutând la formarea tonetilor care vin către această frumoasă meserie!`,
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
    <Box className="overflow-hidden bg-[#cbdad4] py-7" ref={containerRef}>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={6}
        className="w-full lg:w-[80%] mx-auto px-6 lg:px-12"
        maxWidth="100%"
      >
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Box className="lg:w-3/4 lg:mx-auto overflow-hidden">
            <Image
              ref={imageRef}
              src={imageSrc}
              alt={formatorName}
              width="100%"
              height="auto"
              objectFit="cover"
              borderRadius="2xl"
              loading="lazy"
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1} order={{ base: 2, lg: 1 }}>
          <Grid templateRows="repeat(3, auto)" gap={6} height="100%">
            <GridItem
              ref={formatorBoxRef}
              className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #fa6529"
              maxWidth={{ base: "100%", lg: "50%" }}
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              opacity={0}
            >
              <Text className="font-pontano-sans text-lg text-[#F9FBFB] text-center">
                <Text
                  as="span"
                  className="font-bold text-xl font-stint-ultra-expanded"
                >
                  {formatorName}
                </Text>
              </Text>
            </GridItem>

            <GridItem ref={descriptionRef} opacity={0}>
              <Text
                className="font-pontano-sans text-gray-700 font-semibold"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                textAlign="left"
              >
                {description}
              </Text>
              <Text
                className="font-pontano-sans text-gray-700 font-semibold mt-8"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                textAlign="left"
              >
                {achievements}
              </Text>
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
