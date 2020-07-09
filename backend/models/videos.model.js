var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var videosSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		file: { type: String, required: true },
		duration: { type: Number, required: true },
		eligibility: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Video", videosSchema);
