var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var coursesSchema = new Schema(
	{
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
		description: { type: String, required: true },
		catagory: { type: String, required: true },
		level: { type: Number, required: true },
		sublevel: { type: Number, required: true },
		videos: [{ type: String, required: true }],
		instructor: { type: String, required: true },
		preRequisites: [{ type: String }],
		requirements: { type: String },
		nextCourses: [{ type: String }],
		RelatedCourse: [{ type: String }],
		courseHour: { type: Number, required: true },
		document: [{ type: String }],
		price: { type: Number, required: true },
		validity: { type: Number, required: true },
		studentReviews: [{ type: String }],
		certificate: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Course", coursesSchema);
