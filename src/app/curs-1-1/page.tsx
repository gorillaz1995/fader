"use client";

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
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Script from "next/script";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const WHATSAPP_BASE = "https://wa.me/40723403403";

export default function AcademieOneToOnePage() {
  const openWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE}?text=${encoded}`, "_blank");
  };

  return (
    <Box bg="#ededed" color="black" overflow="hidden">
      {/* ================= HERO ================= */}
      <Box
        position="relative"
        minH="85vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Image
          src="images/ungureanu2026-5.jpg"
          alt="Fade Academy"
          position="absolute"
          w="100%"
          h="100%"
          objectFit="cover"
          filter="brightness(0.35)"
          style={{ objectPosition: "center 10%" }}
        />

        <Container maxW="4xl" position="relative" zIndex={2}>
          <VStack spacing={6} color="white">
            <Badge bg="#023d82" px={4} py={2}>
              Fade Academy – 15 ani educație în frizerie
            </Badge>

            <Heading size="2xl">Mentorat & Perfecționare 1 la 1</Heading>

            <Text fontSize="lg">
              Lucrează direct cu unii dintre cei mai apreciați educatori din
              România și accelerează-ți evoluția profesională.
            </Text>

            <Button
              size="lg"
              bg="#023d82"
              color="white"
              _hover={{ bg: "#012a5a" }}
              onClick={() =>
                openWhatsApp(
                  "Salut! Sunt interesat de cursurile 1 la 1 Fade Academy.",
                )
              }
            >
              Contactează pe WhatsApp
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* ================= DESPRE 1 LA 1 ================= */}
      <Container maxW="6xl" py={{ base: 16, md: 24 }}>
        <VStack spacing={10} textAlign="center">
          <Heading color="#023d82">De ce să alegi un curs 1 la 1?</Heading>

          <Text maxW="900px" fontSize="lg">
            Cursurile de grup sunt excelente pentru bază și inițiere. Însă dacă
            îți dorești perfecționare reală, corecție tehnică personalizată și
            progres accelerat, formatul 1 la 1 este nivelul următor.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box bg="white" p={8} borderRadius="2xl" boxShadow="xl">
              <Heading size="md" mb={4}>
                Atenție 100% dedicată
              </Heading>
              <Text>
                Fără timp împărțit între cursanți. Tot focusul este pe nivelul,
                stilul și obiectivele tale.
              </Text>
            </Box>

            <Box bg="white" p={8} borderRadius="2xl" boxShadow="xl">
              <Heading size="md" mb={4}>
                Feedback personalizat
              </Heading>
              <Text>
                Identificăm exact unde trebuie ajustată tehnica și optimizăm
                fiecare detaliu.
              </Text>
            </Box>

            <Box bg="white" p={8} borderRadius="2xl" boxShadow="xl">
              <Heading size="md" mb={4}>
                Direcție strategică
              </Heading>
              <Text>
                Primești claritate despre ce stil să aprofundezi și unde merită
                să investești timpul și resursele tale.
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>

      <Divider />

      {/* ================= CONSULTANTA ================= */}
      <Container maxW="6xl" py={{ base: 16, md: 24 }}>
        <Box
          bg="white"
          borderRadius="3xl"
          p={{ base: 8, md: 12 }}
          boxShadow="2xl"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            align="center"
          >
            <Image
              src="images/ungureanu2026-2.jpg"
              alt="Ciprian Ungureanu"
              borderRadius="2xl"
              w={{ base: "100%", md: "50%" }}
              objectFit="cover"
            />

            <VStack align="start" spacing={5}>
              <Badge bg="#023d82" color="white">
                Sesiune Strategică
              </Badge>

              <Heading>Mentorat 60 minute – Ciprian Ungureanu</Heading>

              <Text>
                O sesiune dedicată frizerilor care doresc claritate și validare
                profesională. Analizăm lucrările tale, stabilim direcția de
                specializare și identificăm următorul pas logic în evoluția ta.
              </Text>

              <List spacing={3}>
                <ListItem>
                  <Icon as={CheckCircleIcon} color="#023d82" mr={2} />
                  Analiză lucrări foto/video
                </ListItem>
                <ListItem>
                  <Icon as={CheckCircleIcon} color="#023d82" mr={2} />
                  Recomandare tip de curs potrivit
                </ListItem>
                <ListItem>
                  <Icon as={CheckCircleIcon} color="#023d82" mr={2} />
                  Direcție clară de dezvoltare
                </ListItem>
              </List>

              <Button
                bg="#023d82"
                color="white"
                size="lg"
                _hover={{ bg: "#012a5a" }}
                onClick={() =>
                  openWhatsApp(
                    "Salut! Doresc programare pentru Sesiunea Strategică cu Ciprian Ungureanu.",
                  )
                }
              >
                Programează prin WhatsApp
              </Button>
            </VStack>
          </Stack>

          <Box mt={16} minH="700px">
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

      <Divider />

      {/* ================= TIERS ================= */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <VStack spacing={16}>
          {/* PREMIUM */}
          <MotionBox
            bg="white"
            borderRadius="3xl"
            boxShadow="2xl"
            overflow="hidden"
          >
            <Stack direction={{ base: "column", md: "row" }}>
              <Image
                src="images/ungureanu2026-1.jpg"
                alt="Ciprian Ungureanu Premium"
                w={{ base: "100%", md: "50%" }}
                objectFit="cover"
              />

              <VStack p={12} align="start" spacing={6}>
                <Badge bg="#023d82" color="white">
                  PREMIUM LEVEL
                </Badge>

                <Heading size="xl">Ciprian Ungureanu</Heading>

                <Text fontSize="2xl" fontWeight="bold" color="#023d82">
                  2500 RON
                </Text>

                <Text>
                  Perfecționare avansată la standard competițional. Tehnică de
                  precizie, structură, proporții și mentalitate profesională la
                  cel mai înalt nivel.
                </Text>

                <Button
                  bg="#023d82"
                  color="white"
                  size="lg"
                  _hover={{ bg: "#012a5a" }}
                  onClick={() =>
                    openWhatsApp(
                      "Salut! Doresc rezervare pentru curs Premium 1 la 1 cu Ciprian Ungureanu.",
                    )
                  }
                >
                  Rezervă Premium
                </Button>
              </VStack>
            </Stack>
          </MotionBox>

          {/* INTERMEDIAR */}
          <MotionBox
            bg="white"
            borderRadius="3xl"
            boxShadow="xl"
            overflow="hidden"
          >
            <Stack direction={{ base: "column", md: "row-reverse" }}>
              <Image
                src="/stupari.jpg"
                alt="Curs Intermediar"
                w={{ base: "100%", md: "50%" }}
                objectFit="cover"
              />

              <VStack p={12} align="start" spacing={6}>
                <Badge bg="gray.700" color="white">
                  INTERMEDIAR
                </Badge>

                <Heading size="xl">Robert Micu & Alberto Sârbu</Heading>

                <HStack>
                  <Image
                    src="/micu-rob.jpg"
                    alt="Robert Micu"
                    boxSize="60px"
                    borderRadius="full"
                  />
                  <Image
                    src="/alberto-frizer.jpg"
                    alt="Alberto Sârbu"
                    boxSize="60px"
                    borderRadius="full"
                  />
                </HStack>

                <Text fontSize="2xl" fontWeight="bold" color="#023d82">
                  1500 RON
                </Text>

                <Text>
                  Tehnici moderne de fade, control, simetrie și eficientizare a
                  timpului de lucru pentru frizerii care doresc următorul nivel.
                </Text>

                <Button
                  bg="#023d82"
                  color="white"
                  size="lg"
                  _hover={{ bg: "#012a5a" }}
                  onClick={() =>
                    openWhatsApp(
                      "Salut! Doresc rezervare pentru curs Intermediar cu Robert Micu & Alberto Sârbu.",
                    )
                  }
                >
                  Rezervă Intermediar
                </Button>
              </VStack>
            </Stack>
          </MotionBox>

          {/* MEDIU */}
          <MotionBox bg="white" borderRadius="3xl" boxShadow="xl" p={12}>
            <VStack spacing={6} textAlign="center">
              <Badge bg="gray.500" color="white">
                MEDIU
              </Badge>

              <Heading size="xl">Florin Hârșan</Heading>

              <Text fontSize="2xl" fontWeight="bold" color="#023d82">
                În curând
              </Text>

              <Text>
                Consolidarea bazei tehnice și creșterea siguranței în execuție
                pentru frizerii aflați în dezvoltare.
              </Text>

              <Button
                bg="#023d82"
                color="white"
                size="lg"
                _hover={{ bg: "#012a5a" }}
                onClick={() =>
                  openWhatsApp(
                    "Salut! Doresc informații despre cursul cu Florin Hârșan.",
                  )
                }
              >
                Solicită Detalii
              </Button>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>

      {/* ================= FINAL CTA ================= */}
      <Box bg="#023d82" py={20} textAlign="center" color="white">
        <Container maxW="4xl">
          <VStack spacing={6}>
            <Heading>Performanța se construiește prin mentorat corect</Heading>

            <Text fontSize="lg">
              Investește în tine și lucrează direct cu profesioniști care au
              demonstrat excelență în industrie.
            </Text>

            <Button
              bg="white"
              color="#023d82"
              size="lg"
              _hover={{ bg: "#f0f0f0" }}
              onClick={() =>
                openWhatsApp(
                  "Salut! Doresc mai multe informații despre mentoratul 1 la 1.",
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
