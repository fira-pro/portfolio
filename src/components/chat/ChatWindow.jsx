import Box from "@mui/material/Box";
import ChatList from "./ChatList";
import usePortfolioStore from "src/store";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAutoScroll } from "src/hooks/useAutoScroll";
import IntroHeader from "./IntroHeader";
import Suggestions from "./Suggestions";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
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
    scrollToSection,
  } = useAutoScroll([
    streamedSections.length, // [0] - trigger scroll on new messages
    currentStreamingId, // [1] - detect streaming state changes
    streamedSections, // [2] - array of section IDs for targeting
    Object.keys(streamedContent).length, // [3] - detect content changes
  ]);

  const isJustStarted = streamedSections.length === 0;

  return (
    <>
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
        <Zoom
          in={isJustStarted}
          timeout={{ enter: 500, exit: 0 }}
          unmountOnExit
          mountOnEnter
        >
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
            <Suggestions
              scrollToSection={scrollToSection}
            />
          </Container>
        </Zoom>
        <ChatList />

        <div ref={bottomRef}></div>
      </Box>

      {/* Display bottom fixed suggestions once the chat is started
      and FAB absolutely positioned to scroll to bottom
       */}
      <Slide direction="down" in={!isJustStarted}>
        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
          }}
        >
          {/* Floating scroll-to-bottom button */}
          <Zoom in={showScrollButton}>
            <Fab
              color="primary"
              size="small"
              onClick={scrollToBottom}
              sx={{
                position: "absolute",
                top: -64,
                right: 16,
                zIndex: 1000,
              }}
              aria-label="Scroll to bottom"
            >
              <ArrowDownwardIcon />
            </Fab>
          </Zoom>
          <Suggestions scrollToSection={scrollToSection} />
        </Container>
      </Slide>
    </>
  );
}
