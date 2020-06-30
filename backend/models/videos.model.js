const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videosSchema = new Schema(
	{
		videoId: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

const Video = mongoose.model("Video", videosSchema);

module.exports = Video;
