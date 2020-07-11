var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InstructorSchema = new Schema(
	{
		name: { type: String, required: true },
		photo: { type: String, required: true },
		bio: { type: String, required: true },
		earnings: { type: Number, required: true },
		courses: [{ type: Schema.Types.ObjectId, required: true, ref: "Course" }],
		document: [
			{ type: Schema.Types.ObjectId, required: true, ref: "Document" },
		],
		videos: [
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
