import {
  DarkMode,
  EditNote,
  LightMode,
  ViewSidebarOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useLayout } from "./LayoutContext";
import { useState } from "react";

// const Container = styled("div")({
//   containerType: "inline-size",
//   width: "100%",
// });

export default function AppBarContent() {
  const { isDrawerOpen, setIsDrawerOpen } = useLayout();
  const { mode, setMode, systemMode } = useColorScheme();
  const effectiveMode =
    mode === "system" ? systemMode : mode;

  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();

    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY + 20,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );

    // Prevent text selection lost after opening the context menu on Safari and Firefox
    const selection = document.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      setTimeout(() => {
        selection.addRange(range);
      });
    }
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <Toolbar>
      {!isDrawerOpen && (
        <Tooltip
          title="Open sidebar"
          placement="auto"
          disableInteractive
        >
          <IconButton
            size="large"
            aria-label="open sidebar"
            onClick={() => setIsDrawerOpen(true)}
            sx={{ cursor: "e-resize" }}
          >
            <ViewSidebarOutlined
              sx={{ transform: "rotate(180deg)" }}
            />
          </IconButton>
        </Tooltip>
      )}

      {!isDrawerOpen && (
        <Tooltip
          title="New chat"
          placement="bottom"
          disableInteractive
        >
          <IconButton
            size="large"
            aria-label="new chat"
            // onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <EditNote />
          </IconButton>
        </Tooltip>
      )}
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Fira
      </Typography>
      <Tooltip
        title="Toggle theme, right click for options"
        placement="auto"
        disableInteractive
        onContextMenu={handleContextMenu}
      >
        <IconButton
          size="large"
          aria-label="Toggle theme"
          onClick={() =>
            setMode(
              effectiveMode === "light" ? "dark" : "light"
            )
          }
        >
          {effectiveMode === "dark" && <LightMode />}
          {effectiveMode === "light" && <DarkMode />}
        </IconButton>
      </Tooltip>

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? {
                top: contextMenu.mouseY,
                left: contextMenu.mouseX,
              }
            : undefined
        }
      >
        <MenuItem
          selected={mode === "system"}
          onClick={() => {
            handleClose();
            setMode("system");
          }}
        >
          System
        </MenuItem>
        <MenuItem
          selected={mode === "light"}
          onClick={() => {
            handleClose();
            setMode("light");
          }}
        >
          Light
        </MenuItem>
        <MenuItem
          selected={mode === "dark"}
          onClick={() => {
            handleClose();
            setMode("dark");
          }}
        >
          Dark
        </MenuItem>
      </Menu>
    </Toolbar>
  );
}
