const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const { authentication } = require("../middleware/authentication");

router.route(`/login`).post((req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	User.find({ email })
		.then((user) => {
			if (user.length < 1) {
				res.cookie("token", "token", { httpOnly: true });
				return res.status(404).json({ message: "Not Found ..." });
			} else {
				bcrypt.compare(password, user[0].password, (err, result) => {
					if (err) {
						return res.status(401).json({ message: "Auth failed!" });
					}
					if (result) {
						jwt.sign(
							{ email, password },
							process.env.SECRET_KEY,
							{ expiresIn: "1h" },
							(err, token) => {
								res.cookie("token", token, { httpOnly: true });
								return res.status(200).json({
									message: "Authentication Successful !",
								});
							}
						);
					} else {
						res.cookie("token", "token", { httpOnly: true });
						return res.status(401).json({
							message: "Auth Failed !!!",
						});
					}
				});
			}
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
				message: "Error !!",
			});
		});
});

router.route("/signup").post((req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	User.find({ email }).then((user) => {
		if (user.length >= 1) {
			return res.status(409).json({ message: "Mail exists" });
		} else {
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) {
					return res.status(500).json({ error: err });
				} else {
					const newUser = new User({
						email,
						password: hash,
					});
					newUser
						.save()
						.then(() => {
							res.json(`user added!`);
						})
						.catch((err) => res.status(500).json("Error: " + err));
				}
			});
		}
	});
});

router
	.use(authentication)
	.route("/")
	.get((req, res) => {
		User.find()
			.then((user) => res.json(user))
			.catch((err) => res.status(400).json("Error: " + err));
	});

module.exports = router;
