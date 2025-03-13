"use client";

import React from "react";
import { Grid, GridItem, Text, keyframes, Box, Button } from "@chakra-ui/react";

// Floating animation keyframes
const floating = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  10% { transform: translateY(-2%) rotate(1deg); }
  20% { transform: translateY(-4%) rotate(-1deg); }
  30% { transform: translateY(-6%) rotate(1deg); }
  40% { transform: translateY(-8%) rotate(-1deg); }
  50% { transform: translateY(-10%) rotate(1deg); }
  60% { transform: translateY(-8%) rotate(-1deg); }
  70% { transform: translateY(-6%) rotate(1deg); }
  80% { transform: translateY(-4%) rotate(-1deg); }
  90% { transform: translateY(-2%) rotate(1deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const Tryout: React.FC = () => {
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

  const handleCallClick = () => {
    window.location.href = "tel:+40723403403";
  };

  return (
    <Box className="overflow-hidden bg-[#cbdad4] py-7">
      <Box className="w-full lg:w-[60%] mx-auto" maxWidth="100%">
        <Grid
          className="overflow-hidden"
          templateRows="repeat(6, auto)"
          templateColumns="repeat(5, 1fr)"
          gap={3}
          p={4}
        >
          {/* Large Item with Vertical Text and Floating Animation */}
          <GridItem
            rowSpan={2}
            colSpan={1}
            className="bg-gradient-to-r from-[#4181DD] to-[#5CA9E6] rounded-2xl shadow-2xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation={`${floating} 3s ease-in-out infinite`}
            border="1px solid #fa6529"
          >
            <Text
              className="font-stint-ultra-expanded text-xl font-extrabold tracking-wider text-[#F9FBFB] text-center leading-loose"
              style={{
                textShadow:
                  "1px 1px 0px #cccccc, 2px 2px 0px #b3b3b3, 3px 3px 0px #999999, 4px 4px 0px #808080, 5px 5px 0px #666666, 6px 6px 0px #4d4d4d, 7px 7px 0px #333333, 8px 8px 7px rgba(0, 0, 0, 0.7)",
              }}
            >
              P<br />
              R<br />
              E<br />
              T<br />
              U<br />
              R<br />
              I<br />
            </Text>
          </GridItem>

          {/* Box 2 */}
          <GridItem
            colSpan={2}
            className="bg-gradient-to-r from-[#023d82] to-[#0461ab] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
          >
            <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
              <Text as="span" className="font-bold text-xl">
                Curs frizerie incepatori
              </Text>{" "}
              CIPRIAN UNGUREANU{" "}
              <Text as="span" className="font-bold text-xl block text-center">
                5000 RON
              </Text>
            </Text>
          </GridItem>

          {/* Box 3 */}
          <GridItem
            colSpan={2}
            className="bg-gradient-to-l from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
          >
            <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
              <Text as="span" className="font-bold text-xl">
                Curs frizerie incepatori
              </Text>{" "}
              ROBERT MICU{" "}
              <Text as="span" className="font-bold text-xl block text-center">
                2500 RON
              </Text>
            </Text>
          </GridItem>

          {/* Box 4 */}
          <GridItem
            colSpan={4}
            className="bg-gradient-to-r from-[#023d82] to-[#0461ab] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
          >
            <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
              <Text as="span" className="font-bold text-xl">
                REZERVARE LOC CURS
              </Text>
              <br />
              <Text as="span" className="text-xl">
                Ciprian Ungureanu - 1000 RON
              </Text>{" "}
              <br />
              <Text as="span" className="text-md">
                Robert Micu - 800 RON
              </Text>
              <br />
              <Text as="span" className="text-md">
                <Text as="span" className="font-bold text-xl">
                  Se poate achita in 3 rate.
                </Text>
              </Text>
              <br />
              <Text as="span" className="text-md">
                <Text as="span" className=" text-lg">
                  1.Rezervare loc <br /> 2.Inceputul cursului <br /> 3.Jumatatea
                  cursului
                </Text>
              </Text>
            </Text>
          </GridItem>

          {/* Box 5 */}
          <GridItem
            colSpan={5}
            className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
          >
            <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
              Profita de{" "}
              <Text as="span" className="font-bold text-xl">
                10%{" "}
              </Text>
              <Text as="span" className=" text-xl">
                reducere pentru plata integrala a cursului frizerie incepatori.
              </Text>
            </Text>
          </GridItem>

          {/* Box 7 */}
          <GridItem
            colSpan={5}
            className="bg-gradient-to-b from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
          >
            <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
              Cu doua saptamani inainte de inceperea cursului, nu se mai
              returneaza avansul, in conditiile in care cursantii se razgandesc,
              pentru ca se depun documentele la{" "}
              <Text as="span" className="font-bold text-xl">
                registratura A.N.C.
              </Text>
              .
            </Text>
          </GridItem>

          {/* Box 8 */}
          <GridItem
            colSpan={5}
            className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            p={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="1px solid #fa6529"
          >
            <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB] mb-2">
              CONT BANCAR PENTRU REZERVARI
            </Text>
            <Text
              className="font-pontano-sans text-xl font-bold text-center text-[#F9FBFB] mb-2 cursor-pointer hover:bg-[#0461ab] transition-colors duration-300"
              border="2px solid #fa6529"
              borderRadius="md"
              px={2}
              py={1}
              onClick={() => {
                navigator.clipboard.writeText("RO63RNCB0094001976240003");
                showNotification("IBAN copiat în clipboard!");
              }}
              title="Click pentru a copia IBAN-ul"
            >
              RO63RNCB0094001976240003
              <span className="block text-sm font-normal mt-1">
                (Apasă pentru a copia)
              </span>
            </Text>
            <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
              Titular Cont - Ciprian Ungureanu
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tryout;
