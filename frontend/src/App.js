import React from "react";
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
				<Grid item>
					<PrimarySearchAppBar />
				</Grid>
				<Grid item>
					<PrimarySearchAppBar />
				</Grid>
			</Grid>
			<br></br>
			<Grid container direction='row'>
				<Grid item xs={12} sm={4}>
					<PrimarySearchAppBar />
				</Grid>
				<Grid item xs={12} sm={4}>
					<PrimarySearchAppBar />
				</Grid>
				<Grid item xs={12} sm={4}>
					<PrimarySearchAppBar />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
