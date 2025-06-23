import {
  DarkMode,
  EditNote,
  LightMode,
  ViewSidebarOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  Toolbar,
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

      {!isDrawerOpen && (
        <IconButton
          size="large"
          aria-label="sidebar"
          // onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <EditNote />
        </IconButton>
      )}
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

    // </Container>
  );
}
