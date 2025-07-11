import remarkGfm from "remark-gfm";
import ChatBubble from "./ChatBubble";
import Markdown from "react-markdown";
import usePortfolioStore from "src/store";
import CircularProgress from "@mui/material/CircularProgress";
const ChatMessage = ({ section }) => {
  const { streamedContent } = usePortfolioStore();
  const content = streamedContent[section.id] || {};

  return (
    <>
      <ChatBubble type="user">{section.title}</ChatBubble>

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
    </>
  );
};

export default ChatMessage;
