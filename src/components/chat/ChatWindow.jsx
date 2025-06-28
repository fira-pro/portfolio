import Box from "@mui/material/Box";
import IntroHeader from "./IntroHeader";
import ChatBubble from "./ChatBubble";
export default function ChatWindow() {
  return (
    <Box
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        py: 2,
      }}
    >
      <IntroHeader />
      <ChatBubble>
        This is message by user Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Cupiditate odit optio
        repellat non saepe, reprehenderit fugiat amet
        temporibus qui placeat! Rem labore libero illum
        nostrum beatae impedit iure ab ipsam.
      </ChatBubble>
      <ChatBubble type="assistant">
        This is reply by assistant Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Culpa mollitia
        voluptas rerum aliquid. Rem sed nam explicabo
        veritatis adipisci quibusdam, nemo ut odit? Dolore,
        quam esse. Quas nobis maiores eos!
      </ChatBubble>
    </Box>
  );
}
