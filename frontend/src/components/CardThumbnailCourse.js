import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import theme from "../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 300,
  },
});

export default function CardThumbnailCourse() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://opend-licklibrary-com.akamaized.net/images/courses/thumbnails/thumbnail-course-51ExtremeShredLicks-RDR0528.jpg"
        title="Contemplative Reptile"
        width="auto"
        height="100px"
      />
    </Card>
  );
}
