var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
	{
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
		description: { type: String, required: true },
		catagory: { type: String, required: true },
		level: { type: Number, required: true },
		sublevel: { type: Number, required: true },
		videos: [
			{
				type: Schema.Types.ObjectId,
				required: true,
				ref: "Video",
			},
		],
		instructor: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Instructor",
		},
		preRequisites: [
			{ type: Schema.Types.ObjectId, required: true, ref: "Course" },
		],
		requirements: { type: String },
		nextCourses: [
			{ type: Schema.Types.ObjectId, required: true, ref: "Course" },
		],
		RelatedCourse: [
			{ type: Schema.Types.ObjectId, required: true, ref: "Course" },
		],
		courseHour: { type: Number, required: true },
		document: [
			{ type: Schema.Types.ObjectId, required: true, ref: "Document" },
		],
		price: { type: Number, required: true },
		validity: { type: Number, required: true },
		studentReviews: [
			{
				type: Schema.Types.ObjectId,
				required: true,
				ref: "StudentReviews",
			},
		],
		certificate: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
