import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Flex, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ControlPanel } from "./ControlPanel";

const devices = [
  { name: "Kitchen", endpoint: "/api/kitchen", state: 0 },
  { name: "Piano", endpoint: "/api/piano", state: 0 },
  { name: "Dresser", endpoint: "/api/dresser", state: 1 },
  { name: "Living", endpoint: "/api/living", state: 0 },
  { name: "Corner", endpoint: "/api/corner", state: 0 },
  { name: "Nightlight", endpoint: "/api/nightlight", state: 0 },
];

interface Props {}

export const Main: React.FC<Props> = () => {
  return (
    <Box fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          h="100vh"
          maxH="60rem"
        >
          <ControlPanel devices={devices} />
          <ChakraLink as={Link} to="/about" color="nebula" mt={10}>
            about
          </ChakraLink>
        </Flex>
      </Grid>
    </Box>
  );
};
