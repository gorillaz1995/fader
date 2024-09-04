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
  const showNotification = (message: string) => {
    const alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.padding = "20px";
    alertBox.style.background = "linear-gradient(to right, #0461ab, #023d82)";
    alertBox.style.color = "#F9FBFB";
    alertBox.style.borderRadius = "10px";
    alertBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    alertBox.style.zIndex = "1000";
    alertBox.style.display = "flex";
    alertBox.style.alignItems = "center";
    alertBox.style.gap = "10px";

    const iconElement = document.createElement("span");
    iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

    const textElement = document.createElement("span");
    textElement.textContent = message;

    alertBox.appendChild(iconElement);
    alertBox.appendChild(textElement);

    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.remove();
    }, 2000);
  };

  const handlePhoneClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    showNotification("Număr de telefon copiat în clipboard!");
  };

  const commonBoxStyles = {
    p: 3,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #fa6529",
    borderRadius: "2xl",
    position: "relative" as const,
    overflow: "hidden",
    height: "85%",
    _before: {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
      animation: `${shimmer} 4s infinite`,
    },
  };

  return (
    <Box className="overflow-hidden bg-[#cbdad4] py-7">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        className="w-full md:w-[68%] mx-auto"
        maxWidth="100%"
      >
        <GridItem>
          <Box
            className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            {...commonBoxStyles}
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              PRET
            </Text>
            <Text className="font-stint-ultra-expanded text-3xl font-bold text-[#F9FBFB]">
              {price} RON
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            className="bg-gradient-to-r from-[#023d82] to-[#0461ab] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            {...commonBoxStyles}
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              Ne gasesti aici:
            </Text>
            <Text
              className="font-stint-ultra-expanded text-lg font-bold text-[#F9FBFB] mb-1 cursor-pointer hover:bg-[#0461ab] transition-colors duration-300"
              border="2px solid #fa6529"
              borderRadius="md"
              px={2}
              py={1}
              onClick={handlePhoneClick}
              title="Click pentru a copia numărul de telefon"
            >
              {phoneNumber}
              <span className="block text-sm font-normal mt-1">
                (Apasă pentru a copia)
              </span>
            </Text>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                location
              )}`}
              isExternal
              className="font-pontano-sans text-md text-center text-[#F9FBFB] mb-1 hover:underline"
            >
              {location}
            </Link>
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
