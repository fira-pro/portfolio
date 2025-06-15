import {
  DarkMode,
  EditNote,
  LightMode,
  ViewSidebarOutlined,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useColorScheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import {
  drawerWidth,
  mobileBreakPoint,
} from "src/constants";

// const Container = styled("div")({
//   containerType: "inline-size",
//   width: "100%",
// });

const ResponsiveBox = styled(Box)({
  "@container (min-width: 84rem)": {
    backgroundColor: "transparent",
    border: "none",
  },
});

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
        [theme.breakpoints.up(mobileBreakPoint)]: {
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

export default function AppBar({
  isDrawerOpen,
  setIsDrawerOpen,
}) {
  const { mode, setMode } = useColorScheme();

  return (
    // <Container>
    <StyledAppBar
      open={isDrawerOpen}
      position="fixed"
      color="transparent"
      enableColorOnDark
      sx={{
        boxShadow: "none",
      }}
    >
      <ResponsiveBox
        sx={{
          backgroundColor: "background.default",
          borderBottomColor: "divider",
          borderBottomStyle: "solid",
          borderBottomWidth: "0.8px",
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

          {!isDrawerOpen && (
            <IconButton
              size="large"
              aria-label="sidebar"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
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
      </ResponsiveBox>
    </StyledAppBar>
    // </Container>
  );
}
