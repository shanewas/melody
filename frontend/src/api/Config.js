const axios = require("axios");

// import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8080/api/v1/",
});

instance
	.post(
		"user/login",
		{
			email: "tanzeerhossain@zoho.com",
			password: "123321",
		},
		{ withCredentials: true }
	)
	.then((res) => {
		instance
			.get("course", {
				headers: {
					"set-cookie": `${res.headers["set-cookie"]}`,
				},
				withCredentials: true,
			})
			.then((res) => {
				console.log(res);
			});
	})
	.catch((error) => {
		console.log(error);
	});
