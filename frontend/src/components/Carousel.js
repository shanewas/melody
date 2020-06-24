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
const useStyles = makeStyles({
	media: {
		height: 140,
		width: 50,
	},
});
export default function ControlledCarousel() {
	const [index, setIndex] = React.useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	const classes = useStyles();

	return (
		<Grid container direction='column' spacing={4}>
			<Grid item>
				<Typography>What Students are Saying</Typography>
			</Grid>
			<Grid item>
				<Carousel onSelect={handleSelect}>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg'
							alt='Second slide'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg'
							alt='Second slide'
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Grid>
		</Grid>
	);
}
