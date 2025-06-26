import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ChatWindow from "../chat/ChatWindow";
export default function MainContent() {
  return (
    <Container maxWidth="sm">
      <ChatWindow />
    </Container>
  );
}
