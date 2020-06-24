import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import PrimarySearchAppBar from "./components/Topnav";
import FAQView from "./components/FAQView";
import { Grid, Paper, Divider, CardMedia } from "@material-ui/core";

import TopViewHome from "./components/TopViewHome";
import InstructorViewHome from "./components/InstructorViewHome";
import VideoPlayer from "./components/VideoPlayer";
import Album from "./components/Album";

import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Grid container direction='column'>
				<Grid item>
					<PrimarySearchAppBar />
				</Grid>
				<br />
				<Grid item>
					<TopViewHome />
				</Grid>
				<Grid item>
					<Album />
				</Grid>
				<Grid>
					<VideoPlayer />
				</Grid>
				<Grid item>
					<InstructorViewHome />
				</Grid>
				<Grid item>
					<FAQView />
				</Grid>
				<Grid item>
					<Carousel />
				</Grid>
				<Grid item>
					<Divider />
				</Grid>
				<Grid item>
					<Footer />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
