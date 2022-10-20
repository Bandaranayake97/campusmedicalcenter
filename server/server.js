const express=require("express");
const app=express();
  const session=require("express-session")
  const config=require('./config/config')
  const bodyParser = require('body-parser');


  app.use(bodyParser.urlencoded({ extended: true })); 

  const helmet = require("helmet");
  app.use(helmet());


  const cors = require("cors");
  app.use(express.json());
  app.use(cors());

  app.use((session({
  secret:"ABCDefg",
  resave:false,
  saveUninitialized:true
 })));
//app.use(express.static('public'))
 app.get('/',(req,res)=>{
 res.sendFile(__dirname + '/index.html');
 
 })
 app.get('/login',(req,res)=>{
  res.sendFile(__dirname + '/loginDoctor');
  
  })
//
 const student = require("./routes/student");
 const doctor = require("./routes/doctor");
 const drug_pricing = require("./routes/drug_pricing");
 const privet_person_history = require("./routes/privet_preson_history");
 const medical_treatement = require("./routes/medical_treatement");
 const enter_disease = require("./routes/enter_disease");
 const about_the_disease = require("./routes/about_the_disease");
 const doctor_recomend = require("./routes/doctor_recommend");
 const doctor_risevetion = require("./routes/doctor_risevetion");




 app.use("/api/student", student);
 app.use("/api/doctor",doctor);
 app.use("/api/drug_pricing",drug_pricing);
 app.use("/api/privet_preson_history", privet_person_history);
 app.use("/api/medical_treatement",medical_treatement);
 app.use("/api/enter_disease",enter_disease);
 app.use("/api/doctor_risevetion",doctor_risevetion);
 app.use("/api/doctor_recomend",doctor_recomend);
 app.use("/api/about_the_disease",about_the_disease   );


  
app.listen('4000',()=>{
console.log("server in started on port: 4000");

});