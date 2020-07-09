const assert = require("assert");
const Course = require("../models/Course.model");

// Describe our tests
describe("Finding records", function () {
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
	it("Finds a record from the database", function (done) {
		Course.findOne({ title: "Mario" }).then(function (result) {
			assert(result.title === "Mario");
			done();
		});
	});

	it("Finds a record by unique id", function (done) {
		Course.findOne({ _id: char._id }).then(function (result) {
			assert(result._id.toString() === char._id.toString());
			done();
		});
	});
});
