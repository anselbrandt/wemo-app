import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Flex, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Markdown } from "./Markdown";

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Markdown />
          <ChakraLink as={Link} to="/">
            home
          </ChakraLink>
        </Flex>
      </Grid>
    </Box>
  );
};
