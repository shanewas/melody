const axios = require("axios");

// import axios from "axios";

const instance = axios.create({
  baseURL: "http://162.0.231.67/api/v1/",
});

export default instance;
