const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const Course = require("../models/Course.model");
const Instructor = require("../models/Instructor.model");
const Analytics = require("../models/Analytics.model");
const Sold = require("../models/Sold.model");

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
				Course.findByIdAndUpdate(
					{ _id: course },
					{ $inc: { sold: 1 } },
					{ useFindAndModify: false }).then((doc) => {
						if (doc) {
							const ammount = Number(doc.price);
							const instructor = doc.instructor;

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
								{ _id: instructor },
								{ $inc: { sold: 1 } },
								{ useFindAndModify: false })
								.then((doc) => {
									let instructor_earning = ammount - ((doc.percentage * ammount) / 100);
									Instructor.findByIdAndUpdate(
										{ _id: instructor },
										{ $inc: { earnings: (doc.percentage * ammount) / 100 } },
										{ useFindAndModify: false }).exec().catch((err) => { throw err });
									Sold.findOneAndUpdate(
										{ courseId: course },
										{
											$inc: { sold: 1, ammount: instructor_earning },
											$push: {
												dateTime: `${currentTime.getDate()}/${currentTime.getMonth()}/${currentTime.getFullYear()}`,
												user: user
											}
										},
										{ useFindAndModify: false }
									)
										.then((doc) => {
											if (doc) {
												res.status(200).json(`Course purchase Successfully!`);
											} else {
												const newSold = new Sold({
													courseId: course,
													user,
													dateTime: `${currentTime.getDate()}/${currentTime.getMonth()}/${currentTime.getFullYear()}`,
													ammount: instructor_earning,
													instructor
												});
												newSold.save().then(() => {
													res.status(200).json(`Course purchase Successfully!`);
												}).catch((err) => {
													throw err;
												});
											}
										}).catch((err) => {
											throw err;
										});
								});
						} else {
							res.status(404).json(`Course purchase Failed!`);
						}
					})
			} else {
				res.status(404).json(`Course purchase Failed!`);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));

});

module.exports = router;
