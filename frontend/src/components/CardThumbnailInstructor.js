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
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://opend-licklibrary-com.akamaized.net/images/tutors/hero-tutor_Michael_Casswell.jpg"
          title="Image title"
        />
      </Card>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            Michael Casswell
          </Typography>
          <Typography>12 lessons</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
