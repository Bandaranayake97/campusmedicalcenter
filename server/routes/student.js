const express = require("express");

const studentController = require("../controller/studentController");
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;

    try {
      //console.log("Function Called");
      let data = await studentController.addStudent(details);
      if (data) return res.status(200).redirect("/")
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

  router.get("/getupdateStudent/:R_number",async(req,res)=>{
    let R_number = req.params.R_number;
    R_number=R_number.slice(1,R_number.length);

    try{
      studentController.getstudent().then(userdata=>{studentController.getoneStudent(R_number).then(data=>{

        res.render("../views/updateStudent",{pageTitle:'Get Student',path:"/getupdateStudent/:R_number",student: data,userdata:userdata});
        
      })})
      
    }catch(err){
      console.log(err);
    }
  });



  router.post("/updatestudent/:R_number/add",async(req,res) =>{
    let R_number = req.body.R_number;
  //  console.log("R is Here");
    //console.log(R_number);
    let data = req.body;
   // console.log(data);
    try {
       studentController.updatestudent(R_number,data);
      if (data) return res.status(200).redirect("/api/student/update")    
  }catch(err){
    console.log(err);
  }

  });

  router.get("/update",async(req,res) =>{
    try{
      studentController.getstudent().then(data=>{
       const student= [{
          
            R_number: '',
            First_name: '',
            Last_name: '',
            Age: '',
            Addres: '',
            email: '',
            Hostel_or_not: '',
            Fucalty: '',
            pasword: ''
          
       }];
       console.log(student.R_number);
        res.render("../views/updateStudent",{pageTitle:'Get Student',path:"/update",userdata:data,student:student});
       }).catch(err=>console.log(err));
       
    }
    catch(err){
      console.log(err);
    }
  });

  

  router.get("/delete/:R_number",async(req,res) =>{
    let R_number = req.params.R_number;
    R_number=R_number.slice(1,R_number.length);
    console.log("R is Here");
    console.log(R_number);
    try {
      let data = studentController.removeStudent(R_number);
      if(data) return res.redirect("/api/student/update") ;
    } catch (e) {
      res.send(e.message);
    }

  });

  module.exports = router;

 