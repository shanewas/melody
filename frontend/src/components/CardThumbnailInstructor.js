import React, { useEffect, useState } from "react";

import theme from "../theme";
import {
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  makeStyles,
  Button,
  CardActionArea
} from "@material-ui/core";

import axios from "../api/Config";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.primary.light,
    color: theme.palette.text.secondary,
  },
  cardMedia: {
    paddingTop: "76.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    color: theme.palette.secondary.contrastText,
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
});

export default function CardThumbnailInstructor(props) {
  const classes = useStyles();

  // const [instructor, setInstructor] = useState("");

  const instructor = props.instructor;
  console.log("course inside CardThumbnailCourse: " + instructor.name);

  const history = useHistory();
  function navigateToInstructor() {
    history.push("/instructor", instructor);
  }

  useEffect(() => {
    // getInstructorData();
  }, []);

  // function getInstructorData() {
  //   axios
  //     .get("instructor/", {})
  //     .then((res) => {
  //       const data = res.data;

  //       // setState({ video: url });
  //       setInstructor(data[data.length - 4]);
  //       console.log("result instructor api called: "+data[data.length - 4]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <CardActionArea
      className={classes.CardActionArea}
      onClick={navigateToInstructor}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={"http://162.0.231.67/" + instructor.photo}
          // title={"Image title"}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h6">
            {instructor.name}
            {console.log("instructor name: " + instructor.name)}
          </Typography>
          <Typography>12 lessons</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            className={classes.button}
            fullWidth="true"
            variant="text"
          >
            See more
          </Button>
        </CardActions>
      </Card>
    </CardActionArea>
  );
}
