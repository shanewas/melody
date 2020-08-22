const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Document = require("../models/Document.model");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join("storage", "document"));
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
	},
});
const fileFilter = (req, file, cb) => {
	if (true) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const document = multer({
	storage,
	limits: { fileSize: 1024 * 1024 * 10 },
	fileFilter,
});

router.route("/getAll").get((req, res) => {
	Document.find()
		.then((document) => res.json(document))
		.catch((err) => res.status(400).json("Error: " + err));
});

//add single document
router
	.use(document.single("file"))
	.route("/add")
	.post((req, res) => {
		const file = req.file.path;
		const desc = req.body.desc;
		const size = req.body.size;
		const course = req.body.course;
		const video = req.body.course;
		const instructor = req.body.course;
		const newDocument = new Document({
			file,
			desc,
			size,
			course,
			video,
			instructor,
		});
		newDocument
			.save()
			.then(() => {
				res.status(200).json({
					message: `Document Added Successfully!`,
					id: newDocument._id,
				});
			})
			.catch((err) => res.status(400).json("Error: " + err));
	});

// router
// 	.use(video.array("file"))
// 	.route("/addSingle")
// 	.post((req, res) => {
// 		console.log(req.files);
// 		res.sendStatus(200);
// 	});

//ADD single / multiple
//POST
// router
// 	.route("/addMulti")
// 	.post(async (req, res) => {
// 		for (var item in req.body) {
// 			const newVideo = new Video(req.body[item]);
// 			await newVideo
// 				.save()
// 				.then(() => {
// 					console.log({
// 						message: `Video ${item} : ${req.body[item].title} Added Successfully!`,
// 					});
// 				})
// 				.catch((err) => {
// 					res.status(400).json("Error: " + err);
// 				});
// 		}
// 		res.status(200).json({
// 			message: `Videos Added Successfully!`,
// 		});
// 	});

//Search
router.route("/search").get((req, res) => {
	var query = {};
	for (var key in req.query) {
		query[key] = new RegExp(`${req.query[key]}`, "i");
	}
	Document.find(query)
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
router.route("/:documentId").get((req, res) => {
	const id = req.params.documentId;
	Document.findById(id)
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
router.route("/:documentId").put((req, res) => {
	const id = req.params.documentId;
	var query = req.body;
	if (req.file) query["file"] = req.file.path;
	Document.findByIdAndUpdate(id, { $set: query }, { useFindAndModify: false })
		.then((doc) => {
			if (doc) {
				res.status(200).json(`Document Updated Successfully!`);
			} else {
				res.status(404).json(`Document Update Failed!`);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

//DELETE by ID
router.route("/:documentId").delete((req, res) => {
	const id = req.params.documentId;
	Document.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json(`${result} Successfully!`);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
