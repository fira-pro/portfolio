import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Define custom breakpoints for responsive design
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 767,
      laptop: 1080,
      desktop: 1400,
    },
  },
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
        // mode: "light",
        primary: {
          main: "#000000", // black buttons, icons
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#f0f0f0", // sidebar or subtle sections
        },
        background: {
          default: "#ffffff", // app background
          paper: "#fafafa", // cards, modals, sidebar
        },
        text: {
          primary: "#111111", // dark gray text
          secondary: "#666666",
        },
        divider: "#e0e0e0",
      },
    },
    dark: {
      palette: {
        // mode: "dark",
        primary: {
          main: "#ffffff", // white buttons, icons
          contrastText: "#000000",
        },
        secondary: {
          main: "#2a2a2a", // sidebar or accents
        },
        background: {
          default: "#1a1a1a", // page background
          paper: "#121212", // card/sidebar/modals
        },
        text: {
          primary: "#ffffff",
          secondary: "#aaaaaa",
        },
        divider: "#2e2e2e",
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
