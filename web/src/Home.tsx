import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        Home
        <ChakraLink as={Link} to="/about" color="nebula">
          about
        </ChakraLink>
      </Grid>
    </Box>
  );
};
