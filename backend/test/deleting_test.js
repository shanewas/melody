const assert = require("assert");
const Course = require("../models/Course.model");

// Describe our tests
describe("Deleting records", function () {
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
	it("Deletes a record from the database", function (done) {
		Course.findOneAndRemove({ title: "Mario" }).then(function () {
			Course.findOne({ title: "Mario" }).then(function (result) {
				assert(result === null);
				done();
			});
		});
	});
});
