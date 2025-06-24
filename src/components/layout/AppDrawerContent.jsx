import {
  ChevronLeft,
  DataSaverOffOutlined,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useLayout } from "./LayoutContext";

export default function AppDrawerContent() {
  const { setIsDrawerOpen } = useLayout();
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

      <Tooltip
        title="Close sidebar"
        placement="bottom"
        disableInteractive
      >
        <IconButton
          size="large"
          aria-label="close sidebar"
          onClick={() => setIsDrawerOpen(false)}
          sx={{ cursor: "e-resize" }}
        >
          <ChevronLeft />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
