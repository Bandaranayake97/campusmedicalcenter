const express = require("express");
const dbOperations = require("../controller/DoctorController")
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;

    try {
      let data = await dbOperations.addrisevetion(details);
      if (data) return res.status(200).json({ msg: "Student added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;

  //
  router.get("/get", async (req, res) => {
    try {
      let data = await dbOperations.getrisevetion();
      console.log(data.length)
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;