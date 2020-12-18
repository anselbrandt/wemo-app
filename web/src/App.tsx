import React from "react";
import { ColorBlocks } from "./ColorBlocks";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Grid } from "@chakra-ui/react";

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <ColorBlocks />
      </Grid>
    </Box>
  );
}

export default App;
