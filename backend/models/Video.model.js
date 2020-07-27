var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
	title: { type: String },
	desc: { type: String },
	file: { type: String },
	duration: { type: String },
	eligibility: { type: String },
	course: [{ type: Schema.Types.ObjectId }],
	instructor: {
		type: Schema.Types.ObjectId,
	},
	document: [{ type: Schema.Types.ObjectId }],
});

module.exports = mongoose.model("Video", VideoSchema);
