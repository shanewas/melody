const router = require("express").Router();
const StudentReviews = require("../models/studentReviews.model");

router.route("/").get((req, res) => {
	StudentReviews.find()
		.then((StudentReviews) => res.json(StudentReviews))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const user = req.body.user;
	const review = req.body.review;
	const newStudentReviews = new StudentReviews({
		user,
		review,
	});
	newStudentReviews
		.save()
		.then(() => res.json(`Student Review added!`))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
