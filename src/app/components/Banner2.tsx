"use client";

import React from "react";
import Image from "next/image";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const Banner2: React.FC = () => {
  const bannerHeight = useBreakpointValue({ base: "17vh", lg: "42vh" });

  return (
    <Box
      position="relative"
      width="100%"
      height={bannerHeight}
      overflow="hidden"
    >
      <Image
        src="/images/f2.webp"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
      />
    </Box>
  );
};

export default Banner2;