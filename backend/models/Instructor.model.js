var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InstructorSchema = new Schema(
	{
		name: { type: String },
		photo: { type: String },
		bio: { type: String },
		earnings: { type: Number },
		course: [{ type: Schema.Types.ObjectId, ref: "Course" }],
		document: [{ type: Schema.Types.ObjectId, ref: "Document" }],
		video: [
			{
				type: Schema.Types.ObjectId,
				required: true,
				ref: "Video",
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Instructor", InstructorSchema);
