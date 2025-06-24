import {
  DarkMode,
  EditNote,
  LightMode,
  ViewSidebarOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useLayout } from "./LayoutContext";

// const Container = styled("div")({
//   containerType: "inline-size",
//   width: "100%",
// });

export default function AppBarContent() {
  const { isDrawerOpen, setIsDrawerOpen } = useLayout();
  const { mode, setMode } = useColorScheme();

  return (
    // <Container>
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
        title="Toggle theme"
        placement="auto"
        disableInteractive
      >
        <IconButton
          size="large"
          aria-label="Toggle theme"
          onClick={() =>
            setMode(mode === "light" ? "dark" : "light")
          }
        >
          {mode === "dark" && <LightMode />}
          {mode === "light" && <DarkMode />}
        </IconButton>
      </Tooltip>
    </Toolbar>

    // </Container>
  );
}
