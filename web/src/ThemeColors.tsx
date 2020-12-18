import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Grid } from "@chakra-ui/react";
import { ColorBlocks } from "./ColorBlocks";

interface Props {}

export const ThemeColors: React.FC<Props> = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <ColorBlocks />
      </Grid>
    </Box>
  );
};
