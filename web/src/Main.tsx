import React, { useState, useEffect } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Flex, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ControlPanel } from "./ControlPanel";
import { Test } from "./Test";

interface Props {}

export const Main: React.FC<Props> = () => {
  const [deviceState, setDeviceState] = useState<any[]>([]);

  const handleSetDeviceState = (address: string, state: string) => {
    fetch(`http://mini.local:4000${address}/${state}`);
  };

  const handleClick = (device: any) => {
    setDeviceState((prev) =>
      prev.map((entry) => {
        if (entry.name === device.name) {
          if (entry.state) {
            handleSetDeviceState(entry.endpoint, "off");
          } else {
            handleSetDeviceState(entry.endpoint, "on");
          }
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
      const response = await fetch("http://mini.local:4000/api");
      const json = await response.json();
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
          <Test />
          <ControlPanel devices={deviceState} handleClick={handleClick} />
          <ChakraLink as={Link} to="/about" color="nebula" mt={10}>
            about
          </ChakraLink>
        </Flex>
      </Grid>
    </Box>
  );
};
