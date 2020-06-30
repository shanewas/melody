import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyBnuki5-aJBYxwv17HKL31LcYDLW6T3p9k' 
  },
});
