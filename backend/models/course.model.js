var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
	{
		title: { type: String },
		subtitle: { type: String },
		desc: { type: String },
		catagory: { type: String },
		level: { type: Number },
		sublevel: { type: Number },
		video: [
			{
				type: Schema.Types.ObjectId,
				ref: "Video",
			},
		],
		instructor: {
			type: Schema.Types.ObjectId,
			ref: "Instructor",
		},
		preRequisite: [{ type: Schema.Types.ObjectId, ref: "Course" }],
		requirements: { type: String },
		nextCourse: [{ type: Schema.Types.ObjectId, ref: "Course" }],
		relatedCourse: [{ type: Schema.Types.ObjectId, ref: "Course" }],
		courseHour: { type: Number },
		document: [{ type: Schema.Types.ObjectId, ref: "Document" }],
		price: { type: Number },
		validity: { type: Number },
		studentReviews: [
			{
				type: Schema.Types.ObjectId,
				ref: "StudentReviews",
			},
		],
		certificate: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);