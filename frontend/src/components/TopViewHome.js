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

import vid from "../storage/video/intro.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  button: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(6),
  },
  TypographyTitle: {
    color: theme.palette.secondary.contrastText,
  },
  TypographyText: {
    color: theme.palette.text.secondary,
  },
  Box: {
    color: theme.palette.secondary.main,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  const [video, setVideo] = useState("");

  useEffect(() => {
    getCourseData();
  });

  function getCourseData() {
    axios
      .get("video/5f147d66d4c1340a1b1ff499/", {})
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
      className={classes.root}
      direction="row"
      spacing={theme.spacing(1)}
    >
      <Grid
        item
        lg={4}
        md={6}
        sm={12}
        xs={12}
        container
        direction="column"
        alignContent="center"
      >
        <Grid item>
          <Box border={5} width="75%" className={classes.Box}>
            <Typography
              variant="h2"
              component="h2"
              align="left"
              className={classes.TypographyTitle}
            >
              TODAY'S <br />
              THE DAY
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            className={classes.TypographyText}
          >
            Learn from 10+ of Bangladesh’s most acclaimed Musicians
          </Typography>
        </Grid>
        <Grid item container justify="flex-start">
          <Button
            variant="contained"
            href="#contained-buttons"
            className={classes.button}
          >
            Let's Get Started
          </Button>
        </Grid>
      </Grid>
      <Grid item lg={8} md={6} sm={12} xs={12}>
        {console.log("http://162.0.231.67/"+video)}

        <VideoPlayer url={"http://162.0.231.67/"+video} />
      </Grid>
    </Grid>
  );
}
