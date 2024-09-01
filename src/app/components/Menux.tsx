"use client";

import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

const StyledMenuList = styled(MenuList)`
  background: linear-gradient(145deg, #005cb2, #00407d);
  border-color: #00509d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    inset 0 -1px 1px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  min-width: 220px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  background: rgba(0, 80, 157, 0.6);
  color: white;
  font-size: 1.2rem;
  font-family: "Familjen Grotesk", sans-serif;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(0, 96, 189, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
      inset 0 1px 1px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const MotionMenuList = motion(StyledMenuList);

const Menux: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box position="fixed" top={4} right={6} zIndex={1000}>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon boxSize={24} />}
              variant="solid"
              bg="linear-gradient(145deg, #0461ab, #023d82)"
              color="white"
              size="lg"
              borderRadius="30%"
              _active={{ bg: "linear-gradient(145deg, #035694, #023168)" }}
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            />
            <AnimatePresence mode="wait">
              {isOpen && (
                <MotionMenuList
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <StyledMenuItem onClick={() => handleNavigation("/")}>
                    <Text
                      textAlign="center"
                      className="font-stint-ultra-expanded"
                    >
                      FADE ACADEMY
                    </Text>
                  </StyledMenuItem>
                  <StyledMenuItem
                    onClick={() => handleNavigation("/academie-1")}
                  >
                    <Text
                      textAlign="center"
                      className="font-stint-ultra-expanded"
                    >
                      Academie 1
                    </Text>
                  </StyledMenuItem>
                  <StyledMenuItem
                    onClick={() => handleNavigation("/academie-2")}
                  >
                    <Text
                      textAlign="center"
                      className="font-stint-ultra-expanded"
                    >
                      Academie 2
                    </Text>
                  </StyledMenuItem>
                  <StyledMenuItem
                    onClick={() => handleNavigation("/academie-3")}
                  >
                    <Text
                      textAlign="center"
                      className="font-stint-ultra-expanded"
                    >
                      Academie 3
                    </Text>
                  </StyledMenuItem>
                  <StyledMenuItem
                    onClick={() => handleNavigation("/academie-4")}
                  >
                    <Text
                      textAlign="center"
                      className="font-stint-ultra-expanded"
                    >
                      Academie 4
                    </Text>
                  </StyledMenuItem>
                </MotionMenuList>
              )}
            </AnimatePresence>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default Menux;
