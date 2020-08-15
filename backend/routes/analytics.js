const router = require("express").Router();
const Analytics = require("../models/Analytics.model");

router.route("/").get((req, res) => {
	Analytics.find()
		.then((analytics) => res.json(analytics))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
