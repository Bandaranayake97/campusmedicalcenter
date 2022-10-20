const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;

    try {
      console.log("Function Called");
      let data = await dbOperations.addStudent(details);
      console.log(details)
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
      
      let data = await dbOperations.getstudent();
      console.log(data.length)
      //res.send(data);
      res.sendFile(__dirname + '/index.html');
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;

 