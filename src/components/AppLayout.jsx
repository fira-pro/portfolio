import {
  ChevronLeft,
  ChevronRight,
  DarkMode,
  DataSaverOffOutlined,
  EditNote,
  LightMode,
  NewLabel,
  NewReleasesRounded,
  OpenInNew,
  ViewSidebar,
  ViewSidebarOutlined,
  ViewSidebarRounded,
  ViewSidebarSharp,
  ViewSidebarTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useColorScheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 245;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(
    ["margin", "width"],
    {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }
  ),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        [theme.breakpoints.up("md")]: {
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

export default function AppLayout() {
  const { mode, setMode } = useColorScheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        open={isDrawerOpen}
        position="fixed"
        color="transparent"
        enableColorOnDark
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {!isDrawerOpen && (
            <IconButton
              size="large"
              aria-label="sidebar"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <ViewSidebarOutlined
                sx={{ transform: "rotate(180deg)" }}
              />
            </IconButton>
          )}
          <IconButton
            size="large"
            aria-label="sidebar"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <EditNote />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Fira
          </Typography>
          <IconButton
            size="large"
            aria-label="Toggle theme"
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
          >
            {mode === "light" && <LightMode />}
            {mode === "dark" && <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
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
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton size="large" aria-label="sidebar">
            <DataSaverOffOutlined />
          </IconButton>
          <IconButton
            size="large"
            aria-label="sidebar"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <ChevronLeft />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
}
