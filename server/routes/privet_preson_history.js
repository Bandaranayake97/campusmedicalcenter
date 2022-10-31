const express = require("express");
const DoctorController = require("../controller/DoctorController")
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;

    try {
      let data = await DoctorController.addhistory(details);
      if (data) return res.status(200).json({ msg: "history added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  
  
  router.get("/get", async (req, res) => {
    try {
      let data = await DoctorController.privet_preson_history();
      console.log(data.length)
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });

  router.get("/preson_history/get", async (req, res) => {
    try {
       studentController.getstudent().then(data=>{
        res.render("../views/student",{pageTitle:'About Student',path:"/preson_history/get"});
       }).catch(err=>console.log(err));
      
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;