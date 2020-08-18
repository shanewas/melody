const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const { authentication, apiAuth } = require("../middleware/authentication");
const { registerValidation, loginValidation } = require("../validation");
const Analytics = require("../models/Analytics.model");
const Course = require("../models/Course.model");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join("storage", "photo"));
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
	},
});
const fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const user = multer({
	storage,
	limits: { fileSize: 1024 * 1024 * 10 },
	fileFilter,
});

//GET by ID
router.route("/:userId").get((req, res) => {
	const id = req.params.userId;
	User.findById(id)
		.then((doc) => {
			if (doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json(doc);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

//GET by TOKEN
router.route("/_ga/:token").get((req, res) => {
	const v_token = req.params.token;
	User.find({ v_token })
		.then((doc) => {
			if (doc < 1) {
				res.status(200).json({ status: "CREEP" });
			} else {
				res.status(200).json({ status: "OK" });
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

//GET all user course
router
	.use(apiAuth)
	.route("/course")
	.post((req, res) => {
		const id = Mongoose.Types.ObjectId(req.body["id"]);
		User.find({ _id: id })
			.then((doc) => {
				if (doc) {
					const course_id = new Array();
					for (let index = 0; index < doc[0]["course"].length; index++) {
						course_id.push(doc[0]["course"][index][0]);
					}
					Course.find({
						_id: {
							$in: course_id,
						},
					})
						.then((docs) => {
							res.status(200).json(docs);
						})
						.catch((err) => res.status(400).json("Error: " + err));
				} else {
					res.status(404).json(doc);
				}
			})
			.catch((err) => res.status(400).json("Error: " + err));
	});

//LOGIN
router.route(`/login`).post((req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	User.find({ email })
		.then((docs) => {
			if (docs.length > 0) {
				bcrypt.compare(password, docs[0].password, (err, result) => {
					// if (err) {
					// 	return res.status(401).json({ message: "Auth failed!" });
					// }
					if (result) {
						jwt.sign(
							{ email, password },
							process.env.SECRET_KEY,
							{ expiresIn: "1h" },
							(err, token) => {
								User.findByIdAndUpdate(
									docs[0]._id,
									{ $set: { v_token: token } },
									{ useFindAndModify: false }
								).catch((err) => res.status(400).json("v_token error: " + err));
								res.header("auth-token", token);
								return res.status(200).json({
									message: "Authentication Successful !",
									id: docs[0]._id,
									name: docs[0].name,
									email: docs[0].email,
									course: docs[0].course,
									previousCourse: docs[0].previousCourse,
									v_token: token,
								});
							}
						);
					} else {
						return res.status(401).json({
							message: "Authentication Failed !!!",
						});
					}
				});
			} else {
				return res.status(401).json({
					message: "Authentication Failed !!!",
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

router
	.use(apiAuth)
	.use(user.single("photo"))
	.route("/signup")
	.post((req, res) => {
		const { error } = registerValidation(req.body);
		if (error) return res.status(400).send(error.details[0].message);

		const name = req.body.name;
		const photo = req.file.path;
		const age = req.body.age;
		const phone = req.body.phone;
		const address = req.body.address;
		const email = req.body.email;
		const password = req.body.password;
		const course = req.body.course;
		const previousCourse = req.body.previousCourse;

		User.find({ email }).then((user) => {
			if (user.length >= 1) {
				return res.status(409).json({ message: "Mail exists" });
			} else {
				bcrypt.hash(password, 10, (err, hash) => {
					if (err) {
						return res.status(500).json({ error: err });
					} else {
						const newUser = new User({
							name,
							photo,
							age,
							phone,
							address,
							email,
							password: hash,
							course,
							previousCourse,
						});
						newUser
							.save()
							.then(() => {
								Analytics.findOneAndUpdate(
									{ _id: "5f37f0b2c5e1655598887cb8" },
									{ $inc: { user: 1 } },
									{ useFindAndModify: false }
								).exec();
								res.status(200).json({
									message: `user added!`,
									id: newUser._id,
								});
							})
							.catch((err) => res.status(500).json("Error: " + err));
					}
				});
			}
		});
	});

router
	.use(apiAuth)
	.route("/")
	.get((req, res) => {
		User.find()
			.then((user) => res.json(user))
			.catch((err) => res.status(400).json("Error: " + err));
	});

module.exports = router;
