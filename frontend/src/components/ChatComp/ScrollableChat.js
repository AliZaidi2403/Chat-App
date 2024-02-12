import ScrollableFeed from "react-scrollable-feed";
import { useChat } from "../../Context/ChatProvider";
function ScrollableChat({ messages }) {
  const { user } = useChat();
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#B9F5D0" : "#BEE3F8"
                }`,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                marginTop: `${
                  i > 0 && messages[i - 1].sender._id === m.sender._id
                    ? "3px"
                    : "10px"
                }`,
                marginLeft: `${
                  i > 0 && m.sender._id === user._id ? "auto" : ""
                }`,
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
}

export default ScrollableChat;
