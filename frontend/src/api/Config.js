const axios = require("axios");

const instance = axios.create({
	baseURL: "http://localhost:8080/api/v1/",
});

module.exports = instance;
