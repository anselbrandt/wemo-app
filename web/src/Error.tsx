import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Grid } from "@chakra-ui/react";

interface Props {}

export const Error: React.FC<Props> = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        404
      </Grid>
    </Box>
  );
};
