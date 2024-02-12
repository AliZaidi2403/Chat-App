import { useChat } from "./../../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";
function ChatBox({ fetchAgain, setFetchAgain }) {
  const { selectedChat } = useChat();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p="3"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      width={{ base: "100%", md: "68%" }}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
}

export default ChatBox;
