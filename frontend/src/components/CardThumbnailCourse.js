import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "../theme";

import axios from "../api/Config";

const useStyles = makeStyles({
  card: {
    background: theme.palette.secondary.main,
  },
  cardMedia: {
    paddingTop: "76.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    background: theme.palette.secondary.contrastText,
    color: "rgba(255,255,255,.87)",
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
  Typography: {
    color: theme.palette.text.secondary,
  },
});

export default function CardThumbnailCourse() {
  const classes = useStyles();

  const [course, setCourse] = useState("");

  useEffect(() => {
    getCourseData();
  });

  function getCourseData() {
    axios
      .get("course/", {})
      .then((res) => {
        const data = res.data;

        // setState({ video: url });
        setCourse(data[data.length - 1]);
        console.log(data[data.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={"http://162.0.231.67/" + course.thumbnail}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="body"
          component="h6"
          align="left"
          className={classes.Typography}
        >
          {course.title}
        </Typography>
        <Typography
          className={classes.Typography}
          align="left"
          variant="subtitle"
          component="h6"
        >
          ( {course.subtitle} )
        </Typography>
        <Typography className={classes.Typography} align="left">
          Course description
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="large" className={classes.button} fullWidth="true">
          View
        </Button>
      </CardActions> */}
    </Card>
  );
}
