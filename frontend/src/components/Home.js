import React, { useEffect, useState } from "react";
import InstructorCarousel from "./InstructorCarousel";
import "../App.css";
import Navbar from "./Navbar";
import FAQView from "./FAQView";
import { Grid, Divider, makeStyles, Typography, Toolbar } from "@material-ui/core";

import CarouselHome from "./Home/Carousel";
import InstructorViewHome from "./InstructorViewHome";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import CourseViewHome from "./CourseViewHome";
import Info from "./Info";
import Footer from "./Footer";
import theme from "../theme";
import StudentFeedbackCarousel from "./StudentFeedbackCarousel";

import instance from "../api/Config";
import ContactUsForm from "./Forms/ContactUsForm";

const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
    margin: "0px",
  },
  Carousel: {
    // color: theme.palette.primary.light,
    // marginTop: theme.spacing(8),
  },
  Typography: {
    // marginBottom: theme.spacing(4),
    // color: theme.palette.secondary.contrastText,
  },
}));

function App() {
  const classes = useStyles();

  const [video, setVideo] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [instructorList, setInstructorList] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [res, setRes] = useState("");

  useEffect(() => {
    // login();
    getIntroVideo();
    getCourses();
    getInstructors();
    getAnalytics();
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

  //get analytics for the site
  function getAnalytics() {
    instance
      .get("analytics/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(
          "analytics fetched in admin: " + JSON.stringify(res.data[0])
        );
        setAnalytics(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
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
      .get("course/featured/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res, err) => {
        const courseList = res.data;
        setCourseList(courseList);
        console.log("course list fetched in home: " + res.data.length);
      });
  }

  //get all instructor list from server later it will be list of all featured instructors
  function getInstructors() {
    instance
      .get("instructor/featured/", {
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
      <Navbar />
      <Toolbar/>
      <CarouselHome />
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={theme.spacing(1)}
        className={classes.Grid}
      >
        {/* courselist */}
        <Grid item xs={12} >
          <CourseViewHome
            courses={courseList}
            totalCourse={analytics.course}
            from="Home"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {/* video player mid page */}
        <Grid item xs={12}>
          <VideoPlayer url={"http://162.0.231.67/" + video} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {/* instructorList */}
        <Grid item xs={12}>
          <InstructorViewHome instructors={instructorList} from="Home" />
        </Grid>
        {/* <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.Typography}>
            Meet our Instructors
          </Typography>
        </Grid>
        <Grid item xs={8} className={classes.Carousel}>
          <InstructorCarousel />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid> */}
        <Grid item xs={8}>
          <Info
            numberOfCourse={courseList.length}
            numberOfInstructors={instructorList.length}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item lg={12}>
          <Typography variant="h4" className={classes.Typography}>
            Our Student's Feedback
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <StudentFeedbackCarousel />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FAQView />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <ContactUsForm />
        </Grid>
        {/* divider */}
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {/* footer */}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
