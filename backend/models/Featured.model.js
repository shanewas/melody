var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FeaturedSchema = new Schema(
	{
		course: [{ type: Schema.Types.ObjectId }],
		instructor: [{ type: Schema.Types.ObjectId }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Featured", FeaturedSchema);
