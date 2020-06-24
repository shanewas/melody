import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./components/Topnav";
import FAQView from "./components/FAQView";
import { Grid, Paper, Divider, CardMedia, makeStyles } from "@material-ui/core";

import TopViewHome from "./components/TopViewHome";
import InstructorViewHome from "./components/InstructorViewHome";
import VideoPlayer from "./components/VideoPlayer";
import Album from "./components/Album";

import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  divider: {
	background: theme.palette.primary.light,
	marginTop: theme.spacing(10)
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <PrimarySearchAppBar />
        </Grid>
        <br />
        <Grid item>
          <TopViewHome />
        </Grid>
        <Grid item>
          <Album />
        </Grid>
        <Grid>
          <VideoPlayer />
        </Grid>

        <Grid item>
          <InstructorViewHome />
        </Grid>
        <Grid item>
          <FAQView />
        </Grid>
        <Grid item>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
