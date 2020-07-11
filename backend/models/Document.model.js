var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DocumentSchema = new Schema(
	{
		file: { type: String, required: true },
		desc: { type: String },
		size: { type: Number },
		course: [{ type: Schema.Types.ObjectId, required: true, ref: "Course" }],
		video: [{ type: Schema.Types.ObjectId, required: true, ref: "Video" }],
		instructor: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Instructor",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);
