const express = require("express");

const emojis = require("./emojis");

const setInfo = require("./setInfo");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API",
  });
});

router.use("/setInfo", setInfo);

module.exports = router;
