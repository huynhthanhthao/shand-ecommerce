const express = require("express");
const router = express.Router();
const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
    modelUrl: "https://teachablemachine.withgoogle.com/models/mdihmZPUY/",
});

router.post("/", async (req, res) => {
    const { url } = req.body;

    return model
        .classify({
            imageUrl: url,
        })
        .then((predictions) => {
            return res.json(predictions);
        })
        .catch((e) => {
            console.error(e);
            res.status(500).send("Something went wrong!");
        });
});

module.exports = router;
