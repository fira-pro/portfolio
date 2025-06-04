import { createTheme } from "@mui/material/styles";

const black = "#000000";
const white = "#ffffff";
const gray900 = "#111111";
const gray800 = "#1a1a1a";
const gray700 = "#2e2e2e";
const gray200 = "#eaeaea";
// const gray100 = "#f5f5f5";
const gray50 = "#fafafa";

const theme = createTheme({
  typography: {
    fontFamily: `'Geist', 'Manrope', 'sans-serif'`,
    h1: { fontWeight: 600, fontSize: "2.5rem" },
    h2: { fontWeight: 600, fontSize: "2rem" },
    body1: { fontWeight: 400, fontSize: "1rem" },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "none",
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: black, // used for buttons, icons, etc.
          contrastText: white,
        },
        secondary: {
          main: gray800, // optional subtle accent
        },
        background: {
          default: white,
          paper: gray50,
        },
        text: {
          primary: gray900,
          secondary: "#666666",
        },
        divider: gray200,
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: white,
          contrastText: black,
        },
        secondary: {
          main: gray200,
        },
        background: {
          default: black,
          paper: gray800,
        },
        text: {
          primary: white,
          secondary: "#999999",
        },
        divider: gray700,
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
