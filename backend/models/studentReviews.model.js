var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentReviewsSchema = new Schema(
	{
		// user: {
		// 	type: Schema.Types.ObjectId,
		// 	required: true,
		// 	ref: "User",
		// },
		course: [{ type: Schema.Types.ObjectId }],
		review: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("StudentReviews", StudentReviewsSchema);
