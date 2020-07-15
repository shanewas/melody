import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			// light: "#191c21",
			light: "rgba(25, 28, 33, .5)",
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
			paper: "#000",
			default: "#f2f2f2",
		},
		text: {
			primary: "rgba(255, 255, 255, 0.87)",
			secondary: "rgba(255, 255, 255, 0.54)",
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
