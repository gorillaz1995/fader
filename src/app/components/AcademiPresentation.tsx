"use client";

import React, { useEffect, useRef } from "react";
import { Grid, GridItem, Text, Box, Image, keyframes } from "@chakra-ui/react";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

interface FadeAcademySectionProps {
  imageSrc: string;
  formatorName: string;
  locationName: string;
  description: string;
}

const FadeAcademySection: React.FC<FadeAcademySectionProps> = ({
  imageSrc,
  formatorName,
  locationName,
  description,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <Box className="overflow-hidden bg-[#cbdad4] py-7">
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={6}
        className="w-full lg:w-[80%] mx-auto"
        maxWidth="100%"
      >
        {/* Image */}
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Box
            className="lg:w-3/4 lg:mx-auto overflow-hidden"
            animation={`${float} 3s ease-in-out infinite`}
          >
            <Image
              ref={imageRef}
              src={imageSrc}
              alt={`Fade ${locationName}`}
              width="100%"
              height="auto"
              objectFit="cover"
              borderRadius="2xl"
            />
          </Box>
        </GridItem>

        {/* Grid Item */}
        <GridItem colSpan={1} order={{ base: 2, lg: 1 }}>
          <Grid templateRows="repeat(2, auto)" gap={3} height="100%">
            <GridItem
              className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #fa6529"
              maxWidth={{ base: "100%", lg: "50%" }}
              mx={{ lg: "auto" }}
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
            >
              <Text className="font-pontano-sans text-lg text-center text-[#F9FBFB]">
                <Text
                  as="span"
                  className="font-bold text-xl font-stint-ultra-expanded"
                >
                  {formatorName}
                </Text>
                <br />
                <Text as="span" className="text-md font-pontano-sans">
                  Formator Fade Academy {locationName}
                </Text>
              </Text>
            </GridItem>

            <GridItem>
              <Text className="font-pontano-sans text-md text-center text-gray-700 font-semibold">
                {description}
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FadeAcademySection;
