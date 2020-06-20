import React from "react";
import SignIn from "./components/SignIn";
import "./App.css";
import PrimarySearchAppBar from "./components/Topnav";
import { Grid } from "@material-ui/core";

function App() {
	return (
		<div className='App'>
			<Grid container direction='column'>
				<Grid item>
					<PrimarySearchAppBar />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
