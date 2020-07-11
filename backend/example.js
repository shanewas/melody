const Course = require("./models/Course.model");
const Document = require("./models/Document.model");
const Instructor = require("./models/Instructor.model");
const StudentReviews = require("./models/StudentReviews.model");
const User = require("./models/User.model");
const Video = require("./models/Video.model");

const course = new Course({
	title: "Potato course",
	subtitle: "potato sub document",
	desc: "potato description",
	catagory: "potato catagory",
	level: 1,
	sublevel: 3,
	//video ref
	//instructor ref
	//prereq ref
	requirements: "requirements for potato",
	//nextcourse ref
	// related ref
	courseHour: 13.5,
	//document ref
	price: 399,
	validity: 30,
	//studentReviews ref
	certificate: "https://document.com/certificate",
});

const document = new Document({
	file: "https://document.com/file1",
	desc: "awesome potato file",
	size: "100MB",
	//course ref
	//video ref
	// instructor ref
});
const instructor = new Instructor({
	name: "Potato",
	photo: "https://potato.com/potato.jpg",
	bio: "awesome potato",
	earnings: 1000,
	//course ref
	//document ref
	//video ref
});
const studentReviews = new StudentReviews({
	review: "Goood course",
	//course reference
});
// const user = new User();
const video = new Video({
	title: "Potato Video",
	desc: "potato video description",
	file: "https://document.com/file1",
	duration: 15.8,
	eligibility: true,
	//course ref
	//instructor ref
	//document ref
});
//course
course.video.push(video);
course.instructor.push(instructor);
course.preRequisite.push(course);
course.nextCourse.push(course);
course.relatedCourse.push(course);
course.document.push(document);
course.studentReviews.push(studentReviews);
course.save().then(() => console.log("course added"));

//document
document.course.push(course);
document.video.push(video);
document.instructor.push(instructor);
document.save().then(() => console.log("document added"));

//Instructor
instructor.course.push(course);
instructor.document.push(document);
instructor.video.push(video);
instructor.save().then(() => console.log("instructor added"));

//Student Review
studentReviews.course.push(course);
studentReviews.save().then(() => console.log("studentReviews added"));

//Video
video.course.push(course);
video.instructor.push(instructor);
video.document.push(document);
video.save().then(() => console.log("video added"));
