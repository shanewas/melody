const mongoose = require("mongoose");

// Connect to db before tests run
before(function (done) {
	// Connect to mongodb
	mongoose.connect("mongodb://lms:Lms726@162.0.231.67:27017/lms_db", {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});
	mongoose.connection
		.once("open", function () {
			console.log("Connection has been made.");
			done();
		})
		.on("error", function (error) {
			console.log("Connection error:", error);
		});
});

// Drop the characters collection before each test
// beforeEach(function (done) {
// 	// Drop the collection
// 	mongoose.connection.collections.Course.drop(function () {
// 		done();
// 	});
// });
