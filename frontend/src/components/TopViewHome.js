import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

import VideoPlayer from "./videoPlayer/VideoPlayer";
import theme from "../theme";

import axios from "../api/Config";

import Path from "path";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: "0px",
  },
  button: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(7),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(14),
    },
    "&:hover": {
      background: theme.palette.primary.dark,
      color:theme.palette.primary.light
    },

    "&:focus": {
      outline: "none",
    },
  },
  TypographyTitle: {
    color: theme.palette.secondary.contrastText,
  },
  TypographyText: {
    color: theme.palette.text.secondary,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  const [video, setVideo] = useState("");

  useEffect(() => {
    getCourseData();
  }, []);

  function getCourseData() {
    axios
      .get("video/5f147d66d4c1340a1b1ff499/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const data = res.data;
        // console.log(data.file);
        // setState({ video: url });
        setVideo(data.file);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      spacing={theme.spacing(1)}
    >
      <Grid item xs={12} md={6}>
        <Grid item>
          <Typography
            variant="h2"
            component="h2"
            align="left"
            // className={classes.TypographyTitle}
          >
            TODAY'S <br />
            THE DAY
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            // className={classes.TypographyText}
          >
            Learn from 10+ of Bangladesh’s most acclaimed Musicians
          </Typography>
        </Grid>
        <Grid item align="left">
          <Button
            variant="contained"
            href="#contained-buttons"
            className={classes.button}
          >
            Let's Get Started
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <VideoPlayer url={"http://162.0.231.67/" + video} />
      </Grid>
    </Grid>
  );
}
