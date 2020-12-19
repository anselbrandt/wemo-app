import React, { useState, useEffect } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Flex, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ControlPanel } from "./ControlPanel";

interface Props {}

export const Main: React.FC<Props> = () => {
  const [deviceState, setDeviceState] = useState<any[]>([]);

  const handleClick = (device: any) => {
    setDeviceState((prev) =>
      prev.map((entry) => {
        if (entry.name === device.name) {
          return {
            name: entry.name,
            endpoint: entry.endpoint,
            state: !entry.state,
          };
        } else {
          return entry;
        }
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("http://localhost:4000/api");
      // const json = await response.json();
      const json: any[] = [
        { name: "Nightlight", endpoint: "/api/nightlight", state: 0 },
        { name: "Dresser", endpoint: "/api/dresser", state: 0 },
        { name: "Piano", endpoint: "/api/piano", state: 1 },
        { name: "Living", endpoint: "/api/living", state: 0 },
        { name: "Corner", endpoint: "/api/corner", state: 0 },
        { name: "Kitchen", endpoint: "/api/kitchen", state: 0 },
      ];
      setDeviceState(json);
    };
    fetchData();
  }, []);

  return (
    <Box fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          h="100vh"
          maxH="60rem"
        >
          <ControlPanel devices={deviceState} handleClick={handleClick} />
          <ChakraLink as={Link} to="/about" color="nebula" mt={10}>
            about
          </ChakraLink>
        </Flex>
      </Grid>
    </Box>
  );
};
