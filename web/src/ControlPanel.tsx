import React from "react";
import { Flex, Grid, Button } from "@chakra-ui/react";

interface Props {
  devices: any[];
  handleClick: (device: any) => void;
}

export const ControlPanel: React.FC<Props> = ({ devices, handleClick }) => {
  return (
    <Flex width="20rem" justifyContent="center">
      <Grid templateColumns="1fr 1fr" gap={4}>
        {devices.map((device) => (
          <Button
            key={device.name}
            onClick={() => handleClick(device)}
            size="lg"
            h="8rem"
            colorScheme="nebula"
            variant={device.state ? "solid" : "outline"}
          >
            {device.name}
          </Button>
        ))}
      </Grid>
    </Flex>
  );
};
