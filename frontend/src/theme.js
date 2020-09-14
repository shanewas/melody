import { createMuiTheme } from "@material-ui/core/styles";
import { Opacity } from "@material-ui/icons";

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    direction: "ltr",
  },
  palette: {
    primary: {
      // light: "#191c21",
      light: "#000",
      main: "#1a1a1a", //page background color - primary
      dark: "#000000",
      contrastText: "#fff",
      icon: "#fff",
    },
    secondary: {
      light: "#e95649",
      main: "#b02020", //nav bar color - secondary
      dark: "#790000",
      contrastText: "#fff", //button, text color - accent
    },
    background: {
      paper: "#1A1A1A",
      default: "#1A1A1A",
    },
    action: {
      hover: "#b02020",
      hoverOpacity: "0.04",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    text: {
      primary: "#fff",
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
