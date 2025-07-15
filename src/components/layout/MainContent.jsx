import usePortfolioStore from "src/store";
import ChatWindow from "../chat/ChatWindow";
import Suggestions from "../chat/Suggestions";
import Container from "@mui/material/Container";
export default function MainContent() {
  const { streamedSections } = usePortfolioStore();
  const isJustStarted = streamedSections.length === 0;

  return (
    <>
      <ChatWindow />

      {!isJustStarted && (
        <Container maxWidth="sm">
          <Suggestions />
        </Container>
      )}
    </>
  );
}
