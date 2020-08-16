import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: "#191c21",
      light: "#ffffff",
      main: "#f2f2f2", //page background color - primary
      dark: "#000a12",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff", //nav bar color - secondary
      dark: "#c7c7c7",
      contrastText: "#8b1115", //button, text color - accent
    },
    background: {
      paper: "#ffffff",
      default: "#f2f2f2",
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(0, 0, 0, .74)",
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(255, 255, 255, 0.38)",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
