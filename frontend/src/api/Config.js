const axios = require("axios");

const instance = axios.create({
	baseURL: "http://162.0.231.67/api/v1/",
});

module.exports = instance;
