import {
  ChevronLeft,
  DataSaverOffOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  drawerWidth,
  mobileBreakPoint,
} from "src/constants";

export default function AppDrawer({
  isDrawerOpen,
  setIsDrawerOpen,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down(mobileBreakPoint)
  );
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
  );
}
