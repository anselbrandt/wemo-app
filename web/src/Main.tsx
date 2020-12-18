import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Flex, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ControlPanel } from "./ControlPanel";

const devices = [
  { name: "Kitchen", endpoint: "/api/kitchen" },
  { name: "Piano", endpoint: "/api/piano" },
  { name: "Dresser", endpoint: "/api/dresser" },
  { name: "Living", endpoint: "/api/living" },
  { name: "Corner", endpoint: "/api/corner" },
  { name: "Nightlight", endpoint: "/api/nightlight" },
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
          mt={10}
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
