import remarkGfm from "remark-gfm";
import ChatBubble from "./ChatBubble";
import Markdown from "react-markdown";
import usePortfolioStore from "src/store";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const ChatMessage = ({ section, isLast }) => {
  const { streamedContent } = usePortfolioStore();
  const content = streamedContent[section.id] || {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        p: 2,
        height:
          (section.status === "streaming") | isLast
            ? "100vh"
            : "auto",
      }}
    >
      <ChatBubble type="user" dataUserMessage={section.id}>
        {section.title}
      </ChatBubble>

      {section.status === "loading" ? (
        <CircularProgress
          size={20}
          sx={{ alignSelf: "flex-start", margin: 2 }}
        />
      ) : (
        <ChatBubble type="assistant">
          <Markdown remarkPlugins={[remarkGfm]}>
            {content.content}
          </Markdown>
        </ChatBubble>
      )}
    </Box>
  );
};

export default ChatMessage;
