import React from 'react';
import { 
  Box,
  Container, 
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
 } from "@chakra-ui/react";
 import Login from "../components/Authentication/Login";
 import Signup from '../components/Authentication/Signup';

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
        textAlign="Center"
        fontSize="4xl"
        fontFamily="Work sans"
        color="black"
      >
        <Text>Dosthi-Chat</Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sing Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel> <Login/> </TabPanel>
            <TabPanel> <Signup/> </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;