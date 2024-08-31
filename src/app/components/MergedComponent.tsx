"use client";

import React, { useRef } from "react";
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
import faderImage from "@/images/foarfeci7.webp";

const MergedComponents: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

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
            className="font-stint-ultra-expanded mt-6"
            borderRadius="full"
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
              Copie certificat casatorie (doar in cazul schimbarii numelui)
            </ListItem>
            <ListItem>
              <ListIcon as={HiOutlineDocumentText} color="#023d82" />
              Copie dupa ultimul act de studii
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="font-stint-ultra-expanded text-[#023d82]">
            TEME ABORDATE
          </DrawerHeader>
          <DrawerBody>
            <List spacing={3} className="font-pontano-sans text-[#000000]">
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Tunsori barbati personalizate
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Tunsori personalizate după fizionomia feței și forma capului
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Tehnici de tuns:<br></br> Treptele - Graduarea - Linia - etc.
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Tunsori barbati clasice
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Tuns:<br></br> - foarfeca și pieptan <br></br> - foarfeca si
                masina de tuns
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Masina de tuns:<br></br> - Clipper over comb techniques
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Par facial / barba - barbierit cu brici - styling barba
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Samponat - Spalat - Masaj
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Masaj: -facial - capilar
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Styling - Special techniques
              </ListItem>
              <ListItem>
                <ListIcon as={MdOutlineEmojiPeople} color="#023d82" />
                Consultatie si abordare client
              </ListItem>
              <ListItem>
                <ListIcon as={IoShareSocialOutline} color="#023d82" />
                Brand & Imagine:<br></br>
                -Dezvoltarea prezentei in mediul online<br></br>
                -Identificarea valorilor cheie pentru brand-ul tau<br></br>
                -Tehnologii folosite in industrie
              </ListItem>
              <ListItem>
                <ListIcon as={TbZoomQuestion} color="#023d82" />
                Identificarea uneltelor necesare pentru a oferi orice tip de
                tunsoare si ethicheta la salon.
              </ListItem>
            </List>

            <Heading
              as="h3"
              size="md"
              mt={8}
              mb={4}
              className="font-stint-ultra-expanded text-[#023d82]"
            >
              PROGRAM CURS FRIZERIE:
            </Heading>
            <List spacing={3} className="font-pontano-sans text-[#000000]">
              <ListItem>Cuprinde TEORIE & PRACTICA:</ListItem>
              <ListItem>
                <ListIcon as={GiTeacher} color="#023d82" />
                Teorie – 6 ore / saptamana<br></br> marti 12:00–18:00
              </ListItem>
              <ListItem>
                <ListIcon as={PiScissors} color="#023d82" />
                Practica – 6 ore / saptamana<br></br> marti, miercuri, joi
                18:00-20:00
              </ListItem>
              <ListItem>
                <ListIcon as={MdOutlineNotificationImportant} color="#023d82" />
                Programul poate depasi numarul de ore pentru practica
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Inchide
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MergedComponents;
