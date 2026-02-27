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

const ACCENT = "#79FD15";

const glowPulse = keyframes`
  0%, 100% { opacity: 0.65; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [priceBoxRef.current, contactBoxRef.current],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const showNotification = (message: string) => {
    const alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.top = "18px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.padding = "12px 14px";
    alertBox.style.background = "rgba(0,0,0,0.88)";
    alertBox.style.color = "white";
    alertBox.style.borderRadius = "14px";
    alertBox.style.border = "1px solid rgba(121,253,21,0.25)";
    alertBox.style.boxShadow = "0 18px 60px rgba(0,0,0,0.6)";
    alertBox.style.zIndex = "2000";
    alertBox.style.display = "flex";
    alertBox.style.alignItems = "center";
    alertBox.style.gap = "10px";
    alertBox.style.backdropFilter = "blur(10px)";
    alertBox.style.maxWidth = "92vw";
    alertBox.style.fontFamily =
      "system-ui, -apple-system, Segoe UI, Roboto, Arial";

    const iconElement = document.createElement("span");
    iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

    const textElement = document.createElement("span");
    textElement.textContent = message;

    alertBox.appendChild(iconElement);
    alertBox.appendChild(textElement);

    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.remove();
    }, 1700);
  };

  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      showNotification("Număr de telefon copiat în clipboard!");
    } catch {
      showNotification("Nu am putut copia automat. Copiază manual numărul.");
    }
  };

  return (
    <Box
      ref={containerRef}
      position="relative"
      overflow="hidden"
      py={{ base: 8, md: 10 }}
    >
      {/* Black + neon background */}
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
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 4, md: 6 }}
        w="full"
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        position="relative"
        zIndex={1}
      >
        {/* PRICE CARD */}
        <GridItem>
          <Box
            ref={priceBoxRef}
            borderRadius="2xl"
            border="1px solid"
            borderColor="rgba(121,253,21,0.18)"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            boxShadow="0 18px 70px rgba(0,0,0,0.75)"
            overflow="hidden"
            p={{ base: 5, md: 6 }}
            minH={{ base: "unset", md: "210px" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            position="relative"
          >
            {/* top accent line */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="3px"
              bgGradient={`linear(to-r, transparent, ${ACCENT}, transparent)`}
            />
            {/* small corner glow */}
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

            <Box position="relative" zIndex={1} textAlign="center">
              <Text
                fontFamily="Pontano Sans, sans-serif"
                fontSize="xs"
                color="whiteAlpha.700"
              >
                PREȚ
              </Text>

              <Text
                mt={2}
                fontFamily="Stint Ultra Expanded, serif"
                fontSize={{ base: "34px", md: "44px" }}
                lineHeight="1.05"
                color={ACCENT}
                textShadow="0 0 18px rgba(0,0,0,0.8)"
              >
                {price}
              </Text>

              <Text
                mt={3}
                fontFamily="Pontano Sans, sans-serif"
                fontSize="sm"
                color="whiteAlpha.800"
              >
                Plată simplă • Detalii la înscriere
              </Text>

              {/* Mobile CTA */}
              <Box mt={5} display={{ base: "block", md: "none" }}>
                <Box
                  as="button"
                  onClick={() =>
                    showNotification(
                      "Pentru rezervare, folosește numărul de contact din dreapta.",
                    )
                  }
                  w="full"
                  borderRadius="xl"
                  py={3}
                  bg={`${ACCENT}`}
                  color="black"
                  fontFamily="Pontano Sans, sans-serif"
                  fontWeight="800"
                >
                  Rezervă / Întreabă detalii
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>

        {/* CONTACT CARD */}
        <GridItem>
          <Box
            ref={contactBoxRef}
            borderRadius="2xl"
            border="1px solid"
            borderColor="rgba(121,253,21,0.18)"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            boxShadow="0 18px 70px rgba(0,0,0,0.75)"
            overflow="hidden"
            p={{ base: 5, md: 6 }}
            minH={{ base: "unset", md: "210px" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            position="relative"
          >
            {/* top accent line */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="3px"
              bgGradient={`linear(to-r, transparent, ${ACCENT}, transparent)`}
            />
            {/* subtle glow */}
            <Box
              position="absolute"
              bottom="-140px"
              right="-140px"
              w="280px"
              h="280px"
              borderRadius="full"
              bg={`${ACCENT}14`}
              filter="blur(70px)"
            />

            <Box position="relative" zIndex={1} textAlign="center">
              <Text
                fontFamily="Pontano Sans, sans-serif"
                fontSize="xs"
                color="whiteAlpha.700"
              >
                CONTACT
              </Text>

              {/* Phone pill (tap target) */}
              <Box
                mt={4}
                as="button"
                onClick={handlePhoneClick}
                title="Apasă pentru a copia numărul de telefon"
                borderRadius="2xl"
                w="full"
                px={4}
                py={4}
                border="1px solid"
                borderColor="rgba(121,253,21,0.22)"
                bg="rgba(0,0,0,0.35)"
                transition="transform 150ms ease, background 150ms ease"
                _hover={{ bg: "rgba(0,0,0,0.45)" }}
                _active={{ transform: "scale(0.99)" }}
              >
                <Text
                  fontFamily="Stint Ultra Expanded, serif"
                  fontSize={{ base: "16px", md: "18px" }}
                  color="white"
                >
                  {phoneNumber}
                </Text>
                <Text
                  mt={1}
                  fontFamily="Pontano Sans, sans-serif"
                  fontSize="xs"
                  color="whiteAlpha.700"
                >
                  Apasă pentru a copia
                </Text>
              </Box>

              {/* Location */}
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                isExternal
                mt={4}
                display="inline-block"
                fontFamily="Pontano Sans, sans-serif"
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.900"
                textDecoration="none"
                _hover={{ textDecoration: "underline", color: ACCENT }}
              >
                📍 {location}
              </Link>

              {/* Social */}
              <HStackLike>
                <Link
                  href={facebookLink}
                  isExternal
                  aria-label="Facebook"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  mt={4}
                  borderRadius="full"
                  w="44px"
                  h="44px"
                  border="1px solid"
                  borderColor="rgba(121,253,21,0.22)"
                  bg="rgba(255,255,255,0.03)"
                  _hover={{ bg: "rgba(121,253,21,0.10)" }}
                >
                  <Icon as={FaFacebook} w={6} h={6} color={ACCENT} />
                </Link>
              </HStackLike>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PriceContact;

/**
 * Small helper: Chakra's HStack isn't imported in your original file;
 * using a tiny wrapper component avoids adding extra imports if you prefer.
 */
function HStackLike({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  );
}
