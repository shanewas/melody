var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
		type: { type: Number, default: 4 },
		name: { type: String },
		photo: { type: String },
		age: { type: String },
		phone: { type: String },
		address: { type: String },
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		},
		password: { type: String, required: true },
		course: [[{ type: String }, { type: String }]],
		previousCourse: [{ type: Schema.Types.ObjectId }],
		v_token: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
