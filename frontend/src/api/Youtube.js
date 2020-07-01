import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
      part: 'id,snippet',
      maxResults: 5,
      key: 'AIzaSyBnuki5-aJBYxwv17HKL31LcYDLW6T3p9k' ,
      channelId:'UCnRI0ay61tY-fKYzzB3fCnw',
  },
});
