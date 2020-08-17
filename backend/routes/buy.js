const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const Course = require("../models/Course.model");
const Instructor = require("../models/Instructor.model");
const Analytics = require("../models/Analytics.model");

//BUY
router.route("/").post((req, res) => {
	const user = Mongoose.Types.ObjectId(req.body.user);
	const course = Mongoose.Types.ObjectId(req.body.course);
	var query = {};
	for (var key in req.query) {
		query[key] = new RegExp(`${req.query[key]}`, "i");
	}
	var currentTime = new Date();

	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();

	User.findByIdAndUpdate(
		{ _id: user },
		{ $push: { course: [course, currentTime] } },
		{ useFindAndModify: false }
	)
		.then((doc) => {
			if (doc) {
				res.status(200).json(`User purchased new course successfully!`);
			} else {
				res.status(404).json(`Course purchase Failed!`);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));

	Course.findByIdAndUpdate(
		{ _id: course },
		{ $inc: { sold: 1 } },
		{ useFindAndModify: false }
	)
		.then((doc) => {
			if (doc) {
				Analytics.findByIdAndUpdate(
					{ _id: "5f37f0b2c5e1655598887cb8" },
					{ $inc: { sold: 1 } },
					{ useFindAndModify: false }
				)
					.exec()
					.catch((err) => {
						throw err;
					});
				Instructor.findByIdAndUpdate(
					{ _id: Mongoose.Types.ObjectId(doc["instructor"]) },
					{ $inc: { sold: 1 } },
					{ useFindAndModify: false }
				)
					.exec()
					.catch((err) => {
						throw err;
					});
			} else {
				res.status(404).json(`Course purchase Failed!`);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
