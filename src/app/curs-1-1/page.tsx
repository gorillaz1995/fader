"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Image,
  Stack,
  List,
  ListItem,
  Icon,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Script from "next/script";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const WHATSAPP_BASE = "https://wa.me/40723403403";
const ACCENT = "#79FD15";

const GLASS_CARD = {
  borderRadius: "3xl",
  border: "1px solid",
  borderColor: "rgba(121,253,21,0.18)",
  bg: "whiteAlpha.50",
  backdropFilter: "blur(12px)",
  boxShadow: "0 18px 70px rgba(0,0,0,0.75)",
};

const INNER_PANEL = {
  borderRadius: "2xl",
  border: "1px solid",
  borderColor: "rgba(121,253,21,0.18)",
  bg: "rgba(0,0,0,0.35)",
};

export default function AcademieOneToOnePage() {
  const openWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE}?text=${encoded}`, "_blank");
  };

  const heroMinH = useBreakpointValue({ base: "92vh", md: "85vh" });

  return (
    <Box
      bg="black"
      color="white"
      overflow="hidden"
      position="relative"
      backgroundImage={`
        radial-gradient(circle at 10% 20%, rgba(121,253,21,0.08), transparent 22%),
        radial-gradient(circle at 85% 15%, rgba(121,253,21,0.06), transparent 18%),
        radial-gradient(circle at 50% 80%, rgba(255,255,255,0.03), transparent 20%)
      `}
    >
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        minH={heroMinH}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={{ base: 4, md: 0 }}
      >
        <Image
          src="images/ungureanu2026-5.jpg"
          alt="Fade Academy"
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          objectFit="cover"
          filter="brightness(0.25)"
          style={{ objectPosition: "center 10%" }}
        />

        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.700"
          backdropFilter="blur(1px)"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient={`radial-gradient(900px 500px at 50% 18%, rgba(121,253,21,0.18), rgba(0,0,0,0) 60%), linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.95))`}
        />
        <Box
          position="absolute"
          inset={0}
          opacity={0.14}
          backgroundImage={`linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`}
          backgroundSize="34px 34px"
        />

        <Container maxW="5xl" position="relative" zIndex={2}>
          <VStack spacing={{ base: 5, md: 6 }} color="white">
            <Badge
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              px={4}
              py={2}
              borderRadius="full"
              fontWeight="600"
              backdropFilter="blur(10px)"
            >
              Fade Academy • Mentorat 1 la 1 • Standard de top
              <Box
                as="span"
                ml={2}
                display="inline-block"
                w="8px"
                h="8px"
                borderRadius="full"
                bg={ACCENT}
                boxShadow={`0 0 18px ${ACCENT}`}
              />
            </Badge>

            <Heading
              size="2xl"
              fontFamily="Stint Ultra Expanded, serif"
              lineHeight="1.05"
              textShadow="0 0 24px rgba(0,0,0,0.75)"
              fontSize={{ base: "34px", sm: "46px", md: "64px", lg: "72px" }}
            >
              Mentorat & Perfecționare 1 la 1
              <Box as="span" color={ACCENT}>
                .
              </Box>
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              maxW="900px"
              color="whiteAlpha.900"
              fontFamily="Pontano Sans, sans-serif"
              lineHeight="1.7"
              px={{ base: 2, md: 0 }}
            >
              Patru opțiuni. Patru stiluri de mentorat. Același standard:{" "}
              <Box as="span" color={ACCENT} fontWeight="700">
                performanță reală
              </Box>
              . Alege traseul potrivit și accelerează-ți evoluția cu feedback
              direct, structură, metodă și practică controlată.
            </Text>

            <HStack
              spacing={3}
              flexDir={{ base: "column", sm: "row" }}
              w="full"
              justify="center"
              pt={{ base: 2, md: 4 }}
            >
              <Button
                size="lg"
                bg={ACCENT}
                color="black"
                w={{ base: "full", sm: "auto" }}
                borderRadius="2xl"
                px={8}
                boxShadow="0 18px 60px rgba(0,0,0,0.6)"
                _hover={{ transform: "translateY(-1px)" }}
                _active={{ transform: "translateY(1px)" }}
                onClick={() =>
                  openWhatsApp(
                    "Salut! Sunt interesat de cursurile 1 la 1 Fade Academy. Aș dori să discut opțiunile și evaluarea.",
                  )
                }
              >
                Contactează pe WhatsApp
              </Button>

              <Button
                size="lg"
                variant="outline"
                borderColor="rgba(121,253,21,0.35)"
                color="white"
                w={{ base: "full", sm: "auto" }}
                borderRadius="2xl"
                px={8}
                bg="whiteAlpha.50"
                _hover={{ bg: "whiteAlpha.100" }}
                onClick={() => {
                  const el = document.getElementById("pachete-1la1");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Vezi cele 4 opțiuni
              </Button>
            </HStack>

            <SimpleGrid
              columns={{ base: 1, sm: 3 }}
              spacing={4}
              w="full"
              maxW="4xl"
              pt={{ base: 4, md: 6 }}
            >
              {[
                { label: "Format", value: "1 la 1" },
                { label: "Focus", value: "Tehnică + execuție" },
                { label: "Nivel", value: "Profesional" },
              ].map((s) => (
                <Box
                  key={s.label}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  px={5}
                  py={4}
                  textAlign="left"
                >
                  <Text fontSize="xs" color="whiteAlpha.700">
                    {s.label}
                  </Text>
                  <Text
                    mt={1}
                    fontFamily="Familjen Grotesk, sans-serif"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="700"
                  >
                    <Box as="span" color={ACCENT}>
                      {s.value}
                    </Box>
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ================= DESPRE 1 LA 1 ================= */}
      <Container maxW="6xl" py={{ base: 14, md: 20 }}>
        <VStack spacing={{ base: 8, md: 10 }} textAlign="center">
          <Heading
            color={ACCENT}
            fontFamily="Stint Ultra Expanded, serif"
            fontSize={{ base: "24px", sm: "30px", md: "44px" }}
          >
            De ce să alegi un curs 1 la 1?
          </Heading>

          <Text
            maxW="980px"
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.900"
            fontFamily="Pontano Sans, sans-serif"
            lineHeight="1.75"
          >
            Cursurile de grup sunt excelente pentru bază și inițiere. Însă dacă
            îți dorești perfecționare reală, corecție tehnică personalizată și
            progres accelerat, formatul 1 la 1 este nivelul următor. Aici
            eliminăm „ghicitul” — îți oferim metodă, structură și feedback
            precis.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            {[
              {
                title: "Atenție 100% dedicată",
                desc: "Tot focusul este pe nivelul, stilul și obiectivele tale. Fără timp împărțit între cursanți.",
                icon: "🎯",
              },
              {
                title: "Feedback personalizat",
                desc: "Identificăm exact ce trebuie ajustat și optimizăm fiecare detaliu: unghiuri, secțiuni, tranziții.",
                icon: "🧠",
              },
              {
                title: "Direcție strategică",
                desc: "Primești claritate despre ce să aprofundezi și ce să eviți. Îți construim următorul pas logic.",
                icon: "🧭",
              },
            ].map((c) => (
              <Box
                key={c.title}
                borderRadius="3xl"
                border="1px solid"
                borderColor="rgba(121,253,21,0.18)"
                bg="whiteAlpha.50"
                backdropFilter="blur(10px)"
                p={{ base: 6, md: 8 }}
                textAlign="left"
                boxShadow="0 18px 60px rgba(0,0,0,0.6)"
              >
                <Text fontSize="2xl" mb={3}>
                  {c.icon}
                </Text>
                <Heading
                  size="md"
                  mb={3}
                  fontFamily="Familjen Grotesk, sans-serif"
                >
                  {c.title}
                </Heading>
                <Text
                  color="whiteAlpha.800"
                  fontFamily="Pontano Sans, sans-serif"
                >
                  {c.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Divider borderColor="whiteAlpha.200" />

      {/* ================= EVALUARE + SEMINAR STRUCTURA (GLOBAL) ================= */}
      <Container maxW="6xl" py={{ base: 14, md: 20 }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 8, lg: 10 }}
          align="stretch"
        >
          <Box
            borderRadius="3xl"
            border="1px solid"
            borderColor="rgba(121,253,21,0.18)"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            p={{ base: 6, md: 10 }}
            boxShadow="0 18px 60px rgba(0,0,0,0.6)"
            flex="1"
          >
            <Badge
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="whiteAlpha.900"
              px={3}
              py={1}
              borderRadius="full"
              mb={4}
            >
              Ședința de evaluare
            </Badge>

            <Heading
              fontFamily="Stint Ultra Expanded, serif"
              fontSize={{ base: "22px", md: "32px" }}
              mb={4}
            >
              Intrarea corectă în 1 la 1
              <Box as="span" color={ACCENT}>
                .
              </Box>
            </Heading>

            <Text
              color="whiteAlpha.900"
              fontFamily="Pontano Sans, sans-serif"
              lineHeight="1.75"
              mb={5}
            >
              Dacă nu ai urmat cursul nostru de specializare, începem cu o
              evaluare practică. În salonul nostru vei realiza o{" "}
              <Box as="span" color={ACCENT} fontWeight="700">
                tunsoare completă
              </Box>{" "}
              fără asistență, pe un model adus de tine. Apoi analizăm lucrarea
              și stabilim împreună traseul optim.
            </Text>

            <List spacing={3} color="whiteAlpha.900">
              <ListItem>
                <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                Timp alocat: <b>1 oră</b>
              </ListItem>
              <ListItem>
                <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                Analiză completă + recomandare număr ședințe
              </ListItem>
              <ListItem>
                <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                Cost evaluare: <b>300 lei</b>
              </ListItem>
            </List>

            <Button
              mt={6}
              bg={ACCENT}
              color="black"
              size="lg"
              borderRadius="2xl"
              w={{ base: "full", sm: "auto" }}
              onClick={() =>
                openWhatsApp(
                  "Salut! Doresc să programez ședința de evaluare (1 oră / 300 lei) pentru cursurile 1 la 1.",
                )
              }
            >
              Programează evaluarea
            </Button>
          </Box>

          <Box
            borderRadius="3xl"
            border="1px solid"
            borderColor="rgba(121,253,21,0.18)"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            p={{ base: 6, md: 10 }}
            boxShadow="0 18px 60px rgba(0,0,0,0.6)"
            flex="1"
          >
            <Badge
              bg={ACCENT}
              color="black"
              px={3}
              py={1}
              borderRadius="full"
              mb={4}
              fontWeight="800"
            >
              Structura unei zile de seminar
            </Badge>

            <Heading
              fontFamily="Stint Ultra Expanded, serif"
              fontSize={{ base: "22px", md: "32px" }}
              mb={4}
            >
              Eu demonstrez → Tu exersezi → Tu execuți
            </Heading>

            <Text
              color="whiteAlpha.900"
              fontFamily="Pontano Sans, sans-serif"
              lineHeight="1.75"
              mb={5}
            >
              Principiul nostru e simplu și extrem de eficient:{" "}
              <Box as="span" color={ACCENT} fontWeight="700">
                3 modele într-o zi
              </Box>
              , cu trecere clară de la demonstrație la execuție independentă.
              Asta îți fixează tehnica și îți crește încrederea rapid.
            </Text>

            <List spacing={3} color="whiteAlpha.900">
              <ListItem>
                <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                <b>12:00</b> – Demonstrație detaliată (pas cu pas)
              </ListItem>
              <ListItem>
                <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                <b>14:30</b> – Tu tunzi sub supraveghere (intervenție max. 30%,
                doar finisaje)
              </ListItem>
              <ListItem>
                <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                <b>17:00</b> – Tu tunzi 100% independent, fără ajutor
              </ListItem>
            </List>

            <Box
              mt={6}
              borderTop="1px solid"
              borderColor="whiteAlpha.200"
              pt={5}
            >
              <Text
                fontFamily="Pontano Sans, sans-serif"
                color="whiteAlpha.900"
                fontSize={{ base: "sm", md: "md" }}
              >
                <b>🔹 Echipament:</b> ai nevoie de toate instrumentele proprii.
                <br />
                <b>🔹 Modele:</b> ideal aduci tu modele; dacă nu reușești, putem
                asigura modele contra cost: <b>100 lei/model</b> (total 300 lei
                pentru 3 modele).
                <br />
                <b>🔹 Pauză de masă:</b> luăm prânzul împreună, masa ta este
                asigurată.
              </Text>
            </Box>
          </Box>
        </Stack>

        <Box
          mt={{ base: 8, md: 10 }}
          borderRadius="3xl"
          border="1px solid"
          borderColor="rgba(121,253,21,0.18)"
          bg="whiteAlpha.50"
          backdropFilter="blur(10px)"
          p={{ base: 6, md: 10 }}
          boxShadow="0 18px 60px rgba(0,0,0,0.6)"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            align={{ base: "stretch", md: "center" }}
            justify="space-between"
          >
            <Box>
              <Heading
                fontFamily="Stint Ultra Expanded, serif"
                fontSize={{ base: "20px", md: "28px" }}
              >
                Cost și rezervare
              </Heading>
              <Text
                mt={2}
                color="whiteAlpha.900"
                fontFamily="Pontano Sans, sans-serif"
              >
                💰 Preț seminar 1 zi:{" "}
                <Box as="span" color={ACCENT} fontWeight="800">
                  2500 lei
                </Box>
                <br />
                📅 Rezervare cu minim 2 săptămâni înainte (avans <b>1000 lei</b>
                )<br />
                ⚠️ Anulare: cu mai puțin de 7 zile înainte, avansul nu se
                returnează.
              </Text>
            </Box>

            <Button
              bg={ACCENT}
              color="black"
              size="lg"
              borderRadius="2xl"
              onClick={() =>
                openWhatsApp(
                  "Salut! Doresc să rezerv un seminar 1 zi (2500 lei) și să stabilim evaluarea / programarea.",
                )
              }
            >
              Rezervă un seminar
            </Button>
          </Stack>
        </Box>
      </Container>

      <Divider borderColor="whiteAlpha.200" />

      {/* ================= CONSULTANTA / STRATEGIC (Ciprian) ================= */}
      <Container maxW="6xl" py={{ base: 14, md: 20 }}>
        <Box
          borderRadius="3xl"
          border="1px solid"
          borderColor="rgba(121,253,21,0.18)"
          bg="whiteAlpha.50"
          backdropFilter="blur(10px)"
          p={{ base: 6, md: 10 }}
          boxShadow="0 18px 60px rgba(0,0,0,0.6)"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 6, md: 10 }}
            align="center"
          >
            <Image
              src="images/ungureanu2026-2.jpg"
              alt="Ciprian Ungureanu"
              borderRadius="2xl"
              w={{ base: "100%", md: "48%" }}
              objectFit="cover"
              style={{ objectPosition: "center 12%" }}
            />

            <VStack align="start" spacing={5} w="full">
              <Badge
                bg={ACCENT}
                color="black"
                borderRadius="full"
                px={3}
                py={1}
              >
                Sesiune Strategică
              </Badge>

              <Heading
                fontFamily="Stint Ultra Expanded, serif"
                fontSize={{ base: "24px", md: "36px" }}
              >
                Mentorat 60 minute – Ciprian Ungureanu
              </Heading>

              <Text
                color="whiteAlpha.900"
                fontFamily="Pontano Sans, sans-serif"
                lineHeight="1.75"
              >
                Pentru frizerii care vor claritate, validare tehnică și un plan
                concret. Analizăm lucrările tale (foto/video), identificăm ce
                trebuie corectat și îți recomandăm ruta de perfecționare. Este
                „busola” care te pune pe direcția corectă, fără risipă de timp.
              </Text>

              <List spacing={3}>
                <ListItem>
                  <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                  Analiză lucrări foto/video
                </ListItem>
                <ListItem>
                  <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                  Recomandare tip de 1 la 1 potrivit
                </ListItem>
                <ListItem>
                  <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                  Direcție clară de dezvoltare
                </ListItem>
              </List>

              <HStack
                w="full"
                spacing={3}
                flexDir={{ base: "column", sm: "row" }}
              >
                <Button
                  bg={ACCENT}
                  color="black"
                  size="lg"
                  borderRadius="2xl"
                  w={{ base: "full", sm: "auto" }}
                  onClick={() =>
                    openWhatsApp(
                      "Salut! Doresc programare pentru Sesiunea Strategică (60 min) cu Ciprian Ungureanu.",
                    )
                  }
                >
                  Programează pe WhatsApp
                </Button>

                <Button
                  variant="outline"
                  borderColor="rgba(121,253,21,0.35)"
                  color="white"
                  size="lg"
                  borderRadius="2xl"
                  w={{ base: "full", sm: "auto" }}
                  bg="whiteAlpha.50"
                  _hover={{ bg: "whiteAlpha.100" }}
                  onClick={() => {
                    const el = document.getElementById("pachete-1la1");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Vezi pachetele
                </Button>
              </HStack>
            </VStack>
          </Stack>

          <Box mt={{ base: 10, md: 14 }} minH={{ base: "680px", md: "720px" }}>
            <div
              className="tidycal-embed"
              data-path="agentiemarketing0/ciprian-ungureanu-specializare"
            ></div>
            <Script
              src="https://asset-tidycal.b-cdn.net/js/embed.js"
              strategy="afterInteractive"
            />
          </Box>
        </Box>
      </Container>

      <Divider borderColor="whiteAlpha.200" />

      {/* ================= 4 OPTIUNI 1 LA 1 ================= */}
      <Container id="pachete-1la1" maxW="7xl" py={{ base: 14, md: 20 }}>
        <VStack spacing={{ base: 10, md: 16 }}>
          <VStack spacing={4} textAlign="center" maxW="4xl">
            <Heading
              fontFamily="Stint Ultra Expanded, serif"
              fontSize={{ base: "26px", md: "44px" }}
              textShadow="0 0 20px rgba(0,0,0,0.55)"
            >
              4 posibilități de 1 la 1
              <Box as="span" color={ACCENT}>
                .
              </Box>
            </Heading>
            <Text color="whiteAlpha.900" fontFamily="Pontano Sans, sans-serif">
              Fiecare variantă este „cea mai bună” în felul ei — în funcție de
              nivelul și obiectivul tău: strategie cu mentorul principal,
              perfecționare avansată în fade & finishing, consolidare solidă
              pentru consistență sau bază tehnică profundă pentru a înțelege cum
              se construiește orice tunsoare.
            </Text>
          </VStack>

          {/* ================= OPTION 1: CIPRIAN (SEMINAR) ================= */}
          <MotionBox
            {...GLASS_CARD}
            overflow="hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <Stack direction={{ base: "column", md: "row" }}>
              <Image
                src="images/ung123.jpeg"
                alt="Ciprian Ungureanu Premium"
                w={{ base: "100%", md: "50%" }}
                minH={{ base: "320px", md: "100%" }}
                objectFit="cover"
                style={{ objectPosition: "center 10%" }}
              />

              <VStack p={{ base: 6, md: 12 }} align="start" spacing={5}>
                <Badge
                  bg={ACCENT}
                  color="black"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  OPTION 01 • PREMIUM • CIPRIAN UNGUREANU
                </Badge>

                <Heading
                  fontFamily="Stint Ultra Expanded, serif"
                  fontSize={{ base: "26px", md: "44px" }}
                  lineHeight="1.1"
                >
                  Seminar 1-1 – Perfecționare în Tunsori
                </Heading>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="whiteAlpha.900"
                  fontFamily="Pontano Sans, sans-serif"
                  lineHeight="1.75"
                >
                  Acest seminar este destinat celor care vor să-și
                  îmbunătățească tehnica și să atingă un nivel avansat. Pentru a
                  participa, este necesară o evaluare prealabilă dacă nu ai
                  urmat cursul nostru de specializare.
                </Text>

                <Box {...INNER_PANEL} p={5}>
                  <Heading
                    size="md"
                    mb={2}
                    fontFamily="Familjen Grotesk, sans-serif"
                  >
                    Ședința de evaluare (obligatorie în anumite cazuri)
                  </Heading>
                  <Text
                    fontFamily="Pontano Sans, sans-serif"
                    color="whiteAlpha.900"
                    lineHeight="1.75"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    • Se desfășoară în salon și constă într-o tunsoare completă
                    realizată de tine, fără asistență, pe un model adus de tine.
                    <br />• Timp alocat: <b>1 oră</b>
                    <br />• Analizăm lucrarea și îți recomandăm numărul de
                    ședințe necesare pentru obiectiv
                    <br />• Cost evaluare: <b>300 lei</b>
                  </Text>
                </Box>

                <Divider borderColor="whiteAlpha.200" />

                <Heading size="md" fontFamily="Familjen Grotesk, sans-serif">
                  Structura zilei (3 modele)
                </Heading>

                <List spacing={2} fontFamily="Pontano Sans, sans-serif">
                  <ListItem>
                    <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                    <b>12:00</b> – Demonstrație detaliată (pas cu pas)
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                    <b>14:30</b> – Tu tunzi sub supraveghere (intervenție max.
                    30%, doar finisaje)
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                    <b>17:00</b> – Tu tunzi 100% independent, fără ajutor
                  </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} w="full">
                  <Box
                    borderRadius="2xl"
                    p={4}
                    bg={ACCENT}
                    color="black"
                    boxShadow="0 18px 60px rgba(0,0,0,0.5)"
                  >
                    <Text fontSize="xs" opacity={0.75}>
                      Preț seminar 1 zi
                    </Text>
                    <Text fontSize="2xl" fontWeight="900">
                      2500 lei
                    </Text>
                    <Text fontSize="xs" opacity={0.75}>
                      Avans: 1000 lei • min. 2 săptămâni înainte
                    </Text>
                  </Box>

                  <Box
                    borderRadius="2xl"
                    p={4}
                    border="1px solid"
                    borderColor="rgba(121,253,21,0.20)"
                    bg="whiteAlpha.50"
                  >
                    <Text fontSize="xs" color="whiteAlpha.700">
                      Modele & logistică
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.900">
                      Modelele sunt responsabilitatea ta. Dacă nu găsești, putem
                      asigura contra cost: <b>100 lei/model</b>.
                      <br /> Masa ta este asigurată.
                    </Text>
                  </Box>
                </SimpleGrid>

                <HStack
                  w="full"
                  spacing={3}
                  flexDir={{ base: "column", sm: "row" }}
                >
                  <Button
                    bg={ACCENT}
                    color="black"
                    size="lg"
                    borderRadius="2xl"
                    w={{ base: "full", sm: "auto" }}
                    onClick={() =>
                      openWhatsApp(
                        "Salut! Doresc rezervare pentru Seminar 1-1 (2500 lei) cu Ciprian Ungureanu. Vreau să stabilim evaluarea și data.",
                      )
                    }
                  >
                    Rezervă Seminar Premium
                  </Button>

                  <Button
                    variant="outline"
                    borderColor="rgba(121,253,21,0.35)"
                    bg="whiteAlpha.50"
                    color="white"
                    size="lg"
                    borderRadius="2xl"
                    w={{ base: "full", sm: "auto" }}
                    onClick={() =>
                      openWhatsApp(
                        "Salut! Am întrebări despre evaluare, modele și rezervarea seminarului 1-1 cu Ciprian Ungureanu.",
                      )
                    }
                  >
                    Întreabă detalii
                  </Button>
                </HStack>

                <Text fontSize="xs" color="whiteAlpha.700">
                  ⚠️ Anulare: dacă renunți cu mai puțin de 7 zile înainte,
                  avansul nu se returnează.
                </Text>
              </VStack>
            </Stack>
          </MotionBox>

          {/* ================= OPTION 2: ROBERT ================= */}
          <MotionBox
            {...GLASS_CARD}
            overflow="hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <Stack direction={{ base: "column", md: "row-reverse" }}>
              <Image
                src="/images/robert121.jpeg"
                alt="Robert Micu 1 la 1"
                w={{ base: "100%", md: "50%" }}
                minH={{ base: "320px", md: "100%" }}
                objectFit="cover"
              />

              <VStack p={{ base: 6, md: 12 }} align="start" spacing={5}>
                <Badge
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="white"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  OPTION 02 • ADVANCED FADE • ROBERT MICU
                </Badge>

                <Heading
                  fontFamily="Stint Ultra Expanded, serif"
                  fontSize={{ base: "26px", md: "44px" }}
                  lineHeight="1.1"
                >
                  1 la 1 – Fade, Control și Viteză Curată
                </Heading>

                <Text
                  color="whiteAlpha.900"
                  fontFamily="Pontano Sans, sans-serif"
                  lineHeight="1.75"
                >
                  Robert lucrează pe disciplină și consistență: aceleași
                  secțiuni, aceleași unghiuri, aceeași logică — până când
                  execuția ta devine repetabilă. Pentru cei care vor să treacă
                  de „îmi iese uneori” la „îmi iese mereu”.
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                  <Box {...INNER_PANEL} p={4}>
                    <Heading size="sm" mb={2}>
                      Ce obții
                    </Heading>
                    <List spacing={2} fontSize="sm">
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        corecție unghiuri + secționare
                      </ListItem>
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        tranziții fade (zero – 0.5 – 1)
                      </ListItem>
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        timp de execuție optimizat
                      </ListItem>
                    </List>
                  </Box>

                  <Box
                    borderRadius="2xl"
                    p={4}
                    bg={ACCENT}
                    color="black"
                    boxShadow="0 18px 60px rgba(0,0,0,0.5)"
                  >
                    <Text fontSize="xs" opacity={0.75}>
                      Pentru cine e
                    </Text>
                    <Text fontWeight="900" fontSize="lg">
                      Intermediar → Avansat
                    </Text>
                    <Text fontSize="xs" opacity={0.75}>
                      Ideal după evaluare / după cursuri de bază
                    </Text>
                  </Box>
                </SimpleGrid>

                <Box
                  borderRadius="2xl"
                  p={5}
                  border="1px solid"
                  borderColor="rgba(121,253,21,0.18)"
                  bg="whiteAlpha.50"
                >
                  <Text
                    fontFamily="Pontano Sans, sans-serif"
                    color="whiteAlpha.900"
                  >
                    „Tehnica e ca sala: repetarea corectă îți dă rezultat. Noi
                    eliminăm erorile mici care îți strică fade-ul și îți arătăm
                    cum să controlezi tranziția chiar și pe capete dificile.”
                  </Text>
                </Box>

                <Button
                  bg={ACCENT}
                  color="black"
                  size="lg"
                  borderRadius="2xl"
                  w={{ base: "full", sm: "auto" }}
                  onClick={() =>
                    openWhatsApp(
                      "Salut! Sunt interesat de 1 la 1 cu Robert Micu (fade, control, viteză). Vreau să încep cu evaluarea și să stabilim data.",
                    )
                  }
                >
                  Rezervă 1 la 1 cu Robert
                </Button>
              </VStack>
            </Stack>
          </MotionBox>

          {/* ================= OPTION 3: ALBERTO ================= */}
          <MotionBox
            {...GLASS_CARD}
            overflow="hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <Stack direction={{ base: "column", md: "row" }}>
              <Image
                src="/images/alb222.jpeg"
                alt="Alberto Sârbu 1 la 1"
                w={{ base: "100%", md: "50%" }}
                minH={{ base: "320px", md: "100%" }}
                objectFit="cover"
              />

              <VStack p={{ base: 6, md: 12 }} align="start" spacing={5}>
                <Badge
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="white"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  OPTION 03 • HIGH-END FINISH • ALBERTO SÂRBU
                </Badge>

                <Heading
                  fontFamily="Stint Ultra Expanded, serif"
                  fontSize={{ base: "26px", md: "44px" }}
                  lineHeight="1.1"
                >
                  1 la 1 – Finishing, Detaliu și Proporții
                </Heading>

                <Text
                  color="whiteAlpha.900"
                  fontFamily="Pontano Sans, sans-serif"
                  lineHeight="1.75"
                >
                  Pentru frizerii care vor acel „wow” din oglindă. Alberto
                  lucrează pe detalii: contururi curate, texturi, blending fin
                  și o estetică premium. Te învață cum să vezi greșelile mici
                  înainte să le vadă clientul — și cum să le corectezi fără să
                  strici forma.
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                  <Box
                    borderRadius="2xl"
                    p={4}
                    bg={ACCENT}
                    color="black"
                    boxShadow="0 18px 60px rgba(0,0,0,0.5)"
                  >
                    <Text fontSize="xs" opacity={0.75}>
                      Ce „ridică” nivelul
                    </Text>
                    <Text fontWeight="900" fontSize="lg">
                      finishing & simetrie
                    </Text>
                    <Text fontSize="xs" opacity={0.75}>
                      detalii care separă mediocrul de premium
                    </Text>
                  </Box>

                  <Box {...INNER_PANEL} p={4}>
                    <Heading size="sm" mb={2}>
                      Focus sesiuni
                    </Heading>
                    <List spacing={2} fontSize="sm">
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        contururi + simetrie
                      </ListItem>
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        texturare & volum
                      </ListItem>
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        finishing foto-ready
                      </ListItem>
                    </List>
                  </Box>
                </SimpleGrid>

                <Box
                  borderRadius="2xl"
                  p={5}
                  border="1px solid"
                  borderColor="rgba(121,253,21,0.18)"
                  bg="whiteAlpha.50"
                >
                  <Text
                    fontFamily="Pontano Sans, sans-serif"
                    color="whiteAlpha.900"
                  >
                    „Când finishing-ul e corect, tunsoarea pare mai scumpă. Iar
                    asta îți schimbă brandul: clienții simt imediat diferența.”
                  </Text>
                </Box>

                <Button
                  bg={ACCENT}
                  color="black"
                  size="lg"
                  borderRadius="2xl"
                  w={{ base: "full", sm: "auto" }}
                  onClick={() =>
                    openWhatsApp(
                      "Salut! Sunt interesat de 1 la 1 cu Alberto Sârbu (finishing, detalii, proporții). Vreau să încep cu evaluarea și să stabilim data.",
                    )
                  }
                >
                  Rezervă 1 la 1 cu Alberto
                </Button>
              </VStack>
            </Stack>
          </MotionBox>

          {/* ================= OPTION 4: FLORIN HARSAN ================= */}
          <MotionBox
            {...GLASS_CARD}
            overflow="hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <Stack direction={{ base: "column", md: "row-reverse" }}>
              <Image
                src="/images/flor123.jpeg"
                alt="Harsan Florin Clasa de Tehnică"
                w={{ base: "100%", md: "50%" }}
                minH={{ base: "320px", md: "100%" }}
                objectFit="cover"
                style={{ objectPosition: "center center" }}
              />

              <VStack p={{ base: 6, md: 12 }} align="start" spacing={5}>
                <Badge
                  bg={ACCENT}
                  color="black"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  OPTION 04 • CLASA DE TEHNICĂ • FLORIN HARSAN
                </Badge>

                <Heading
                  fontFamily="Stint Ultra Expanded, serif"
                  fontSize={{ base: "26px", md: "44px" }}
                  lineHeight="1.1"
                >
                  Clasa de Tehnică – Înțelege tunsorile, nu doar să le execuți
                </Heading>

                <Text
                  color="whiteAlpha.900"
                  fontFamily="Pontano Sans, sans-serif"
                  lineHeight="1.75"
                >
                  Program de specializare creat pentru frizerii și
                  hair-styliștii care vor să treacă la următorul nivel și să
                  dobândească control real asupra tunsorilor. Aici nu înveți
                  doar să reproduci forme, ci să înțelegi logica din spatele
                  fiecărei construcții.
                </Text>

                <Box {...INNER_PANEL} p={5} w="full">
                  <Heading
                    size="md"
                    mb={3}
                    fontFamily="Familjen Grotesk, sans-serif"
                  >
                    Cele 3 concepte fundamentale
                  </Heading>
                  <List spacing={2} fontFamily="Pontano Sans, sans-serif">
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      <b>Linie</b> – controlul formei și al greutății
                    </ListItem>
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      <b>Graduare</b> – construcția volumului și a structurii
                    </ListItem>
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      <b>Treaptă</b> – dinamica și mișcarea părului
                    </ListItem>
                  </List>
                </Box>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                  <Box
                    borderRadius="2xl"
                    p={4}
                    bg={ACCENT}
                    color="black"
                    boxShadow="0 18px 60px rgba(0,0,0,0.5)"
                  >
                    <Text fontSize="xs" opacity={0.75}>
                      Pentru cine este
                    </Text>
                    <Text fontWeight="900" fontSize="lg">
                      Frizeri & hair-styliști
                    </Text>
                    <Text fontSize="xs" opacity={0.75}>
                      Pentru cei care vor control tehnic real
                    </Text>
                  </Box>

                  <Box {...INNER_PANEL} p={4}>
                    <Heading size="sm" mb={2}>
                      Ce urmărește
                    </Heading>
                    <List spacing={2} fontSize="sm">
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        mai mult control asupra formelor
                      </ListItem>
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        precizie și viteză mai bună în salon
                      </ListItem>
                      <ListItem>
                        <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                        gândire tehnică în tunsori
                      </ListItem>
                    </List>
                  </Box>
                </SimpleGrid>

                <Text
                  color="whiteAlpha.900"
                  fontFamily="Pontano Sans, sans-serif"
                  lineHeight="1.75"
                >
                  După peste 30 de ani de experiență în salon și în educație,
                  Harsan Florin a construit un sistem de predare simplu, logic
                  și aplicabil în orice salon. Scopul este clar: să transforme
                  tunsoarea dintr-o execuție mecanică într-un proces logic și
                  controlat.
                </Text>

                <Box
                  borderRadius="2xl"
                  p={5}
                  border="1px solid"
                  borderColor="rgba(121,253,21,0.18)"
                  bg="whiteAlpha.50"
                  w="full"
                >
                  <Heading size="sm" mb={3}>
                    Ce vei învăța
                  </Heading>
                  <List spacing={2} fontSize="sm" color="whiteAlpha.900">
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      cum se construiește corect o tunsoare
                    </ListItem>
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      cum să controlezi forma și greutatea părului
                    </ListItem>
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      cum să adaptezi tehnica la orice client
                    </ListItem>
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      cum să lucrezi mai rapid și mai precis în salon
                    </ListItem>
                    <ListItem>
                      <Icon as={CheckCircleIcon} color={ACCENT} mr={2} />
                      cum să gândești tunsorile, nu doar să le execuți
                    </ListItem>
                  </List>
                </Box>

                <Text fontSize="sm" color="whiteAlpha.800">
                  Această specializare nu este doar un curs. Este o schimbare de
                  perspectivă asupra tunsorilor.
                </Text>

                <HStack
                  w="full"
                  spacing={3}
                  flexDir={{ base: "column", sm: "row" }}
                >
                  <Button
                    bg={ACCENT}
                    color="black"
                    size="lg"
                    borderRadius="2xl"
                    w={{ base: "full", sm: "auto" }}
                    onClick={() =>
                      openWhatsApp(
                        "Salut! Sunt interesat de Clasa de Tehnică cu Harsan Florin. Aș dori mai multe detalii și programare.",
                      )
                    }
                  >
                    Rezervă cu Florin Harsan
                  </Button>

                  <Button
                    variant="outline"
                    borderColor="rgba(121,253,21,0.35)"
                    bg="whiteAlpha.50"
                    color="white"
                    size="lg"
                    borderRadius="2xl"
                    w={{ base: "full", sm: "auto" }}
                    onClick={() =>
                      openWhatsApp(
                        "Salut! Am întrebări despre Clasa de Tehnică cu Harsan Florin și vreau să aflu dacă mi se potrivește.",
                      )
                    }
                  >
                    Cere detalii
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </MotionBox>
        </VStack>
      </Container>

      {/* ================= FINAL CTA ================= */}
      <Box
        py={{ base: 14, md: 18 }}
        textAlign="center"
        color="black"
        bg={ACCENT}
      >
        <Container maxW="5xl">
          <VStack spacing={5}>
            <Heading
              fontFamily="Stint Ultra Expanded, serif"
              fontSize={{ base: "22px", md: "40px" }}
            >
              Performanța se construiește prin mentorat corect.
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontFamily="Pontano Sans, sans-serif"
            >
              Scrie-ne și stabilim evaluarea + cea mai bună opțiune pentru
              nivelul tău. Intră în standardul Fade Academy.
            </Text>

            <Button
              bg="black"
              color="white"
              size="lg"
              borderRadius="2xl"
              px={10}
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() =>
                openWhatsApp(
                  "Salut! Vreau să încep procesul pentru 1 la 1 (evaluare + recomandare pachet).",
                )
              }
            >
              Scrie-ne pe WhatsApp
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
