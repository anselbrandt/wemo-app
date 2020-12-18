import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        About
        <ChakraLink as={Link} to="/">
          home
        </ChakraLink>
      </Grid>
    </Box>
  );
};
