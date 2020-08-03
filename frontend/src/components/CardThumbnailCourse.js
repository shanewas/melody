import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  CardActionArea,
  Box,
  Grid,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import theme from "../theme";

import axios from "../api/Config";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    background: theme.palette.secondary.main,
  },
  cardMedia: {
    paddingTop: "66.25%", // 16:9
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
    marginBottom: theme.spacing(1),
  },
  CardActionArea: {
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
});

export default function CardThumbnailCourse(props) {
  const classes = useStyles();

  // const [course, setCourse] = useState("");

  const course = props.course;
  console.log("course inside CardThumbnailCourse: " + course);

  useEffect(() => {
    // getCourseData();
  }, []);

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
    history.push("/course",course);
  }

  return (
    <CardActionArea
      className={classes.CardActionArea}
      onClick={((navigateToCourse))}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={"http://162.0.231.67/" + course.thumbnail}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.Typography}
          >
            <Box fontWeight="fontWeightBold">{course.title}</Box>
          </Typography>
          <Typography
            className={classes.Typography}
            align="left"
            variant="body"
          >
            <Box fontStyle="italic">{course.subtitle}</Box>
          </Typography>
          <Grid container direction="row">
            <Grid item container direction="row" xs={12}>
              <Grid item style={{ marginRight: 2 }}>
                <Typography className={classes.Typography} align="left">
                  <Box fontWeight="fontWeightMedium"> Level:</Box>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.Typography}>
                  {course.level}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Rating
                name="read-only"
                value={Math.floor(Math.random() * 5) + 1}
                readOnly
                size="medium"
              />
            </Grid>
          </Grid>
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
