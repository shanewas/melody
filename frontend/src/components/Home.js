import React from "react";
import Carousel from "./Carousel";
import "../App.css";
import Navbar from "./Navbar";
import FAQView from "./FAQView";
import { Grid, Paper, Divider, CardMedia, makeStyles } from "@material-ui/core";

import TopViewHome from "./TopViewHome";
import InstructorViewHome from "./InstructorViewHome";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import CourseViewHome from "./CourseViewHome";

import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  Divider: {
    background: theme.palette.primary.light,
    marginTop: theme.spacing(10),
  },
  VideoPlayer: {
    display: "flex",
    padding: theme.spacing(10),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>
        <br />
        <Grid item>
          <TopViewHome />
        </Grid>
        <Grid item>
          <CourseViewHome />
        </Grid>
        <Grid container justify="center" className={classes.VideoPlayer}>
          <Grid item lg={12}>
            <VideoPlayer url="https://www.youtube.com/embed/I41fXTW-R6I" />
          </Grid>
        </Grid>
        <Grid item>
          <InstructorViewHome />
        </Grid>
        <Grid item>
          <FAQView />
        </Grid>
        <Grid item>
          <Carousel />
        </Grid>

        <Grid item className={classes.Divider}>
          <Divider />
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
