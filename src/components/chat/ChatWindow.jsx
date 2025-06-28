import Box from "@mui/material/Box";
import IntroHeader from "./IntroHeader";
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
    </Box>
  );
}
