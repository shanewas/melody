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
    padding: theme.spacing(3, 2),
  },
  button: {
    background: "rgba(225, 7, 18, .87)",
    color: "rgba(255,255,255,.87)",
    marginTop:theme.spacing(6)
  },
  Typography: {
    fontSize: 50
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Paper square>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item lg={4} md={6} xs={12} className={classes.root}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography
                variant="H1"
                component="H1"
                align="Left"
                className={classes.Typography}
              >
                TODAY'S <br/> 
                THE DAY
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="p"
                component="p"
                align="Left"
              >
                Learn from 10+ <br /> of Bangladesh’s most acclaimed Musicians
                !!
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                fullWidth="true"
                size="large"
                href="#contained-buttons"
                className={classes.button}
              >
                Let's Get Started!
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
            <VideoPlayer/>
        </Grid>
      </Grid>
    </Paper>
  );
}
