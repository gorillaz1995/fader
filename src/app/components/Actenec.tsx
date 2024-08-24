"use client";

import React from "react";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { HiOutlineDocumentText } from "react-icons/hi";

const Actenec: React.FC = () => {
  return (
    <Box className="px-6 py-12">
      {/* Title */}
      <Heading
        as="h2"
        size="xl"
        className="font-stint-ultra-expanded text-[#023d82] text-center mb-6"
      >
        ACTE NECESARE INSCRIERE CURS FRIZERIE
      </Heading>

      {/* List of Required Documents */}
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
          Adeverinta Medicala cu mentiunea: “Apt pentru curs”
        </ListItem>
      </List>
    </Box>
  );
};

export default Actenec;
