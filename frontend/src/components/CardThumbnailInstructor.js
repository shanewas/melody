import React from "react";

import theme from "../theme";
import {
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.primary.light,
    color:theme.palette.text.secondary
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    background: "rgba(225, 7, 18, .87)",
    color: "rgba(255,255,255,.87)",
  },
});

export default function CardThumbnailInstructor() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://opend-licklibrary-com.akamaized.net/images/tutors/hero-tutor_Michael_Casswell.jpg"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="h6">
          Michael Casswell
        </Typography>
        <Typography>12 lessons</Typography>
      </CardContent>
    </Card>
  );
}
