const express = require("express");
const dbOperations = require("../controller/DoctorController")
const router = express.Router();

router.post("/add", async (req, res) => {
    let details = req.body;


    try {
      let data = await dbOperations.addabout_disease(details);
      if (data) return res.status(200).json({ msg: "disease added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;

  router.get("/get", async (req, res) => {
    try {
      let data = await dbOperations.getabout_disease();
      console.log(data.length);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;

  router.get("/today_patient/:date",async(req,res) =>{
    let date = req.params.date;
    try {
      let data = await dbOperations.today_patient(date);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }

  });

  module.exports = router;
  