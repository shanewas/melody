import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./components/Topnav";
import { Grid } from "@material-ui/core";

import TopViewHome from "./components/TopViewHome";
import CourseViewHome from "./components/CoursesViewHome";
import InstructorViewHome from "./components/InstructorViewHome";
import VideoPlayer from "./components/VideoPlayer";

import Album from "./components/Album";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <PrimarySearchAppBar />
        </Grid>
        <Grid item>
          <TopViewHome />
        </Grid>
        <Grid item>
          <CourseViewHome />
        </Grid>
        <Grid item>
          <VideoPlayer />
        </Grid>
        <Grid item>
          <InstructorViewHome />
        </Grid>
        {/* <Grid item>
          <Album />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default App;
