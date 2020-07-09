var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var studentReviewsSchema = new Schema(
	{
		user: { type: String, required: true },
		review: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("studentReviews", studentReviewsSchema);
