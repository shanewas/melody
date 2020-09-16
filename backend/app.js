const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(
	"/storage/thumbnail",
	express.static(path.join(__dirname, "../backend/storage/thumbnail"))
);

app.use(
	"/storage/video",
	express.static(path.join(__dirname, "../backend/storage/video"))
);

app.use(
	"/storage/photo",
	express.static(path.join(__dirname, "../backend/storage/photo"))
);

app.use(
	"/storage/document",
	express.static(path.join(__dirname, "../backend/storage/document"))
);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const courseRouter = require("./routes/course");
const loginRouter = require("./routes/user");
const videoRouter = require("./routes/video");
const instructorRouter = require("./routes/instructor");
const documentRouter = require("./routes/document");
const contactRouter = require("./routes/contact");
const analyticsRouter = require("./routes/analytics");
const buyRouter = require("./routes/buy");
const featuredRouter = require("./routes/featured");
const soldRouter = require("./routes/sold");

const { apiAuth } = require("./middleware/authentication");

app.use(`/api/${process.env.API_VERSION}/course`, apiAuth, courseRouter);
app.use(`/api/${process.env.API_VERSION}/user`, loginRouter);
app.use(`/api/${process.env.API_VERSION}/video`, apiAuth, videoRouter);
app.use(
	`/api/${process.env.API_VERSION}/instructor`,
	apiAuth,
	instructorRouter
);
app.use(`/api/${process.env.API_VERSION}/document`, apiAuth, documentRouter);
app.use(`/api/${process.env.API_VERSION}/contact`, apiAuth, contactRouter);
app.use(`/api/${process.env.API_VERSION}/analytics`, apiAuth, analyticsRouter);
app.use(`/api/${process.env.API_VERSION}/buy`, apiAuth, buyRouter);
app.use(`/api/${process.env.API_VERSION}/featured`, apiAuth, featuredRouter);
app.use(`/api/${process.env.API_VERSION}/sold`, apiAuth, soldRouter);


app.get("/storage(/*)?", (req, res) => {
	res.sendStatus(403);
});
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
