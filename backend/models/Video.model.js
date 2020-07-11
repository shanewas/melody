var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	file: { type: String, required: true },
	duration: { type: Number, required: true },
	eligibility: { type: Boolean, required: true },
	course: [{ type: Schema.Types.ObjectId, required: true, ref: "Course" }],
	instructor: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "Instructor",
	},
	document: [{ type: Schema.Types.ObjectId, required: true, ref: "Document" }],
});

module.exports = mongoose.model("Video", VideoSchema);
