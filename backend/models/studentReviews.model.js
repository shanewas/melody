var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentReviewsSchema = new Schema(
	{
		// user: {
		// 	type: Schema.Types.ObjectId,
		// 	required: true,
		// 	ref: "User",
		// },
		courses: [{ type: Schema.Types.ObjectId, required: true, ref: "Course" }],
		review: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("StudentReviews", StudentReviewsSchema);
