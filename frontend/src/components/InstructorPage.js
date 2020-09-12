import React, { useState, useEffect } from "react";
import Topnav from "./Navbar";
import axios from "../api/Config";
import {
  Backdrop,
  Paper,
  Toolbar,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@material-ui/core";
import theme from "../theme";
import Footer from "./Footer";
import CourseViewHome from "./CourseViewHome";

import CourseCard from "./Course/Card";

const useStyles = makeStyles((theme) => ({
  greySection: {
    padding: theme.spacing(5),
  },
  bioSection: {
    marginLeft: theme.spacing(5),
  },
  cover: {
    height: 0,
    paddingTop: "100%",
  },
  Typography: {
    color: "#fff",
  },
}));

export default function InstructorPage(props) {
  const classes = useStyles();
  const [imageHeight, setImageHeight] = useState("");
  const [courses, setCourses] = useState([]);
  const instructor = props.location.state;
  const imageUrl = "http://162.0.231.67/" + instructor.photo;

  console.log("instructor name inside single course view: " + instructor);
  // getWindowHeight();
  function getWindowHeight() {
    let intViewportHeight = window.innerHeight / 2;
    console.log("window height = " + intViewportHeight);
    setImageHeight(intViewportHeight);
  }

  //getCourses
  function getCourses() {
    var url = "course/instructor/" + instructor._id;
    axios
      .get(url, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res, err) => {
        setCourses(res.data);
        console.log("course list fetched in home: " + res.data.length);
      });
  }

  useEffect(() => {
    getWindowHeight();
    getCourses();
  }, []);
  return (
    <div className="App">
      {console.log("photo url: " + instructor.photo)}
      <Topnav />
      <Toolbar />

      {/* <img height={imageHeight} width="100%" src={imageUrl} /> */}

      <Grid container direction="row">
        <Grid
          item
          container
          direction="row"
          justify="center"
          className={classes.greySection}
          xs={12}
        >
          <Grid item xs={3}>
            <Card raised="true" style={{ backgroundColor: "#000" }}>
              <CardMedia image={imageUrl} className={classes.cover} />
            </Card>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={5}
            spacing={1}
            justify="center"
            className={classes.bioSection}
          >
            <Grid item>
              <Typography
                className={classes.Typography}
                variant="h4"
                align="right"
              >
                {instructor.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                align="right"
                style={{ color: "#b02020" }}
              >
                Dream Theatre
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="justify"
                className={classes.Typography}
                variant="body2"
              >
                {instructor.bio}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid
          item
          container
          direction="row"
          style={{
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          }}
        >
          <Grid item>
            <Paper style={{ padding: theme.spacing(5) }}>
              <Typography variant="body1" align="left">
                {instructor.bio}
              </Typography>
            </Paper>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          align="left"
          style={{ margin: theme.spacing(3, 0, 3, 0) }}
          className={classes.Typography}
        >
          Featured Courses
        </Typography>
      </Grid>
      <Grid item>
        {/* <CourseViewHome from="InstructorPage" courses={courses}/> */}
        <CourseCard
          courses={courses}
          style={{ paddBottom: theme.spacing(3) }}
        />
      </Grid>
    </div>
  );
}
