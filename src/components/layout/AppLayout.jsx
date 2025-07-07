import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LayoutProvider, useLayout } from "./LayoutContext";
import MuiAppBar from "@mui/material/AppBar";

import {
  drawerWidth,
  // mobileBreakPoint,
} from "src/constants";
import { useTheme } from "@emotion/react";
import DrawerHeader from "./DrawerHeader";

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  // "@container (min-width: 500px)": {
  //   backgroundColor: "transparent",
  // },
  containerType: "inline-size",
  transition: theme.transitions.create(
    ["margin", "width"],
    {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }
  ),
  variants: [
    // When the drawer is open, calculate the width and margin with drawerWidth
    // But only when the breakpoint is above mobile break point blow that the
    // drawer variant is temporary (overlay) which doesn't affect the layout
    {
      props: ({ open }) => open,
      style: {
        [theme.breakpoints.up("sm")]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(
            ["margin", "width"],
            {
              easing: theme.transitions.easing.easeOut,
              duration:
                theme.transitions.duration.enteringScreen,
            }
          ),
        },
      },
    },
  ],
}));

const StyledMain = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // Above mobile break point, add a negative left margin with a value of drawer width
  // to make it look the drawer isn't there when it is closed. when it is open remove the left margin
  // which naturally pushes the the content to the right
  [theme.breakpoints.up("sm")]: {
    marginLeft: `-${drawerWidth}px`,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        [theme.breakpoints.up("sm")]: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration:
              theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    },
  ],
}));

function AppLayout({ children }) {
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

function AppBar({ children }) {
  const { isDrawerOpen } = useLayout();
  return (
    <StyledAppBar
      open={isDrawerOpen}
      position="fixed"
      color="transparent"
      enableColorOnDark
      sx={{
        boxShadow: "none",
        pointerEvents: "none",
      }}
    >
      {/* A wrapper to make AppBar transparent when there is
      enough width */}
      <Box
        sx={(theme) => ({
          backgroundColor: "background.default",
          borderBottomColor: "divider",
          borderBottomStyle: "solid",
          borderBottomWidth: "0.8px",
          pointerEvents: "initial",
          [theme.containerQueries.up("lg")]: {
            backgroundColor: "transparent",
            border: "none",
            pointerEvents: "none",
          },
        })}
      >
        {children}
      </Box>
    </StyledAppBar>
  );
}

function AppDrawer({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );
  const { isDrawerOpen, setIsDrawerOpen } = useLayout();
  return (
    <Drawer
      open={isDrawerOpen}
      variant={isMobile ? "temporary" : "persistent"}
      onClose={() => setIsDrawerOpen(false)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      {children}
    </Drawer>
  );
}

function Main({ children }) {
  const { isDrawerOpen } = useLayout();
  return (
    <StyledMain open={isDrawerOpen}>
      <DrawerHeader />
      {children}
    </StyledMain>
  );
}

AppLayout.AppBar = AppBar;
AppLayout.AppDrawer = AppDrawer;
AppLayout.Main = Main;

export default AppLayout;
