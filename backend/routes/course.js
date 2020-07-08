const router = require("express").Router();
const Course = require("../models/course.model");

router.route("/").get((req, res) => {
	Course.find()
		.then((courses) => res.json(courses))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const title = req.body.title;
	const newCourse = new Course({ title });
	newCourse 
		.save()
		.then(() => res.json(`user added!`))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
