var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InstructorSchema = new Schema(
	{
		name: { type: String },
		photo: { type: String },
		bio: { type: String },
		earnings: { type: Number },
		course: [{ type: String }],
		document: [{ type: String }],
		video: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Instructor", InstructorSchema);
