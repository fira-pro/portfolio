import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";
import { useLayout } from "./LayoutContext";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import LeftSidebarIcon from "../ui/icons/LeftSidebarIcon";
import NewChatIcon from "../ui/icons/NewChatIcon";
import OpenSideBarMobileIcon from "../ui/icons/OpenSideBarMobileIcon";
import LightModeIcon from "../ui/icons/LightModeIcon";
import DarkModeIcon from "../ui/icons/DarkModeIcon";
import usePortfolioStore from "src/store";

export default function AppBarContent() {
  const { isDrawerOpen, setIsDrawerOpen } = useLayout();
  const { mode, setMode, systemMode } = useColorScheme();
  const { resetState } = usePortfolioStore();

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );
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
    <Toolbar
      sx={{
        containerType: "inline-size",
        display: "flex",
        justifyContent: "space-between",
        "& > *": {
          pointerEvents: "auto",
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        // justifyContent="center"
        gap={2}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            flexGrow: 1,
            display: "flex",
          },
        })}

        // sx={{ pointerEvents: "auto" }}
      >
        {(!isDrawerOpen || isMobile) && (
          <Tooltip
            title="Open sidebar"
            placement="auto"
            disableInteractive
          >
            <IconButton
              size="medium"
              aria-label="open sidebar"
              onClick={() => setIsDrawerOpen(true)}
              sx={{ cursor: "e-resize" }}
            >
              {isMobile ? (
                <OpenSideBarMobileIcon />
              ) : (
                <LeftSidebarIcon />
              )}
            </IconButton>
          </Tooltip>
        )}

        {!isMobile && !isDrawerOpen && (
          <Tooltip
            title="New chat"
            placement="bottom"
            disableInteractive
          >
            <IconButton
              size="medium"
              aria-label="new chat"
              onClick={resetState}
            >
              <NewChatIcon />
            </IconButton>
          </Tooltip>
        )}
        <Typography
          variant="h6"
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              marginLeft: "auto",
              marginRight: "auto",
            },
          })}
        >
          Fira
        </Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        // sx={{ pointerEvents: "auto" }}
      >
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
            {effectiveMode === "dark" && <LightModeIcon />}
            {effectiveMode === "light" && <DarkModeIcon />}
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
      </Box>
    </Toolbar>
  );
}
