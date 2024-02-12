import axios from "axios";
import { useEffect, useState } from "react";
import { useChat } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/ChatComp/SideDrawer";
import ChatBox from "../components/ChatComp/ChatBox";
import MyChats from "./../components/ChatComp/MyChats";
function ChatPage() {
  const { user } = useChat();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="90vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
}

export default ChatPage;
