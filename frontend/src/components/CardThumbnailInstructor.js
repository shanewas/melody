import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import theme from "../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 355,
  },
  media: {
    height: 150,
  },
});

export default function CardThumbnailInstructor() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://opend-licklibrary-com.akamaized.net/images/tutors/thumbnails/hero-tutor_Jamie_Humphries.jpg"
        title="Contemplative Reptile"
        width="auto"
        height="100px"
      />
    </Card>
  );
}
