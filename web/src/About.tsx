import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Readme } from "./Readme";

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Box p={3}>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Readme />
        <ChakraLink as={Link} to="/" mb={20} fontSize="xl">
          home
        </ChakraLink>
      </Flex>
    </Box>
  );
};
