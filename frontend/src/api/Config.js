const axios = require("axios");

// import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8080/api/v1/",
});

// instance
// 	.post(
// 		"user/login",
// 		{
// 			email: "tanzeerhossain@zoho.com",
// 			password: "123321",
// 		},
// 		{ withCredentials: true }
// 	)
// 	.then((res) => {
// 		console.log(res.headers["set-cookie"]);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

instance
	.get("course", {
		headers: {
			"auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
		},
	})
	.then((res) => {
		console.log(res.headers);
	});
