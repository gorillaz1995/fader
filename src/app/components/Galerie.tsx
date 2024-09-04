"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import EmblaCarouselDotButton from "./Ebut"; // Import the dot button component
import Autoplay from "embla-carousel-autoplay"; // Import the autoplay plugin

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2100 }),
  ]); // 35% faster than the default 3000ms
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <Box bg="#cbdad4" py={{ base: 10, md: 20 }}>
      {/* Title Section */}
      <Heading
        as="h2"
        textAlign="center"
        fontSize="3xl"
        mb={6}
        className="font-stint-ultra-expanded font-thin text-[#023d82] sparkle-text"
        letterSpacing="widest"
        textTransform="uppercase"
      >
        GALERIE
      </Heading>
      <style jsx>{`
        @keyframes sparkle {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .sparkle-text {
          background: linear-gradient(
            120deg,
            #023d82,
            #5ca9e6,
            #023d82,
            #5ca9e6
          );
          background-size: 400% 400%;
          animation: sparkle 2s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <Box ref={emblaRef} overflow="hidden">
        <Flex gap={1}>
          {images.map((image, index) => (
            <Box
              key={index}
              flex="none"
              width={{ base: "95%", md: "33%" }}
              height={{ base: "550px", md: "800px" }}
              position="relative"
              p={2}
              border="1px solid #023d82"
              borderRadius="3xl"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3)"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-3xl"
                quality={100}
                priority={index < 3}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <EmblaCarouselDotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EmblaCarousel;
