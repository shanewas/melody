const router = require("express").Router();
const Video = require("../models/Video.model");
const { authentication } = require("../middleware/authentication");

router
  // .use(authentication)
  .route("/getAll")
  .get((req, res) => {
    Video.find()
      .then((video) => res.json(video))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//ADD single / multiple
//POST
router
  //   .use(authentication)
  .route("/add")
  .post(async (req, res) => {
    for (var item in req.body) {
      const newVideo = new Video(req.body[item]);
      await newVideo
        .save()
        .then(() => {
          console.log({
            message: `Video ${item} : ${req.body[item].title} Added Successfully!`,
          });
        })
        .catch((err) => {
          res.status(400).json("Error: " + err);
        });
    }
    res.status(200).json({
      message: `Videos Added Successfully!`,
    });
  });

//Search
router
  //   .use(authentication)
  .route("/search")
  .get((req, res) => {
    var query = {};
    for (var key in req.query) {
      query[key] = new RegExp(`${req.query[key]}`, "i");
    }
    Video.find(query)
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json(doc);
        }
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

//GET by ID
router
  //   .use(authentication)
  .route("/:videoId")
  .get((req, res) => {
    const id = req.params.videoId;
    Video.findById(id)
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json(doc);
        }
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

//UPDATE by ID
router
  //   .use(authentication)
  .route("/:videoId")
  .put((req, res) => {
    const id = req.params.videoId;
    Video.findByIdAndUpdate(id, { $set: req.body }, { useFindAndModify: false })
      .then((doc) => {
        if (doc) {
          res.status(200).json(`Video Updated Successfully!`);
        } else {
          res.status(404).json(`Video Update Failed!`);
        }
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

//DELETE by ID
router
  //   .use(authentication)
  .route("/:videoId")
  .delete((req, res) => {
    const id = req.params.videoId;
    Course.findByIdAndDelete(id)
      .then((result) => {
        res.status(200).json(`${result} Successfully!`);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;
