import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import theme from "../theme";

import axios from "../api/Config";
import { useHistory } from "react-router-dom";

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
  CardActionArea:{
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  }
});

export default function CardThumbnailCourse(props) {
  const classes = useStyles();

  // const [course, setCourse] = useState("");

  const course = props.course;
  console.log("course inside CardThumbnailCourse: "+course);
  

  useEffect(() => {
    // getCourseData();
  },[]);

  // function getCourseData() {
  //   axios
  //     .get("course/", {})
  //     .then((res) => {
  //       const data = res.data;

  //       // setState({ video: url });
  //       setCourse(data[data.length - 1]);
  //       console.log("result course api called: "+data[data.length - 1]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const history = useHistory();
  function navigateToCourse() {
    history.push("/course");
  }

  return (
    <CardActionArea className={classes.CardActionArea} onClick={navigateToCourse}>
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
    </CardActionArea>
  );
}
