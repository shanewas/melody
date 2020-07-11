var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
	title: { type: String },
	desc: { type: String },
	file: { type: String },
	duration: { type: Number },
	eligibility: { type: Boolean },
	course: [{ type: Schema.Types.ObjectId, ref: "Course" }],
	instructor: {
		type: Schema.Types.ObjectId,
		ref: "Instructor",
	},
	document: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});

module.exports = mongoose.model("Video", VideoSchema);
