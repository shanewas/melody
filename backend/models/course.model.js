var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
	{
		title: { type: String },
		subtitle: { type: String },
		desc: { type: String },
		catagory: { type: String },
		level: { type: String },
		sublevel: { type: String },
		thumbnail: { type: String },
		video: [
			{
				type: Schema.Types.ObjectId,
			},
		],
		instructor: {
			type: Schema.Types.ObjectId,
		},
		topic: [{ type: String }],
		preRequisite: [{ type: Schema.Types.ObjectId }],
		requirements: [{ type: String }],
		nextCourse: [{ type: Schema.Types.ObjectId }],
		relatedCourse: [{ type: Schema.Types.ObjectId }],
		courseHour: { type: Number },
		document: [{ type: Schema.Types.ObjectId }],
		price: { type: String },
		validity: { type: String },
		studentReviews: [
			{
				type: Schema.Types.ObjectId,
			},
		],
		certificate: { type: String },
		sold: { type: Number, default: 0 },
		featured: { type: Boolean, default: false },
		published: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
