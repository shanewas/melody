import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#4f5b62",
			main: "#263238",
			dark: "#000a12",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ffffff",
			main: "#fafafa",
			dark: "#c7c7c7",
			contrastText: "#000",
		},
		background: {
			paper: "#000",
			default: "#242322",
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
	shape: {
		borderRadius: 4,
	},
});

export default theme;
