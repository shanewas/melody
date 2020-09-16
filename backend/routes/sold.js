const router = require("express").Router();
const Sold = require("../models/Sold.model");

router.route("/").get((req, res) => {
    Sold.find({})
        .then((sold) => res.status(200).json(sold))
        .catch((err) => res.status(400).json("Error: " + err));
});

//TOTAL
router.route("/:courseId").get((req, res) => {
    const id = req.params.courseId;
    let total = 0;
    Sold.find({ courseId: id })
        .then((doc) => {
            if (doc) {
                doc[0].ammount.forEach(element => {
                    total = total + Number(element);
                });
                res.status(200).json({ "Total Earned": total, "Total Sold": doc[0].sold });
            } else {
                res.status(200).json("Creep");
            }
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE
router.route("/:courseId").delete((req, res) => {
    const id = req.params.courseId;
    Sold.deleteMany({ courseId: id })
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
