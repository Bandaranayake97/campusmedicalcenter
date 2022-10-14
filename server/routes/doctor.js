const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();

router.post("/add", async (req, res) => {
    let details = req.body;


    try {
      let data = await dbOperations.adddoctor(details);
      if (data) return res.status(200).json({ msg: "Doctor added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;

  router.get("/get", async (req, res) => {
    console.log("Today Menu");
    try {
      let data = await dbOperations.doctor();
      console.log(data.length)
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;