const router = require("express").Router();
const Featured = require("../models/Featured.model");

//GET featured
router.route("/").get((req, res) => {
	Featured.find()
		.then((featured) => res.status(200).json(featured))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
