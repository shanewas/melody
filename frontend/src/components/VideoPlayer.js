import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10),
  },
}));

export default function VideoPlayer() {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    //   <ReactPlayer
    //     url="https://www.youtube.com/watch?v=JxPj3GAYYZ0"
    //     width="auto"
    //     height="600px"
    //   />
    // </div>
    <iframe
      src="https://drive.google.com/file/d/1RR3Mx13NakDSKKZxvQ1vDJSTEaNfrPX7/preview"
      width="800"
      height="500"
      frameBorder="0"
      className={classes.root}
    ></iframe>
  );
}
