import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function ChatBubble({
  type = "user", // 'user' or 'assistant'
  children,
}) {
  return (
    <Box
      sx={{
        alignSelf:
          type === "assistant" ? "flex-start" : "flex-end",
        width: type === "assistant" ? "100%" : "70%",
        py: 2,
      }}
    >
      <Typography>{children}</Typography>
    </Box>
  );
}
