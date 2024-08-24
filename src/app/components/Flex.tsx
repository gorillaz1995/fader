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
import { HiOutlineDocumentText } from "react-icons/hi"; // Importing the icon

import faderImage from "@/images/foarfeci7.webp";

const Flex: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="35vh"
    >
      <Card
        maxW="sm"
        w="150%"
        h="150%"
        backgroundImage={`url(${faderImage.src})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="150px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={6}
      >
        <CardBody display="flex" justifyContent="center" alignItems="center">
          <Stack textAlign="center" color="white">
            <Heading size="lg" className="font-stint-ultra-expanded">
              CURS FRIZERIE INCEPATORI <br />
              <br />
            </Heading>
          </Stack>
        </CardBody>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={{ base: "xs", md: "md" }}
        >
          <DrawerOverlay />
          <DrawerContent maxW={{ base: "75%", md: "md" }}>
            <DrawerCloseButton />
            <DrawerHeader>Detalii curs</DrawerHeader>
            <DrawerBody>
              <List spacing={3} className="font-pontano-sans text-[#000000]">
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Tunsori barbati personalizate
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Tunsori personalizate după fizionomia feței și forma capului
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Tehnici de tuns: Treptele, graduarea, linia etc.
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Samponat, spalat si masaj
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Imagine & Brand Masaj facial și capilar
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Tunsori barbati clasice
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Tunsori clasice din foarfeca și pieptăn
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Tuns din foarfeca si masina
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Clipper over comb technique
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Rasul și bărbile briciul
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Styling și tehnici de feonat
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineDocumentText} color="#023d82" />
                  Consultatie si abordare client
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

        <Button
          colorScheme="blue"
          onClick={onOpen}
          ref={btnRef}
          my={40}
          className="font-stint-ultra-expanded"
        >
          Detalii curs
        </Button>
      </Card>
    </Box>
  );
};

export default Flex;
