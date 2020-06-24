import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";

export default function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=JxPj3GAYYZ0"
      width="auto"
      height="600px"
    />
  );
}
