import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import VideoPlayer from "./videoPlayer/VideoPlayer";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		paddingLeft: theme.spacing(10),
		paddingRight: theme.spacing(10),
		paddingTop: theme.spacing(10),
	},
	button: {
		background: "#821518",
		color: "rgba(255,255,255,.87)",
		marginTop: theme.spacing(6),
	},
	Typography: {
		fontSize: 50,
	},
	GridItem: {
		marginBottom: theme.spacing(10),
	},
}));

export default function SimplePaper() {
	const classes = useStyles();

	return (
		<Grid
			container
			className={classes.root}
			direction='row'
			spacing={theme.spacing(1)}
		>
			<Grid
				item
				lg={4}
				md={6}
				sm={12}
				xs={12}
				container
				direction='column'
				alignContent='center'
			>
				<Grid item className={classes.GridItem}>
					<Typography variant='h2' component='h2' align='left'>
						TODAY'S <br />
						THE DAY
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant='h6' component='h6' align='left'>
						Learn from 10+ <br /> of Bangladesh’s most acclaimed Musicians !!
					</Typography>
				</Grid>
				<Grid item container justify='flex-start'>
					<Button
						variant='contained'
						href='#contained-buttons'
						className={classes.button}
					>
						Let's Get Started!
					</Button>
				</Grid>
			</Grid>
			<Grid item lg={8} md={6} sm={12} xs={12}>
				<VideoPlayer url='https://www.youtube.com/embed/I41fXTW-R6I' />
			</Grid>
		</Grid>
	);
}
