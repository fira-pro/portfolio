import remarkGfm from "remark-gfm";
import ChatBubble from "./ChatBubble";
import Markdown from "react-markdown";
import usePortfolioStore from "src/store";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const ChatMessage = ({ section, isLast }) => {
  const { streamedContent } = usePortfolioStore();
  const content = streamedContent[section.id] || {};

  const markdownStyles = {
    code: {
      backgroundColor: "divider",
      color: "primary.main",
      padding: "2px 6px",
      borderRadius: "4px",
      fontFamily: "monospace",
      fontSize: "0.85em",
    },
    pre: {
      backgroundColor: "#1e1e1e",
      padding: "12px",
      borderRadius: "8px",
      overflowX: "auto",
    },
    blockquote: {
      borderColor: "divider",
      borderStyle: "solid",
      borderWidth: "0 0 0 4px",
      padding: "0.4em 1.2em",
      marginY: 1,
      fontStyle: "italic",
      borderRadius: 1,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        gap: 2,
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
          <Box
            sx={{
              "& code": markdownStyles.code,
              "& pre": markdownStyles.pre,
              "& blockquote": markdownStyles.blockquote,
            }}
          >
            <Markdown remarkPlugins={[remarkGfm]}>
              {content.content}
            </Markdown>
          </Box>
        </ChatBubble>
      )}
    </Box>
  );
};

export default ChatMessage;
