import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import VideoPlayer from "./VideoPlayer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    background: "#000"
  },
  button: {
    background: "rgba(225, 7, 18, .87)",
    color: "rgba(255,255,255,.87)",
    marginTop: theme.spacing(6),
  },
  Typography: {
    fontSize: 50,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
      <Grid item lg={6} md={6} xs={12}>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="H1"
              component="H1"
              align="Left"
              className={classes.Typography}
            >
              TODAY'S <br />
              THE DAY
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p" component="p" align="Left">
              Learn from 10+ <br /> of Bangladesh’s most acclaimed Musicians !!
            </Typography>
          </Grid>
          <Grid item align="left" lg={4}>
            <Button
              variant="contained"
              size="large"
              href="#contained-buttons"
              className={classes.button}
              fullWidth="true"
            >
              Let's Get Started!
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} md={6} xs={12} className={classes.VideoPlayer}>
        <VideoPlayer />
      </Grid>
    </Grid>
  );
}
