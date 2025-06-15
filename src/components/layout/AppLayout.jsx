import { Box } from "@mui/material";
import { useState } from "react";
import AppBar from "./AppBar";
import Main from "./Main";
import AppDrawer from "./AppDrawer";

export default function AppLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      <AppDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Main isDrawerOpen={isDrawerOpen} />
    </Box>
  );
}
