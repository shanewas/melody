import axios from "axios";
import React, {Component} from "react";

const APIKey = "AIzaSyDCchz0rfNqFc9xfLSxGkZI8-HlPIzoJfI";
const ChanelId = "UCnRI0ay61tY-fKYzzB3fCnw";
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${ChanelId}&maxResults=${result}`;
console.log(finalURL);

export default function Youtube() {
  return <div>I am from youtube</div>;
}
// axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3/",
//   params: {
//     part: "snippet",
//     maxResults: 10,
//     key: APIKey,
//   },
// });

axios
  .get(finalURL)
  .then(function (response) {
    console.log(response);
    const res = response.data.items[0].id.videoId;
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
