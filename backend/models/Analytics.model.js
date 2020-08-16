var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnalyticsSchema = new Schema(
	{
		course: { type: Number, default: 0 },
		instructor: { type: Number, default: 0 },
		user: { type: Number, default: 0 },
		sold: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Analytics", AnalyticsSchema);
