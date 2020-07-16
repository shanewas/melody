const router = require("express").Router();
const Course = require("../models/course.model");
const { Mongoose } = require("mongoose");

router.route("/").get((req, res) => {
	Course.find()
		.then((courses) => res.json(courses))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:courseId").get((req, res) => {
	const id = req.params.courseId;
	Course.findById(id)
		.then((doc) => {
			if (doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json(doc);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:key/:value").get((req, res) => {
	var query = {};
	query[req.params.key] = req.params.value;
	Course.find(query)
		.then((doc) => {
			if (doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json(doc);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:key/:value").delete((req, res) => {
	var query = {};
	query[req.params.key] = req.params.value;
	Course.deleteMany(query)
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const title = req.body.title;
	const subtitle = req.body.subtitle;
	const desc = req.body.desc;
	const catagory = req.body.catagory;
	const level = req.body.level;
	const sublevel = req.body.sublevel;
	const video = req.body.video;
	const instructor = req.body.instructor;
	const preRequisite = req.body.preRequisite;
	const requirements = req.body.requirements;
	const nextCourses = req.body.nextCourses;
	const relatedCourse = req.body.relatedCourse;
	const courseHour = req.body.courseHour;
	const document = req.body.document;
	const price = req.body.price;
	const validity = req.body.validity;
	const studentReviews = req.body.studentReviews;
	const certificate = req.body.certificate;
	const newCourse = new Course({
		title,
		subtitle,
		desc,
		catagory,
		level,
		sublevel,
		video,
		instructor,
		preRequisite,
		requirements,
		nextCourses,
		relatedCourse,
		courseHour,
		document,
		price,
		validity,
		studentReviews,
		certificate,
	});
	newCourse
		.save()
		.then(() => res.json(`course added!`))
		.catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:id").put((req, res) => {});

// app.post("/person", async (request, response) => {});
// app.get("/people", async (request, response) => {});
// app.get("/person/:id", async (request, response) => {});
// app.put("/person/:id", async (request, response) => {});
// app.delete("/person/:id", async (request, response) => {});

module.exports = router;
