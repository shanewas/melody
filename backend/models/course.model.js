var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var coursesSchema = new Schema({
	id: { type: Schema.Types.ObjectId, required: true },
	title: { type: String, required: true },
	subtitle: { type: String, required: true },
	description: { type: String, required: true },
	catagory: { type: String, required: true },
	level: { type: Number, required: true },
	sublevel: { type: Number, required: true },
	videos: [{ type: Number, required: true }],
	instructor: { type: Number, required: true },
	preRequisites: [{ type: Number }],
	requirements: { type: String },
	nextCourses: [{ type: Number }],
	RelatedCourse: [{ type: Number }],
	courseHour: { type: Schema.Types.Decimal128, required: true },
	document: [{ type: String }],
	price: { type: Schema.Types.Decimal128, required: true },
	validity: { type: Number, required: true },
	studentReviews: [{ type: Number }],
	certificate: { type: String, required: true },
});

module.exports = mongoose.model("Course", coursesSchema);
