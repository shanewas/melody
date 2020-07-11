var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DocumentSchema = new Schema(
	{
		file: { type: String },
		desc: { type: String },
		size: { type: String },
		course: [{ type: Schema.Types.ObjectId, ref: "Course" }],
		video: [{ type: Schema.Types.ObjectId, ref: "Video" }],
		instructor: {
			type: Schema.Types.ObjectId,
			ref: "Instructor",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);
