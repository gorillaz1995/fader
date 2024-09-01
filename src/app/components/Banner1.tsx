"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const Banner1: React.FC = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "20vh", lg: "70vh" }}
      minHeight={{ base: "200px", lg: "250px" }}
    >
      <Image
        src="/images/F.webp"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </Box>
  );
};

export default Banner1;
