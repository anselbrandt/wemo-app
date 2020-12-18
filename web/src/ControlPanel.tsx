import React from "react";
import { Flex, Grid, Button } from "@chakra-ui/react";

interface Props {
  devices: any[];
}

export const ControlPanel: React.FC<Props> = ({ devices }) => {
  return (
    <Flex width="20rem" justifyContent="center">
      <Grid templateColumns="1fr 1fr" gap={4}>
        {devices.map((device) => (
          <Button size="lg" h="8rem">
            {device.name}
          </Button>
        ))}
      </Grid>
    </Flex>
  );
};
