const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");

function authentication(req, res, next) {
	if (req.headers.cookie) {
		const token = req.headers.cookie
			.split("; ")
			.find((c) => c.startsWith("token"))
			.split("=")[1];
		if (token !== "token") {
			var email, password;
			try {
				const decoded = jwt.verify(token, process.env.SECRET_KEY);
				email = decoded.email;
				password = decoded.password;
			} catch (error) {
				console.log("Auth error !");
			}

			User.find({ email })
				.then((user) => {
					if (user.length < 1) {
						console.log({ message: "Not Found ..." });
					}
					bcrypt.compare(password, user[0].password, (err, result) => {
						if (err) {
							console.log({ message: "Auth failed!" });
							return res.sendStatus(403);
						}
						if (result) {
							// console.log({ message: `Welcome back ${email} !` });
							next();
						} else {
							console.log({ message: `Auth Failed !` });
							return res.sendStatus(403);
						}
					});
				})
				.catch((err) => {
					console.log({
						error: err,
						message: "Error !!",
					});
					return res.sendStatus(403);
				});
		} else {
			return res.sendStatus(403);
		}
	} else {
		return res.sendStatus(403);
		// next();
	}
}

module.exports = { authentication };
