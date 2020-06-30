const express = require("express").Router();
const router = require("../models/videos.model");
const routers = require("express").Router();
const Video = require("../models/videos.model");

routers.route("/").get((res, req) => {
	Video.find()
		.then(() => res.json("videos"))
		.catch((err) => res.status(400).json("Error: " + err));
});

routers.route("/add").post((res, req) => {
	const videoId = req.body.videoId;
	const newVideo = new Video({ videoId });
	newVideo
		.save()
		.then(() => res.json(`user added!`))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = routers;
