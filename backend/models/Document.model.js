var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DocumentSchema = new Schema(
	{
		file: { type: String },
		desc: { type: String },
		size: { type: String },
		course: [{ type: String }],
		video: [{ type: String }],
		instructor: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);
