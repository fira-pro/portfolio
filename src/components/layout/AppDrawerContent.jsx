import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useLayout } from "./LayoutContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import LeftSidebarIcon from "../ui/icons/LeftSidebarIcon";
export default function AppDrawerContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );
  const { setIsDrawerOpen } = useLayout();

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
        <DataSaverOffOutlinedIcon />
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
          {isMobile ? <CloseIcon /> : <LeftSidebarIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
