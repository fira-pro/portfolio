import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useLayout } from "./LayoutContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import LeftSidebarIcon from "../ui/icons/LeftSidebarIcon";
import Button from "@mui/material/Button";
import NewChatIcon from "../ui/icons/NewChatIcon";
import ButtonGroup from "@mui/material/ButtonGroup";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import FiraLogoIcon from "../ui/icons/FiraLogoIcon";
import usePortfolioStore from "src/store";
export default function AppDrawerContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );
  const { setIsDrawerOpen } = useLayout();
  const { resetState } = usePortfolioStore();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
        }}
      >
        <IconButton size="large" aria-label="Home" href="/">
          <FiraLogoIcon />
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
      <ButtonGroup
        variant="text"
        orientation="vertical"
        aria-label="Sidebar actions"
        fullWidth
        sx={{
          py: 1,
          px: 2,
          "& .MuiButton-root": {
            justifyContent: "flex-start",
            border: "none",
            color: "primary.light",
          },
        }}
      >
        <Button
          startIcon={<NewChatIcon />}
          onClick={resetState}
        >
          New Chat
        </Button>
        <Button startIcon={<DownloadOutlinedIcon />}>
          Download PDF
        </Button>
      </ButtonGroup>
    </Box>
  );
}
