// import { createTheme } from "@mui/material/styles";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      primary: {
        main: "#000000", // black for text/buttons
      },
      secondary: {
        main: "#1e88e5", // techy blue accent
      },
      background: {
        default: "#ffffff", // white background
        paper: "#f5f5f5", // light gray for cards
      },
      text: {
        primary: "#000000",
        secondary: "#555555", // slightly softer text
      },
      divider: "#e0e0e0",
    },
    dark: {
      primary: {
        main: "#ffffff", // white for text/buttons
      },
      secondary: {
        main: "#90caf9", // soft techy blue
      },
      background: {
        default: "#121212", // deep black
        paper: "#1e1e1e", // dark gray for cards
      },
      text: {
        primary: "#ffffff",
        secondary: "#cccccc",
      },
      divider: "#333333",
    },
  },
});

export default theme;
