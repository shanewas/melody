import React, { useState, useEffect } from "react";
import Topnav from "./Navbar";
import instance from "../api/Config";
import {
  Backdrop,
  Paper,
  Toolbar,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import theme from "../theme";
const useStyles = makeStyles((theme) => ({
  cover: {
    width: 100,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function InstructorPage(props) {
  const classes = useStyles();
  const [imageHeight, setImageHeight] = useState("");
  const instructor = props.location.state;
  const imageUrl = "http://162.0.231.67/" + instructor.photo;

  console.log("instructor name inside single course view: " + instructor);
  // getWindowHeight();
  function getWindowHeight() {
    let intViewportHeight = window.innerHeight / 2;
    console.log("window height = " + intViewportHeight);
    setImageHeight(intViewportHeight);
  }

  useEffect(() => {
    getWindowHeight();
  }, []);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      {console.log("photo url: " + instructor.photo)}
      <Topnav />
      <Toolbar />

      <img height={imageHeight} width="100%" src={imageUrl} />

      <Grid container direction="row" style={{ padding: theme.spacing(2) }}>
        <Grid item>
          <Paper style={{ padding: theme.spacing(5) }}>
            <Typography variant="h4" align="left">
              {instructor.name}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ marginTop: theme.spacing(5) }}
            >
              {instructor.bio}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
