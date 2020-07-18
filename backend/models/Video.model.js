var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
	title: { type: String },
	desc: { type: String },
	file: { type: String },
	duration: { type: String },
	eligibility: { type: Boolean },
	course: [{ type: String }],
	instructor: {
		type: String,
	},
	document: [{ type: String }],
});

module.exports = mongoose.model("Video", VideoSchema);
