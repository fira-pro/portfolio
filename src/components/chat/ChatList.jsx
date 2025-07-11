import ChatMessage from "./ChatMessage";
import usePortfolioStore from "src/store";
import Box from "@mui/material/Box";
import IntroHeader from "./IntroHeader";
import Suggestions from "./Suggestions";
import DrawerHeader from "../layout/DrawerHeader";
import Container from "@mui/material/Container";
const ChatList = () => {
  const { sections, streamedSections, currentStreamingId } =
    usePortfolioStore();

  const isStreaming = currentStreamingId !== null;
  const isJustStarted = streamedSections.length === 0;

  // ! Needs review
  // useEffect(() => {
  //   if (isStreaming && showScrollButton) scrollToBottom();
  // }, [isStreaming, showScrollButton, scrollToBottom]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isJustStarted && <IntroHeader />}
      <Suggestions />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          p: 2,
        }}
      >
        <p>{isStreaming ? "streaming" : "not streaming"}</p>
        {streamedSections.map((sectionId) => {
          const section = sections.find(
            (s) => s.id === sectionId
          );
          return (
            <ChatMessage
              key={sectionId}
              section={section}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default ChatList;
