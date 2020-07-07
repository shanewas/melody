const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videosSchema = new Schema(
	Videos:1{
	{
		videoId: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		videoTitle:{

		},
		videoDescription:{

		},
		videoTime:{

		}
	},
	{ timestamps: true }
)
;

const Video = mongoose.model("Video", videosSchema);

module.exports = Video;
