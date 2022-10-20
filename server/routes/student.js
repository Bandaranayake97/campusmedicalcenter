const express = require("express");
//const dbOperations = require("../controller/DoctorController");
const studentController = require("../controller/studentController");
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;

    try {
      console.log("Function Called");
      console.log(req)
      let data = await studentController.addStudent(details);
      console.log(details)
      if (data) return res.status(200).sendFile("C:/Users/chath/Desktop/database project/campusmedicalcenter/server/loginDoctor.html");
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;
 
  //
  router.get("/get", async (req, res) => {
    try {
      
      let data = await studentController.getstudent();
      console.log(data)
      res.send(data);
      
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;

 