import {
  ChevronLeft,
  DataSaverOffOutlined,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import { useLayout } from "./LayoutContext";

export default function AppDrawerContent() {
  const { isDrawerOpen, setIsDrawerOpen } = useLayout();
  const theme = useTheme();

  return (
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
  );
}
