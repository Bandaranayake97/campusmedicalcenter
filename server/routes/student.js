const express = require("express");

const studentController = require("../controller/studentController");
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;

    try {
      console.log("Function Called");
      let data = await studentController.addStudent(details);
      if (data) return res.status(200).redirect("/api/student/get")
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;
 
  //
  router.get("/get", async (req, res) => {
    try {
       studentController.getstudent().then(data=>{
        res.render("../views/student_register",{pageTitle:'Get Student',path:"/get",userData:data});
       }).catch(err=>console.log(err));
      
    } catch (e) {
      res.send(e.message);
    }
  });

  router.post("/update/:R_number",async(req,res) =>{
    let R_number = req.params.R_number;
    let details = req.body;
    try {
      let data = await studentController.updatestudent(R_number,details);
      if (data) return res.status(200).redirect("/api/student/get")
    } catch (e) {
      res.send(e.message);
    }

  });

  router.get("/update",async(req,res) =>{
    try{
      studentController.getstudent().then(data=>{
        res.render("../views/updateStudent",{pageTitle:'Get Student',path:"/update",userdata:data});
       }).catch(err=>console.log(err));
       console.log(data);
    }
    catch(err){
      console.log(err);
    }
  });

  

  router.post("/delete/:R_number",async(req,res) =>{
    let R_number = req.params.R_number;
    try {
      console.log(R_number)
      let data = await studentController.removeStudent(R_number);
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }

  });

  module.exports = router;

 