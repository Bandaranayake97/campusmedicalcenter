const express=require("express");
const app=express();
const session=require("express-session")
const config=require('./config/config')

const helmet = require("helmet");
app.use(helmet());


const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use((session({
secret:"ABCDefg",
resave:false,
saveUninitialized:true
})))


const student = require("./routes/student");
const doctor = require("./routes/doctor");
const drug_pricing = require("./routes/drug_pricing");
const privet_person_history = require("./routes/privet_preson_history");
const medical_treatement = require("./routes/medical_treatement");
const enter_disease = require("./routes/enter_disease");
//const { drug } = require("./controller/dbOperations");



app.use("/api/student", student);
app.use("/api/doctor",doctor);
app.use("/api/drug_pricing",drug_pricing);
app.use("/api/privet_preson_history", privet_person_history);
app.use("/api/medical_treatement",medical_treatement);
app.use("/api/enter_disease",enter_disease);


  
app.listen(3001,()=>{
console.log("server running on port 3001");

});