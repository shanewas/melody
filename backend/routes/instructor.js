const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Instructor = require("../models/Instructor.model");

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
	Instructor.find()
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
		const course = req.body.course;
		const document = req.body.document;
		const video = req.body.video;
		const newInstructor = new Instructor({
			name,
			photo,
			bio,
			earnings,
			course,
			document,
			video,
		});
		newInstructor
			.save()
			.then(() => {
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
	Instructor.findByIdAndUpdate(
		id,
		{ $set: req.body },
		{ useFindAndModify: false }
	)
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
	Instructor.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json(`${result} Successfully!`);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
