const router = require("express").Router();
const Course = require("../models/course.model");

router.route("/").get((req, res) => {
	Course.find()
		.then((courses) => res.json(courses))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const title = req.body.title;
	// const subtitle = req.body.subtitle;
	// const description = req.body.description;
	// const catagory = req.body.catagory;
	// const level = req.body.level;
	// const sublevel = req.body.sublevel;
	// const videos = req.body.videos;
	const instructor = req.body.instructor;
	// const preRequisites = req.body.preRequisites;
	// const requirements = req.body.requirements;
	// const nextCourses = req.body.nextCourses;
	// const RelatedCourse = req.body.RelatedCourse;
	// const courseHour = req.body.courseHour;
	// const document = req.body.document;
	// const price = req.body.price;
	// const validity = req.body.validity;
	// const studentReviews = req.body.studentReviews;
	// const certificate = req.body.certificate;
	const newCourse = new Course({
		title,
		// subtitle,
		// description,
		// catagory,
		// level,
		// sublevel,
		// videos,
		instructor,
		// preRequisites,
		// requirements,
		// nextCourses,
		// RelatedCourse,
		// courseHour,
		// document,
		// price,
		// validity,
		// studentReviews,
		// certificate,
	});
	newCourse
		.save()
		.then(() => res.json(`course added!`))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
