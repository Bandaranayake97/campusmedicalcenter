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

  router.get("/todaywork/get",async(req,res) => {
    try{
      data = [{
        R_number : "",
        First_name : "",
        Age : "",
        Hostel_or_not : "",
        Fucalty : "",
        Disease_symptoms : "",
        Allergy_medication : "",
      }]
     res.render("../views/doctor");
    }catch{
    res.send(e.massage);
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
  router.get("/student/",async(req,res) =>{
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
      //console.log(Doctor_id)
      //console.log(details)
      let data = await DoctorController.updateDoctor(Doctor_id,details);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });


    router.post("/mainDisease/get",async(req,res) =>{
      console.log("Get Disease");
      let date1 = req.body.date1;

      //date1=date1.slice(1,date1.length);
      console.log(req.body);
      let date2 = req.body.date2;
      //date2=date2.slice(1,date2.length);
      try {
        console.log("Function called");
         DoctorController.getmaindisaese(date1,date2).then(Data=>{
          console.log(Data);
          res.render("../views/index1",{pageTitle:'Get main Disease',data:Data,path:"/mainDisease/get"});
         });
      } catch (e) {
        res.send(e.message);
      }
  
    });

    router.post("/todaywork/get",async(req,res) =>{

      let date1 = req.body.date1;

      //date1=date1.slice(1,date1.length);
      console.log(req.body);
    try {
        //console.log("Function called");
          DoctorController.gettodaywork(date1).then(Data=>{
          res.render("../views/doctor",{pageTitle:'Get today work',data:Data,path:"/todaywork/get"});
         });
      } catch (e) {
        res.send(e.message);
      }
  
    }); 
  
    router.post("/recreation/add",async(req,res) =>{
        let details = req.params;
        try {
          let data = await DoctorController.addrisevetion(details);
          res.send(data);
        } catch (e) {
          res.send(e.message);
        }
    })

 

  module.exports = router;

