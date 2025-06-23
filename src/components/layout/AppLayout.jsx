import { Box } from "@mui/material";
import { LayoutProvider } from "./LayoutContext";

export default function AppLayout({ children }) {
  return (
    <LayoutProvider>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {children}
      </Box>
    </LayoutProvider>
  );
}
