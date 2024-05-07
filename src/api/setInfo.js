const express = require("express");

const router = express.Router();

const { setAquariumTemperature } = require("./firebase/firebaseApi");

router.post("/", async (req, res) => {
  const { temperature = "-", bright = "-", id } = req.body;

  await setAquariumTemperature({ id, bright, temperature });

  res.send(`Temperature updated ${temperature} ${bright}`);
});

module.exports = router;
