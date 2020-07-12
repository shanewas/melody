import React from "react";
import Carousel from "react-bootstrap/Carousel";

import {
	Grid,
	Typography,
	Card,
	CardContent,
	CardMedia,
	makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	media: {
		height: 140,
		width: 50,
	},
	Typography: {
		marginBottom: theme.spacing(10),
		marginTop: theme.spacing(10),
	},
	Card: {
		background: "rgba(25, 28, 33, .75)",
	},
	CarouselImage: {
		paddingLeft: theme.spacing(10),
		paddingRight: theme.spacing(10),
		marginBottom: theme.spacing(20),
	},
	Carousel: {},
}));
export default function ControlledCarousel() {
	const [index, setIndex] = React.useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	const classes = useStyles();

	return (
		<Grid
			container
			direction='row'
			justify='center'
			className={classes.CarouselImage}
		>
			<Grid item lg={12}>
				<Typography variant='h4' component='h4' className={classes.Typography}>
					What Students are Saying
				</Typography>
			</Grid>
			<Grid item lg={4} justify='flex-end'>
				<Carousel onSelect={handleSelect}>
					<Carousel.Item className={classes.CarouselImage}>
						<img
							className='d-block w-100'
							src='https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg'
							alt='Second slide'
						/>
						<Carousel.Caption>
							<Card className={classes.Card}>
								<CardContent>
									<Typography>John Doe</Typography>
									<Typography>Lorem ipsum dolor!!</Typography>
								</CardContent>
							</Card>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className={classes.CarouselImage}>
						<img
							className='d-block w-100'
							src='https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg'
							alt='Second slide'
						/>
						<Carousel.Caption>
							<Card className={classes.Card}>
								<CardContent>
									<Typography>John Doe</Typography>
									<Typography>Lorem ipsum dolor!!</Typography>
								</CardContent>
							</Card>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className={classes.CarouselImage}>
						<img
							className='d-block w-100'
							src='https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg'
							alt='Second slide'
						/>
						<Carousel.Caption>
							<Card className={classes.Card}>
								<CardContent>
									<Typography>John Doe</Typography>
									<Typography>Lorem ipsum dolor!!</Typography>
								</CardContent>
							</Card>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Grid>
		</Grid>
	);
}
