const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();

router.post("/add", async (req, res) => {
    let details = req.body;


    try {
      let data = await dbOperations.adddocto(details);
      if (data) return res.status(200).json({ msg: "Doctor added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });


  router.get("/get", async (req, res) => {
    try {
      let data = await dbOperations.getdoctor();
      console.log(data.length)
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });



  router.get("/doctor/:today_work",async(req,res) =>{
    let today_work = req.params.today_work;
    try {
      let data = await dbOperations.work_doctor(today_work);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }

  });

  

  router.post("/delete/:Doctor_id",async(req,res) =>{
    let Doctor_id = req.params.Doctor_id;
    try {
      console.log(Doctor_id)
      let data = await dbOperations.removeDoctor(Doctor_id);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }

  });

  router.post("/update/:Doctor_id",async(req,res) =>{
    let Doctor_id = req.params.Doctor_id;
    let details = req.body;
    try {
      console.log(Doctor_id)
      console.log(details)
      let data = await dbOperations.updateDoctor(Doctor_id,details);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }

  });

  module.exports = router;

