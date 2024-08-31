"use client";

import React from "react";
import { Grid, GridItem, Text, keyframes } from "@chakra-ui/react";

// Floating animation keyframes
const floating = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-1%); }
  100% { transform: translateY(0); }
`;

const Tryout: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Grid
        className="overflow-hidden"
        h="85vh"
        templateRows="repeat(5, 1fr)"
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
        >
          <Text
            className="font-stint-ultra-expanded text-3xl font-extrabold tracking-wider text-[#F9FBFB] text-center leading-loose"
            style={{
              textShadow:
                "1px 1px 0px #cccccc, 2px 2px 0px #b3b3b3, 3px 3px 0px #999999, 4px 4px 0px #808080, 5px 5px 0px #666666, 6px 6px 0px #4d4d4d, 7px 7px 0px #333333, 8px 8px 7px rgba(0, 0, 0, 0.7)",
            }}
          >
            P<br />
            R<br />
            E<br />
            T<br />
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
        >
          <Text className="font-pontano-sans text-lg text-left text-[#F9FBFB]">
            <Text as="span" className="font-bold text-xl">
              Rezervarea
            </Text>{" "}
            locului se achita initial:{" "}
            <Text as="span" className="font-bold text-xl block text-center">
              1000 RON
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
        >
          <Text className="font-pontano-sans text-lg text-right text-[#F9FBFB]">
            In{" "}
            <Text as="span" className="font-bold text-xl">
              prima zi
            </Text>{" "}
            a cursului, se achita <br />
            <Text as="span" className="font-bold text-xl block text-center">
              1500 RON
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
        >
          <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
            La{" "}
            <Text as="span" className="font-bold text-xl">
              jumatatea cursului
            </Text>{" "}
            -aproximativ 5 saptamani de la incepere- ultima transa de <br />
            <Text as="span" className="font-bold text-xl">
              2000 RON
            </Text>
            .
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
        >
          <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
            PRETUL TOTAL ESTE DE{" "}
            <Text as="span" className="font-bold text-3xl">
              4500 RON
            </Text>
          </Text>
        </GridItem>

        {/* Box 6 */}
        <GridItem
          colSpan={5}
          className="bg-gradient-to-t from-[#023d82] to-[#0461ab] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
            <Text
              as="span"
              className="font-bold text-lg font-stint-ultra-expanded"
            >
              10% DISCOUNT
            </Text>{" "}
            daca platesti integral.
            <br /> Pret total{" "}
            <Text as="span" className="font-bold text-xl">
              4050 lei
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
      </Grid>
    </div>
  );
};

export default Tryout;
