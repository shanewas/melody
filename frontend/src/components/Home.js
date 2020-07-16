import React from "react";
import Carousel from "./ResponsiveCarousel";
import "../App.css";
import Navbar from "./Navbar";
import FAQView from "./FAQView";
import { Grid, Divider, makeStyles } from "@material-ui/core";

import TopViewHome from "./TopViewHome";
import InstructorViewHome from "./InstructorViewHome";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import CourseViewHome from "./CourseViewHome";
import Info from "./Info";
import Footer from "./Footer";
import theme from "../theme";

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
    background: "#FF0000",
  },
}));

function App() {
  const classes = useStyles();
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
          <CourseViewHome />
        </Grid>
        <Grid item justify="center" lg={12} sm={12} md={12} xs={12}>
          <VideoPlayer url="https://www.youtube.com/embed/I41fXTW-R6I" />
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <InstructorViewHome />
        </Grid>
      </Grid>
      <Grid item className={classes.Divider2}>
        <Divider />
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
            <Carousel />
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item lg={2}></Grid>
          <Grid item lg={8} sm={12} md={12} xs={12}>
            <Info />
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
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
