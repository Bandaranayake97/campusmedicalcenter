const express = require("express");
const DoctorController = require("../controller/DoctorController")
const router = express.Router();



/*router.post("/get", async (req, res) => {
    let details = req.body;

    try {
       DoctorController.gettreatement(details).then(Data=>{res.render("../views/student",
       {pageTitle:'Get first aid',data:Data,path:"/get"})});
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });*/
  
  //
  router.post("/get", async (req, res) => {
    let  data = req.body.Treatement_id;
    console.log(req.body);
    //data=data.slice(1,data.length);
    try {
      DoctorController.gettreatement(data).then(Data=>{res.render("../views/student",
      {pageTitle:'Get first aid',data:Data,path:"/get"})});
      console.log(data.length)
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;
