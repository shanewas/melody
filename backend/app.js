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

app.use(`/api/${process.env.API_VERSION}/course`, courseRouter);
app.use(`/api/${process.env.API_VERSION}/user`, loginRouter);
app.use(`/api/${process.env.API_VERSION}/video`, videoRouter);

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
