var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SoldSchema = new Schema(
    {
        courseId: { type: Schema.Types.ObjectId },
        dateTime: { type: Date, default: Date.now },
        ammount: { type: String },
        instructor: { type: Schema.Types.ObjectId },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Sold", SoldSchema);
