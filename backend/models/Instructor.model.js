var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InstructorSchema = new Schema(
	{
		name: { type: String },
		photo: { type: String },
		bio: { type: String },
		earnings: { type: String },
		teaches: [{ type: String }],
		band: { type: String },
		course: [{ type: Schema.Types.ObjectId }],
		document: [{ type: Schema.Types.ObjectId }],
		video: [
			{
				type: Schema.Types.ObjectId,
			},
		],
		sold: { type: Number, default: 0 },
		featured: { type: Boolean, default: false },
		published: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Instructor", InstructorSchema);
