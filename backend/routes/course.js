const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Mongoose = require("mongoose");
const Course = require("../models/Course.model");
const Analytics = require("../models/Analytics.model");
const Featured = require("../models/Featured.model");

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

router.route("/").get((req, res) => {
	Course.find({ published: true })
		.then((courses) => res.status(200).json(courses))
		.catch((err) => res.status(400).json("Error: " + err));
});

//ADD
router
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
			.then(() => {
				Analytics.findOneAndUpdate(
					{ _id: "5f37f0b2c5e1655598887cb8" },
					{ $inc: { course: 1 } },
					{ useFindAndModify: false }
				).exec();
				res.status(200).json({
					message: `Course Added Successfully!`,
					id: newCourse._id,
				});
			})
			.catch((err) => res.status(400).json("Error: " + err));
	});

//BUY
router.route("/addVideo").post((req, res) => {
	const course = Mongoose.Types.ObjectId(req.body.course);
	const video = Mongoose.Types.ObjectId(req.body.video);

	Course.findByIdAndUpdate(
		{ _id: course },
		{ $addToSet: { video: video } },
		{ useFindAndModify: false }
	).then((doc) => {
		if (doc) {
			res.status(200).json(`Video added successfully to ${doc.title}!`);
		} else {
			res.status(404).json(`Video adding Failed!`);
		}
	});
});

router.route("/search").get((req, res) => {
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

router.route("/featured").get((req, res) => {
	Course.find({ featured: true })
		.then((featured) => res.status(200).json(featured))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/unfeatured").get((req, res) => {
	Course.find({ featured: false })
		.then((unfeatured) => res.status(200).json(unfeatured))
		.catch((err) => res.status(400).json("Error: " + err));
});

//unpublished
router.route("/unpublished").get((req, res) => {
	Course.find({ published: false })
		.then((unpublished) => res.status(200).json(unpublished))
		.catch((err) => res.status(400).json("Error: " + err));
});

//published
router.route("/publishing_status").post((req, res) => {
	const publish = req.body.publish;
	const unpublish = req.body.unpublish;
	try {
		for (let index = 0; index < publish.length; index++) {
			const id = Mongoose.Types.ObjectId(publish[index]);
			Course.findByIdAndUpdate(
				id,
				{ $set: { published: true } },
				{ useFindAndModify: false }
			)
				.exec()
				.catch((err) => { throw err });
			if (index + 1 === publish.length) {
				res.status(200).json(`Course Published Successfully!`);
			}
		}
		for (let index = 0; index < unpublish.length; index++) {
			const id = Mongoose.Types.ObjectId(unpublish[index]);
			Course.findByIdAndUpdate(
				id,
				{ $set: { published: false } },
				{ useFindAndModify: false }
			)
				.exec()
				.catch((err) => { throw err });
			if (index + 1 === unpublish.length) {
				res.status(200).json(`Course UnPublished Successfully!`);
			};
		}
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

//POST add featured
router.route("/featured/add").post((req, res) => {
	const featured = req.body["featured"];
	const unFeatured = req.body["unFeatured"];
	try {
		for (let index = 0; index < featured.length; index++) {
			const id = Mongoose.Types.ObjectId(featured[index]);
			Course.findByIdAndUpdate(
				id,
				{ $set: { featured: true } },
				{ useFindAndModify: false }
			)
				.exec()
				.then(() => {
					Featured.findByIdAndUpdate(
						"5f3941d99591ab30a0848f61",
						{ $addToSet: { course: id } },
						{ useFindAndModify: false }
					)
						.exec()
						.catch((err) => {
							throw err;
						});
				})
				.catch((err) => {
					throw err;
				});

			if (index + 1 === featured.length) {
				res.status(200).json(`Featured Course Added Successfully!`);
			}
		}
		for (let index = 0; index < unFeatured.length; index++) {
			const id = Mongoose.Types.ObjectId(unFeatured[index]);
			Course.findByIdAndUpdate(
				id,
				{ $set: { featured: false } },
				{ useFindAndModify: false }
			)
				.exec()
				.then(() => {
					Featured.findByIdAndUpdate(
						"5f3941d99591ab30a0848f61",
						{ $pull: { course: id } },
						{ useFindAndModify: false }
					)
						.exec()
						.catch((err) => {
							throw err;
						});
				})
				.catch((err) => {
					throw err;
				});

			if (index + 1 === unFeatured.length) {
				res.status(200).json(`Featured Course Removed Successfully!`);
			}
		}
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

//GET by ID
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

//UPDATE by ID
router.route("/:courseId").put((req, res) => {
	const id = req.params.courseId;
	var query = req.body;
	if (req.file) query["thumbnail"] = req.file.path;
	Course.findByIdAndUpdate(id, { $set: query }, { useFindAndModify: false })
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
router.route("/:courseId").delete((req, res) => {
	const id = req.params.courseId;
	Course.findByIdAndUpdate(
		id,
		{ $set: { published: false } },
		{ useFindAndModify: false }
	)
		.then((result) => {
			res.status(200).json(`Course Deleted Successfully!`);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

//GET
// (query); //{ title: 'Course 1' }
// (req.params); //{ key: 'title', value: 'Course 1' }

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

// //DELETE
// router
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
