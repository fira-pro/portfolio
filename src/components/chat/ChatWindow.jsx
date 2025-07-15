import Box from "@mui/material/Box";
import ChatList from "./ChatList";
import usePortfolioStore from "src/store";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAutoScroll } from "src/hooks/useAutoScroll";
import DrawerHeader from "../layout/DrawerHeader";
import IntroHeader from "./IntroHeader";
import Suggestions from "./Suggestions";
import Container from "@mui/material/Container";
export default function ChatWindow() {
  const {
    streamedSections,
    currentStreamingId,
    streamedContent,
  } = usePortfolioStore();
  const {
    bottomRef,
    containerRef,
    showScrollButton,
    scrollToBottom,
  } = useAutoScroll([
    streamedSections.length, // [0] - trigger scroll on new messages
    currentStreamingId, // [1] - detect streaming state changes
    streamedSections, // [2] - array of section IDs for targeting
    Object.keys(streamedContent).length, // [3] - detect content changes
  ]);

  const isJustStarted = streamedSections.length === 0;

  return (
    <Box
      ref={containerRef}
      sx={{
        flexGrow: 1,
        width: "100%",
        overflowY: "auto",
        position: "relative",
        scrollBehavior: "auto",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "start",
      }}
    >
      {/* <DrawerHeader /> */}
      {isJustStarted && (
        <Container
          maxWidth="sm"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IntroHeader />
          <Suggestions />
        </Container>
      )}
      <ChatList />

      <div ref={bottomRef}></div>

      {/* Floating scroll-to-bottom button */}
      <Zoom in={showScrollButton}>
        <Fab
          color="primary"
          size="small"
          onClick={scrollToBottom}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
          aria-label="Scroll to bottom"
        >
          <ArrowDownwardIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}
