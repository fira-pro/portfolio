import DarkModeIcon from "@mui/icons-material/DarkMode";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LightModeIcon from "@mui/icons-material/LightMode";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
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
import SvgIcon from "@mui/material/SvgIcon";
export default function AppBarContent() {
  const { isDrawerOpen, setIsDrawerOpen } = useLayout();
  const { mode, setMode, systemMode } = useColorScheme();
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
              size="large"
              aria-label="open sidebar"
              onClick={() => setIsDrawerOpen(true)}
              sx={{ cursor: "e-resize" }}
            >
              {isMobile ? (
                <SvgIcon>
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      strokeWidth={0}
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 6H20M4 12H14M4 18H9"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </SvgIcon>
              ) : (
                <ViewSidebarOutlinedIcon
                  sx={{ transform: "rotate(180deg)" }}
                />
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
              size="large"
              aria-label="new chat"
              // onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <EditNoteIcon />
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
