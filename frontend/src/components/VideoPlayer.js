import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
  },
}));

export default function VideoPlayer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=JxPj3GAYYZ0"
        width="auto"
        height="600px"
      />
    </div>
  );
}
