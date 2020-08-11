const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Contact = require("../models/Contact.model");

router.route("/getAll").get((req, res) => {
	Contact.find()
		.then((contact) => res.json(contact))
		.catch((err) => res.status(400).json("Error: " + err));
});

//add single contact
router.route("/add").post((req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const newContact = new Contact({
		name,
		email,
		message,
	});
	newContact
		.save()
		.then(() => {
			res.status(200).json({
				message: `Contact Added Successfully!`,
				id: newContact._id,
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
	Contact.find(query)
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
router.route("/:contactId").get((req, res) => {
	const id = req.params.contactId;
	Contact.findById(id)
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
router.route("/:contactId").put((req, res) => {
	const id = req.params.contactId;
	Contact.findByIdAndUpdate(id, { $set: req.body }, { useFindAndModify: false })
		.then((doc) => {
			if (doc) {
				res.status(200).json(`Contact Updated Successfully!`);
			} else {
				res.status(404).json(`Contact Update Failed!`);
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

//DELETE by ID
router.route("/:contactId").delete((req, res) => {
	const id = req.params.contactId;
	Contact.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json(`${result} Successfully!`);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
