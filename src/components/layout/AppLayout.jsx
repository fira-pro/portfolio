import { Box } from "@mui/material";
import { useState } from "react";
import AppBar from "./AppBar";
import Main from "./Main";
import AppDrawer from "./AppDrawer";
import { createContext } from "react";

export const LayoutContext = createContext();

export default function AppLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ isDrawerOpen, setIsDrawerOpen }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        {children}
      </Box>
    </LayoutContext.Provider>
  );
}
