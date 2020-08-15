var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InstructorSchema = new Schema(
	{
		name: { type: String },
		photo: { type: String },
		bio: { type: String },
		earnings: { type: String },
		course: [{ type: Schema.Types.ObjectId }],
		document: [{ type: Schema.Types.ObjectId }],
		video: [
			{
				type: Schema.Types.ObjectId,
			},
		],
		sold: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Instructor", InstructorSchema);
