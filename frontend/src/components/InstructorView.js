import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Grid } from "@material-ui/core";
import { PlayCircleFilledWhite } from "@material-ui/icons";

import "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  Typography: {
    color: theme.palette.secondary.contrastText,
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item>
        <Avatar
          alt="Tom Morello"
          src="https://images-na.ssl-images-amazon.com/images/I/B1GPYA32OiS._CR0,0,3840,2880_._SL1000_.png"
          className={classes.large}
        />
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6" className={classes.Typography}>Tom Morello</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h7" className={classes.Typography}>Teaches Electric Guitar</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h7" className={classes.Typography}>26 video lessons (5h 36m)</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
