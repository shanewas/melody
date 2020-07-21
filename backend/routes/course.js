const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Course = require("../models/Course.model");
const { authentication } = require("../middleware/authentication");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join("storage", "thumbnail"));
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

const thumbnail = multer({
	storage,
	limits: { fileSize: 1024 * 1024 * 5 },
	fileFilter,
});

router
	// .use(authentication)
	.route("/")
	.get((req, res) => {
		Course.find()
			.then((courses) => res.status(200).json(courses))
			.catch((err) => res.status(400).json("Error: " + err));
	});

//ADD
router
	.use(authentication)
	.use(thumbnail.single("thumbnail"))
	.route("/add")
	.post((req, res) => {
		const title = req.body.title;
		const subtitle = req.body.subtitle;
		const desc = req.body.desc;
		const catagory = req.body.catagory;
		const level = req.body.level;
		const sublevel = req.body.sublevel;
		const thumbnail = req.file.path;
		const video = req.body.video;
		const instructor = req.body.instructor;
		const topic = req.body.topic;
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
			thumbnail,
			video,
			instructor,
			topic,
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
			.then(() => res.status(200).json(`Course Added Successfully!`))
			.catch((err) => res.status(400).json("Error: " + err));
	});

router
	// .use(authentication)
	.route("/search")
	.get((req, res) => {
		var query = {};
		for (var key in req.query) {
			query[key] = new RegExp(`${req.query[key]}`, "i");
		}
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

//GET by ID
router
	// .use(authentication)
	.route("/:courseId")
	.get((req, res) => {
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

//UPDATE by ID
router
	// .use(authentication)
	.route("/:courseId")
	.put((req, res) => {
		const id = req.params.courseId;
		Course.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ useFindAndModify: false }
		)
			.then((doc) => {
				if (doc) {
					res.status(200).json(`Course Updated Successfully!`);
				} else {
					res.status(404).json(`Course Update Failed!`);
				}
			})
			.catch((err) => res.status(400).json("Error: " + err));
	});

//DELETE
router
	// .use(authentication)
	.route("/:courseId")
	.delete((req, res) => {
		const id = req.params.courseId;
		Course.findByIdAndDelete(id)
			.then((result) => {
				res.status(200).json(`${result} Successfully!`);
			})
			.catch((err) => res.status(400).json("Error: " + err));
	});

//GET
// (query); //{ title: 'Course 1' }
// (req.params); //{ key: 'title', value: 'Course 1' }

router
	// .use(authentication)
	.route("/:key/:value")
	.get((req, res) => {
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

// //DELETE
// router
// 	.use(authentication)
// 	.route("/:key/:value")
// 	.delete((req, res) => {
// 		var query = {};
// 		query[req.params.key] = req.params.value;
// 		Course.deleteMany(query)
// 			.then((result) => {
// 				res.status(200).json(result);
// 			})
// 			.catch((err) => res.status(400).json("Error: " + err));
// 	});

module.exports = router;
