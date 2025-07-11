import Box from "@mui/material/Box";
import ChatList from "./ChatList";
import usePortfolioStore from "src/store";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAutoScroll } from "src/hooks/useAutoScroll";
import DrawerHeader from "../layout/DrawerHeader";

export default function ChatWindow() {
  const { streamedSections, currentStreamingId } =
    usePortfolioStore();
  const {
    bottomRef,
    containerRef,
    showScrollButton,
    scrollToBottom,
  } = useAutoScroll([
    streamedSections.length,
    currentStreamingId,
  ]);

  return (
    <Box
      ref={containerRef}
      sx={{
        flexGrow: 1,
        width: "100%",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <DrawerHeader />

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
