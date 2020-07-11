const assert = require("assert");
const Course = require("../models/Course.model");

// Describe our tests
describe("Saving records", function () {
	// Create tests
	it("Saves a record to the database", function (done) {
		const char = new Course({
			title: "Mario",
		});

		char.save().then(function () {
			assert(!char.isNew);
			done();
		});
	});
});
