"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

const images = [
  {
    src: "/images/galerie/galerie1.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 1",
  },
  {
    src: "/images/galerie/galerie2.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 2",
  },
  {
    src: "/images/galerie/galerie3.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 3",
  },
  {
    src: "/images/galerie/galerie4.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 4",
  },
  {
    src: "/images/galerie/galerie5.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 5",
  },

  {
    src: "/images/galerie/galerie7.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 7",
  },
  {
    src: "/images/galerie/galerie8.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 8",
  },
  {
    src: "/images/galerie/galerie9.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 9",
  },
  {
    src: "/images/galerie/galerie10.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 10",
  },
  {
    src: "/images/galerie/galerie11.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 11",
  },
  {
    src: "/images/galerie/galerie12.webp",
    alt: "Cursuri frizerie incepatori - Ciprian Ungureanu Fade academy 12",
  },
];

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <Box>
      {/* Title Section */}
      <Heading
        as="h2"
        textAlign="center"
        fontSize="3xl"
        mb={6}
        className="font-stint-ultra-expanded"
      >
        GALERIE
      </Heading>

      <Box ref={emblaRef} overflow="hidden">
        <Flex>
          {images.map((image, index) => (
            <Box
              key={index}
              flex="none"
              width={{ base: "100%", md: "33%" }}
              height={{ base: "550px", md: "800px" }}
              position="relative"
              p={2} // Add padding around each image
              border="2px solid #023d82" // Add border with custom color
              borderRadius="2xl" // Rounded corners for the border
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                quality={100}
                loading="lazy"
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default EmblaCarousel;
