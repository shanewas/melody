import axios from "../api/Config";

class Auth {
	constructor() {
		this.authenticated = false;
	}

	login() {
		this.authenticated = true;
	}

	logout() {
		this.authenticated = false;
		localStorage.removeItem("v_token");
		localStorage.removeItem("v_auth");
	}

	isAuthenticated() {
		let _id = localStorage.getItem("v_token");
		axios
			.get(`user/_ga/${_id}`, {
				headers: {
					"auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
				},
			})
			.then((res) => {
				if (res.data.status === "OK") {
					console.log("authas" + JSON.stringify(res.data.status));
					return this.authenticated;
				} else {
					this.authenticated = false;
					return this.authenticated;
				}
			})
			.catch((err) => {
				// localStorage.removeItem("v_token");
				// localStorage.removeItem("v_auth");
			});
	}
}

export default new Auth();
