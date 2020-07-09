const assert = require("assert");
const Course = require("../models/Course.model");

// Describe our tests
describe("Updating records", function () {
	var char;
	// Add a character to the db before each tests
	beforeEach(function (done) {
		char = new Course({
			title: "Mario",
		});
		char.save().then(function () {
			done();
		});
	});

	// Create tests
	it("Updates the name of a record", function (done) {
		Course.findOneAndUpdate({ title: "Mario" }, { title: "Luigi" }).then(
			function () {
				Course.findOne({ _id: char._id }).then(function (result) {
					assert(result.title === "Luigi");
					done();
				});
			}
		);
	});

	// it("Adds 1 to the weight of every record", function (done) {
	// 	Course.update({}, { $inc: { weight: 1 } }).then(function () {
	// 		Course.findOne({ name: "Mario" }).then(function (record) {
	// 			assert(record.weight === 51);
	// 			done();
	// 		});
	// 	});
	// });
});
