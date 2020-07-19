var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DocumentSchema = new Schema(
	{
		file: { type: String },
		desc: { type: String },
		size: { type: String },
		course: [{ type: Schema.Types.ObjectId }],
		video: [{ type: Schema.Types.ObjectId }],
		instructor: {
			type: Schema.Types.ObjectId,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);
