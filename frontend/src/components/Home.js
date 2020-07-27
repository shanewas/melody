import React, { useEffect, useState } from "react";
import InstructorCarousel from "./InstructorCarousel";
import "../App.css";
import Navbar from "./Navbar";
import FAQView from "./FAQView";
import {
  Grid,
  Divider,
  makeStyles,
  Typography,
  FormControl,
} from "@material-ui/core";

import TopViewHome from "./TopViewHome";
import InstructorViewHome from "./InstructorViewHome";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import CourseViewHome from "./CourseViewHome";
import Info from "./Info";
import Footer from "./Footer";
import theme from "../theme";
import StudentFeedbackCarousel from "./StudentFeedbackCarousel";

import instance from "../api/Config";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
  Divider: {
    background: theme.palette.secondary.light,
    marginTop: theme.spacing(10),
  },
  Divider2: {
    background: theme.palette.secondary.light,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  Carousel: {
    color: theme.palette.primary.light,
    marginTop: theme.spacing(8),
  },
  Typography: {
    marginBottom: theme.spacing(4),
    color: theme.palette.secondary.contrastText,
  },
}));

function App() {
  const classes = useStyles();

  const [video, setVideo] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [instructorList, setInstructorList] = useState([]);

  const [res, setRes] = useState("");

  useEffect(() => {
    // login();
    getIntroVideo();
    getCourses();
    getInstructors();
  }, []);

  //get the 2 videos in Home Page
  function getIntroVideo() {
    instance
      .get("video/5f147d66d4c1340a1b1ff499/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const data = res.data;

        setVideo(data.file);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // //login
  // function login() {
  //   instance
  //     .post("user/login/", {
  //       email: "tanzeerhossain@zoho.com",
  //       password: "123321",
  //     })
  //     .then((res) => {
  //       console.log("login response: " + JSON.stringify(res.headers));
  //       setRes(`${res.headers["set-cookie"]}`);
  //       getCourses();
  //     });
  // }

  //get all courses from server later it will be list all featured courses
  function getCourses() {
    instance
      .get("course/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const courseList = res.data;
        setCourseList(courseList);
        console.log("course list fetched in home: " + courseList);
      });
  }

  //get all instructor list from server later it will be list of all featured instructors
  function getInstructors() {
    instance
      .get("instructor/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const instructorList = res.data;
        setInstructorList(instructorList);
        console.log("instructor list fetched in home: " + instructorList);
      });
  }

  return (
    <div className="App">
      <Grid container direction="column" spacing={theme.spacing(1)}>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Navbar />
        </Grid>
        <br />
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <TopViewHome />
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <CourseViewHome courses={courseList} />
        </Grid>
        <Grid container direction="row">
          <Grid item lg={2}></Grid>
          <Grid item justify="center" lg={8} sm={12} md={12} xs={12}>
            <VideoPlayer url={"http://162.0.231.67/" + video} />
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <InstructorViewHome instructors={instructorList} />
        </Grid>
      </Grid>
      <Grid item className={classes.Divider2}>
        <Divider />
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h4" className={classes.Typography}>
          Meet our Instructors
        </Typography>
      </Grid>
      <Grid container direction="column" spacing={theme.spacing(1)}>
        <Grid container direction="row">
          <Grid item lg={2}></Grid>
          <Grid
            item
            lg={8}
            sm={12}
            md={12}
            xs={12}
            className={classes.Carousel}
          >
            <InstructorCarousel />
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item lg={2}></Grid>
          <Grid item lg={8} sm={12} md={12} xs={12}>
            <Info
              numberOfCourse={courseList.length}
              numberOfInstructors={instructorList.length}
            />
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
        <Grid item lg={12}>
          <Typography variant="h4" className={classes.Typography}>
            Our Student's Feedback
          </Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item lg={4}></Grid>
          <Grid item lg={4}>
            <StudentFeedbackCarousel />
          </Grid>
          <Grid item lg={4}></Grid>
        </Grid>

        {/* <Grid item lg={12}>
          <ContactForm />
        </Grid> */}

        <Grid item lg={12} sm={12} md={12} xs={12}>
          <FAQView />
        </Grid>
        {/* end */}
      </Grid>

      <Grid item className={classes.Divider}>
        <Divider />
      </Grid>
      <Grid container direction="column" spacing={theme.spacing(1)}>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
