var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SoldSchema = new Schema(
    {
        courseId: { type: Schema.Types.ObjectId },
        dateTime: [{ type: String }],
        ammount: { type: Number, default: 0},
        user: [{ type: Schema.Types.ObjectId }],
        sold: { type: Number, default: 1 },
        instructor: { type: Schema.Types.ObjectId },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Sold", SoldSchema);
