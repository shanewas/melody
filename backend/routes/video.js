const router = require("express").Router();
const Video = require("../models/videos.model");

router.route("/").get((req, res) => {
	Video.find()
		.then((videos) => res.json(videos))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const file = req.body.file;
	const duration = req.body.duration;
	const eligibility = req.body.eligibility;
	const newVideo = new Video({
		title,
		description,
		file,
		duration,
		eligibility,
	});
	newVideo
		.save()
		.then(() => res.json(`video added!`))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
