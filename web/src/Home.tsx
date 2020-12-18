import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Grid } from "@chakra-ui/react";

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        Home
      </Grid>
    </Box>
  );
};
