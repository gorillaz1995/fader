"use client";

import React, { useRef, useEffect } from "react";
import {
  Card,
  CardBody,
  Heading,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { PiScissors } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  MdOutlineEmojiPeople,
  MdOutlineNotificationImportant,
} from "react-icons/md";
import { TbZoomQuestion } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import faderImage from "@/images/foarfeci7.webp";
import { FaToolbox, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@chakra-ui/react";

const MergedComponents: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { gsap } = require("gsap");
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (listRef.current) {
        const listItems = listRef.current.children;

        gsap.fromTo(
          listItems,
          { autoAlpha: 0, x: (index: number) => (index % 2 === 0 ? -50 : 50) },
          {
            duration: 2.5,
            autoAlpha: 1,
            x: 0,
            ease: "power2.out",
            stagger: 0.25,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Box className="flex-1 flex justify-center items-center p-6">
        <Card
          maxW="sm"
          w="100%"
          aspectRatio={0.55}
          backgroundImage={`url(${faderImage.src})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="150px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={6}
        >
          <CardBody
            display="flex"
            flexDirection="column"
            justifyContent="top"
            alignItems="center"
          >
            <Stack textAlign="center" color="white">
              <Heading size="lg" className="font-stint-ultra-expanded">
                CURS FRIZERIE INCEPATORI <br />
                <br />
              </Heading>
            </Stack>
          </CardBody>
          <Button
            colorScheme="blue"
            onClick={onOpen}
            ref={btnRef}
            className="font-stint-ultra-expanded mt-6 relative overflow-hidden"
            borderRadius="full"
            sx={{
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
                animation: "shimmer 3s infinite",
              },
              "@keyframes shimmer": {
                "0%": { left: "-100%" },
                "100%": { left: "100%" },
              },
            }}
          >
            Detalii curs
          </Button>
        </Card>
      </Box>

      <Box className="flex-1 flex justify-center items-center p-6">
        <div>
          <Heading
            as="h2"
            size="xl"
            className="font-stint-ultra-expanded text-[#023d82] text-center mb-6"
          >
            ACTE NECESARE INSCRIERE CURS FRIZERIE
          </Heading>

          <List
            ref={listRef}
            spacing={3}
            className="font-pontano-sans text-2xl text-[#000000] text-center"
          >
            <ListItem>
              <ListIcon as={HiOutlineDocumentText} color="#023d82" />
              Copie certificat nastere
            </ListItem>
            <ListItem>
              <ListIcon as={HiOutlineDocumentText} color="#023d82" />
              Copie carte identitate
            </ListItem>
            <ListItem>
              <ListIcon as={HiOutlineDocumentText} color="#023d82" />
              Copie certificat casatorie
              <br />
              <span className="text-lg">Doar in cazul schimbarii numelui</span>
            </ListItem>
            <ListItem>
              <ListIcon as={HiOutlineDocumentText} color="#023d82" />
              Copie dupa ultimul act de studii
              <br />
              <span className="text-lg">
                Minim diploma 8 clase
                <br />
                In cazul in care cursantul a studiat in afara tarii, diploma
                trebuie echivalata si apostilata Haga
              </span>
            </ListItem>
            <ListItem>
              <ListIcon as={HiOutlineDocumentText} color="#023d82" />
              Adeverinta Medicala cu mentiunea: Apt pentru curs
            </ListItem>
          </List>
        </div>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "xs", md: "xl" }}
      >
        <DrawerOverlay />
        <DrawerContent bg="linear-gradient(135deg, #023d82, #0461ab, #0277bd)">
          <DrawerCloseButton color="#ededed" />
          <DrawerHeader className="font-stint-ultra-expanded text-[#ededed]">
            TEME ABORDATE
          </DrawerHeader>
          <DrawerBody>
            <List spacing={3} className="font-pontano-sans text-[#ededed]">
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Tunsori barbati personalizate
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Tunsori personalizate după fizionomia feței și forma capului
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Tehnici de tuns:<br></br> Treptele - Graduarea - Linia - etc.
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Tunsori barbati clasice
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Tuns:<br></br> - foarfeca și pieptan <br></br> - foarfeca si
                masina de tuns
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Masina de tuns:<br></br> - Clipper over comb techniques
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Par facial / barba - barbierit cu brici - styling barba
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Samponat - Spalat - Masaj
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Masaj: -facial - capilar
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Styling - Special techniques
              </ListItem>
              <ListItem>
                <ListIcon as={MdOutlineEmojiPeople} color="#ededed" />
                Consultatie si abordare client
              </ListItem>
              <ListItem>
                <ListIcon as={IoShareSocialOutline} color="#ededed" />
                Brand & Imagine:<br></br>
                -Dezvoltarea prezentei in mediul online<br></br>
                -Identificarea valorilor cheie pentru brand-ul tau<br></br>
                -Tehnologii folosite in industrie
              </ListItem>
              <ListItem>
                <ListIcon as={TbZoomQuestion} color="#ededed" />
                Identificarea uneltelor necesare pentru a oferi orice tip de
                tunsoare si ethicheta la salon.
              </ListItem>
            </List>

            <Heading
              as="h3"
              size="md"
              mt={8}
              mb={4}
              className="font-stint-ultra-expanded text-[#ededed]"
            >
              PROGRAM CURS FRIZERIE:
            </Heading>
            <List spacing={3} className="font-pontano-sans text-[#ededed]">
              <ListItem>Cuprinde TEORIE & PRACTICA:</ListItem>
              <ListItem>
                <ListIcon as={GiTeacher} color="#ededed" />
                Teorie – 6 ore / saptamana<br></br> marti 12:00–18:00
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#ededed" />
                Practica – 6 ore / saptamana<br></br> marti, miercuri, joi
                18:00-20:00
              </ListItem>
              <ListItem>
                <ListIcon as={MdOutlineNotificationImportant} color="#ededed" />
                Programul poate depasi numarul de ore pentru practica
              </ListItem>
              <ListItem>
                <ListIcon as={FaToolbox} color="#ededed" />
                Cursantul trebuie sa aiba unstensile personale, se pot procura
                de pe site-ul colaboratorilor nostri unde avem reduceri
                speciale, aici{" "}
                <Link
                  href="http://barber-store.ro/?affiliate=asociatia-frizer-art"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaExternalLinkAlt} mx="2px" />
                </Link>
              </ListItem>
            </List>

            <Heading
              as="h3"
              size="md"
              mt={8}
              mb={4}
              className="font-stint-ultra-expanded text-[#ededed]"
            >
              Curs Frizerie - Recunoscut National / International
            </Heading>
            <List spacing={3} className="font-pontano-sans text-[#ededed]">
              <ListItem>
                <ListIcon as={FaGraduationCap} color="#ededed" />
                Acest curs este autorizat de Ministerul Muncii si Ministerul
                Educatiei, la final fiind oferit un certificat de absolvire al
                cursului de frizerie incepatori.
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="solid"
              mr={3}
              onClick={onClose}
              color="#ededed"
              bg="#023d82"
              borderRadius="full"
              fontWeight="bold"
              px={6}
              py={3}
              _hover={{
                bg: "#0461ab",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              _active={{
                bg: "#012c5e",
                transform: "translateY(1px)",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              transition="all 0.2s"
            >
              Inchide
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MergedComponents;
