const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Mongoose = require("mongoose");
const Instructor = require("../models/Instructor.model");
const Analytics = require("../models/Analytics.model");
const Featured = require("../models/Featured.model");
const { exec } = require("child_process");

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

const photo = multer({
	storage,
	limits: { fileSize: 1024 * 1024 * 5 },
	fileFilter,
});

router.route("/").get((req, res) => {
	Instructor.find({ published: true })
		.then((instructor) => res.status(200).json(instructor))
		.catch((err) => res.status(400).json("Error: " + err));
});

//add Instructor
router
	.use(photo.single("photo"))
	.route("/add")
	.post((req, res) => {
		const name = req.body.name;
		const photo = req.file.path;
		const bio = req.body.bio;
		const earnings = req.body.earnings;
		const teaches = req.body.teaches;
		const band = req.body.band;
		const course = req.body.course;
		const document = req.body.document;
		const video = req.body.video;
		const percentage = req.body.percentage;
		const newInstructor = new Instructor({
			name,
			photo,
			bio,
			earnings,
			teaches,
			band,
			course,
			document,
			video,
			percentage
		});
		newInstructor
			.save()
			.then(() => {
				Analytics.findOneAndUpdate(
					{ _id: "5f37f0b2c5e1655598887cb8" },
					{ $inc: { instructor: 1 } },
					{ useFindAndModify: false }
				).exec();
				res.status(200).json({
					message: `Instructor Added Successfully!`,
					id: newInstructor._id,
				});
			})
			.catch((err) => res.status(400).json("Error: " + err));
	});

//Search
router.route("/search").get((req, res) => {
	var query = {};
	for (var key in req.query) {
		query[key] = new RegExp(`${req.query[key]}`, "i");
	}
	Instructor.find(query)
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
	Instructor.find({ featured: true })
		.then((featured) => res.status(200).json(featured))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/unfeatured").get((req, res) => {
	Instructor.find({ featured: false })
		.then((unfeatured) => res.status(200).json(unfeatured))
		.catch((err) => res.status(400).json("Error: " + err));
});

//unpublished
router.route("/unpublished").get((req, res) => {
	Instructor.find({ published: false })
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
			Instructor.findByIdAndUpdate(
				id,
				{ $set: { published: true } },
				{ useFindAndModify: false }
			)
				.exec()
				.catch((err) => { throw err });
			if (index + 1 === publish.length) {
				res.status(200).json(`Instructor Published Successfully!`);
			}
		}
		for (let index = 0; index < unpublish.length; index++) {
			const id = Mongoose.Types.ObjectId(unpublish[index]);
			Instructor.findByIdAndUpdate(
				id,
				{ $set: { published: false } },
				{ useFindAndModify: false }
			)
				.exec()
				.catch((err) => { throw err });
			if (index + 1 === unpublish.length) {
				res.status(200).json(`Instructor UnPublished Successfully!`);
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
			Instructor.findByIdAndUpdate(
				id,
				{ $set: { featured: true } },
				{ useFindAndModify: false }
			)
				.exec()
				.then(() => {
					Featured.findByIdAndUpdate(
						"5f3941d99591ab30a0848f61",
						{ $addToSet: { instructor: id } },
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
				res.status(200).json(`Featured Instructor Added Successfully!`);
			}
		}
		for (let index = 0; index < unFeatured.length; index++) {
			const id = Mongoose.Types.ObjectId(unFeatured[index]);
			Instructor.findByIdAndUpdate(
				id,
				{ $set: { featured: false } },
				{ useFindAndModify: false }
			)
				.exec()
				.then(() => {
					Featured.findByIdAndUpdate(
						"5f3941d99591ab30a0848f61",
						{ $pull: { instructor: id } },
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
				res.status(200).json(`Featured Instructor Removed Successfully!`);
			}
		}
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

//GET by ID
router.route("/:instructorId").get((req, res) => {
	const id = req.params.instructorId;
	Instructor.findById(id)
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
router.route("/:instructorId").put((req, res) => {
	const id = req.params.instructorId;
	var query = req.body;
	if (req.file) query["photo"] = req.file.path;
	Instructor.findByIdAndUpdate(id, { $set: query }, { useFindAndModify: false })
		.then((doc) => {
			if (doc) {
				res.status(200).json(`Instructor Updated Successfully!`);
			} else {
				res.status(404).json(`Instructor Update Failed!`);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

//DELETE by ID
router.route("/:instructorId").delete((req, res) => {
	const id = req.params.instructorId;
	Instructor.findByIdAndUpdate(
		id,
		{ $set: { published: false } },
		{ useFindAndModify: false }
	)
		.then((result) => {
			res.status(200).json(`Instructor Deleted Successfully!`);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
