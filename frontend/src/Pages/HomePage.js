import {
  Box,
  Container,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { useEffect } from "react";
function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chats");
    }
  }, [navigate]);
  return (
    <Container centerContent maxW="xl">
      <Box
        display="flex"
        justifyContent={"center"}
        bg=" #40e0d0"
        p="3"
        width="100%"
        m="40px 0 15px 0"
        borderRadius="xl"
        borderWidth="2px"
      >
        <Text
          fontSize="4xl"
          fontWeight="800"
          fontFamily="Work sans"
          color={"white"}
        >
          CHAT-BIZZ
        </Text>
      </Box>
      <Box bg="#40e0d0" width="100%" p="4" borderRadius="xl" borderWidth="2px">
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
