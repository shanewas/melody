import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class VideoPlayer extends Component {
  render() {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=JxPj3GAYYZ0"
        width="auto"
        height="400px"
      />
    );
  }
}
