"use client";

import React from "react";
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

const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
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
  return (
    <Box className="overflow-hidden bg-[#cbdad4] py-7">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        className="w-full md:w-[68%] mx-auto" // Reduced from 80% to 68% (15% smaller)
        maxWidth="100%"
      >
        {/* Price Box */}
        <GridItem>
          <Box
            className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={3} // Reduced padding
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
            height="85%" // Reduced height
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              animation: `${shimmer} 4s infinite`,
            }}
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              PRET
            </Text>
            <Text className="font-stint-ultra-expanded text-3xl font-bold text-[#F9FBFB]">
              {price} RON
            </Text>
          </Box>
        </GridItem>

        {/* Contact Box */}
        <GridItem>
          <Box
            className="bg-gradient-to-r from-[#023d82] to-[#0461ab] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={3} // Reduced padding
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
            height="85%" // Reduced height
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              animation: `${shimmer} 4s infinite`,
            }}
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              Ne gasesti aici:
            </Text>
            <Text className="font-stint-ultra-expanded text-lg font-bold text-[#F9FBFB] mb-1">
              {phoneNumber}
            </Text>
            <Text className="font-pontano-sans text-md text-center text-[#F9FBFB] mb-1">
              {location}
            </Text>
            <Link href={facebookLink} isExternal>
              <Icon as={FaFacebook} w={7} h={7} color="#F9FBFB" />
            </Link>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PriceContact;
