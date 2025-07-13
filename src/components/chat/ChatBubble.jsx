import Box from "@mui/material/Box";
export default function ChatBubble({
  type = "user", // 'user' or 'assistant'
  dataUserMessage = null, // to track and scroll to user message
  children,
}) {
  return (
    <Box
      data-user-message={dataUserMessage}
      sx={{
        alignSelf:
          type === "assistant" ? "flex-start" : "flex-end",
        maxWidth: type === "assistant" ? "100%" : "70%",

        py: 1,
        px: 2,
        textAlign: type === "assistant" ? "left" : "right",
        bgcolor:
          type === "user"
            ? "background.paper"
            : "background.default",
        borderRadius: 100,
        overflowWrap: "break-word", // Ensures text wraps
        wordBreak: "break-word", // Helps break long words
      }}
    >
      {children}
    </Box>
  );
}
