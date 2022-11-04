const express = require("express");
const DoctorController = require("../controller/DoctorController");

const router = express.Router();

router.get("/add",async(req,res)=>res.render("../views/loginDoctor",{pageTitle:'Get Doctor',path:"/get"}))



router.post("/add", async (req, res) => {
    let details = req.body;


    try {
      let data = await DoctorController.adddoctor(details);
      if (data) return res.status(200).redirect("/")
    } catch (e) {
      console.log(e.message);
    }
  });


  router.get("/get", async (req, res) => {
    try {
      let data = await DoctorController.getdoctor();
      console.log(data.length)
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });



  router.get("/doctor/:today_work",async(req,res) =>{
    let today_work = req.params.today_work;
    try {
      let data = await DoctorController.work_doctor(today_work);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }

  });

  

  router.post("/delete/:Doctor_id",async(req,res) =>{
    let Doctor_id = req.params.Doctor_id;
    try {
      console.log(Doctor_id)
      let data = await DoctorController.removeDoctor(Doctor_id);
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
      let data = await DoctorController.updateDoctor(Doctor_id,details);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }

    router.post("/doctor/mainDisease/add",async(req,res) =>{
      let date1 = req.body.date1;

      date1=date1.slice(1,date1.length);
      console.log(date1);
      let date2 = req.body.date2;
      date2=date2.slice(1,date2.length);
      try {
         DoctorController.getmaindisaese(date1,date2).then(data=>{
          res.render("../views/index",{pageTitle:'Get main Disease',userData:data})
         });
        res.send(data);
      } catch (e) {
        res.send(e.message);
      }
  
    });
  

  });

  module.exports = router;

