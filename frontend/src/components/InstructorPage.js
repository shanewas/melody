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
  SvgIcon,Divider
} from "@material-ui/core";
import theme from "../theme";
import Footer from "./Footer";
import CourseViewHome from "./CourseViewHome";

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

  //All courses list
  const [courses, setCourses] = useState([]);
  //Featured courses list
  const [coursesFeatured, setCoursesFeatured] = useState([]);
  //Best seller courses list
  const [coursesTopSellers, setCoursesTopSellers] = useState([]);

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
        var publishedList = [];
        var featuredList = [];
        var topSellerList = [];

        //filtering out the published courses for this particualr instructor
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].published === true) {
            publishedList.push(res.data[i]);
          }
        }
        setCourses(publishedList);

        //filtering out the feaatured courses for this particualr instructor
        for (var i = 0; i < publishedList.length; i++) {
          if (publishedList[i].featured === true) {
            featuredList.push(publishedList[i]);
          }
        }
        setCoursesFeatured(featuredList);

        //filtering out the top seller (top 1 seller) courses for this particualr instructor
        publishedList.sort((a, b) => b.sold - a.sold);
        topSellerList.push(publishedList[0]);

        setCoursesTopSellers(topSellerList);

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

      <Grid container direction="column">
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
        <Grid
          item
          container
          direction="row"
          style={{
            backgroundColor: theme.palette.secondary.main,
          }}
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            container
            direction="row"
            lg={2}
            md={2}
            sm={4}
            xs={12}
            spacing={1}
            justify="center"
          >
            <Grid item>
              <SvgIcon>
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 4c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" />
              </SvgIcon>
            </Grid>
            <Grid item>
              {courses.length > 1 && (
                <Typography variant="body1">
                  {courses.length} Courses
                </Typography>
              )}
              {courses.length == 1 && (
                <Typography variant="body1">{courses.length} Course</Typography>
              )}
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={2}
            md={2}
            sm={4}
            xs={12}
            spacing={1}
            justify="center"
          >
            <Grid item>
              <SvgIcon>
                <path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
              </SvgIcon>
            </Grid>
            <Grid item>
              <Typography variant="body1">10 Lessons</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={2}
            md={2}
            sm={4}
            xs={12}
            spacing={1}
            justify="center"
          >
            <Grid item>
              <SvgIcon>
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z" />
              </SvgIcon>
            </Grid>
            <Grid item>
              <Typography variant="body1">30 days Access</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CourseViewHome courses={courses} from="All" />
        </Grid>
        <Grid item>
          <CourseViewHome courses={coursesFeatured} from="Featured" />
        </Grid>
        <Grid item>
          <CourseViewHome courses={coursesTopSellers} from="Top Selling" />
        </Grid>
        <Grid item>
          <Divider/>
        </Grid>
        <Grid item style={{ marginTop: theme.spacing(10) }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
