import ChatMessage from "./ChatMessage";
import usePortfolioStore from "src/store";
import Container from "@mui/material/Container";
const ChatList = () => {
  const { sections, streamedSections } =
    usePortfolioStore();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {streamedSections.map((sectionId, index) => {
        const section = sections.find(
          (s) => s.id === sectionId
        );
        const isLast =
          index === streamedSections.length - 1;

        return (
          <ChatMessage
            key={sectionId}
            section={section}
            isLast={isLast}
          />
        );
      })}
    </Container>
  );
};

export default ChatList;
