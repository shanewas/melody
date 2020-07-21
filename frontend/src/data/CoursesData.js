import React, { Component } from "react";
import axios from "../api/Config";

import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import Video from "./hd1967.mov";
import URL from "url";
export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "",
    };
  }
  //   getUsersData() {
  //     axios
  //       .post("user/login/", {
  //         email: "dev@methodmelody.com",
  //         password: "developer2020lms",
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         this.getCourseData();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  getCourseData() {
    axios
      .get("video/5f13f9b0a866a353303776a3/", {})
      .then((res) => {
        const data = res.data;
        // console.log(data.file);

        // const input = document.querySelector("[type=file]");
        // const url = URL.createObjectURL("intro.mp4");
        this.setState({ video: url });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getCourseData();
  }
  render() {
    return (
      <div>
        {/* <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
        <VideoPlayer url={Video}/>
      </div>
    );
  }
}
