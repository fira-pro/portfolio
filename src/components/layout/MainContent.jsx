import Container from "@mui/material/Container";
import ChatWindow from "../chat/ChatWindow";
export default function MainContent() {
  return (
    <Container maxWidth="sm">
      <ChatWindow />
    </Container>
  );
}
