const mysql = require("mysql");
var config = require("../config/config");
const bcrypt=require("bcrypt");
const { join } = require("path");
const Joi = require("joi");
const e = require("express");

// Connect to Database
let db = mysql.createConnection(config.databaseOptions);
db.connect((error) => {
  if (error) console.log(error.message);
  else {
    console.log("Connected to the Database...");
  }
});


function adddocto(details){
  return new Promise(async (resolve, reject) => {
    let { First_name,Last_name,Telephone_number,Work_time,Work_hospital,Special,Email,today_work} =
      details;
      console.log(Fucalty);
let sql = `INSERT INTO doctor(First_name,Last_name,Telephone_number,Work_time,Work_hospital,Special,Email,today_work)
    VALUES('${First_name}','${Last_name}','${Telephone_number}','${Work_time}','${Work_hospital}','${Special}','${Email}','${today_work}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddoctor"));
    });
          });

  
}

function addStudent(details) {
  return new Promise(async (resolve, reject) => {
    let {First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty} = details;
      //console.log(Fucalty);
      console.log(details[0].Age)
let sql = `INSERT INTO student(First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty)
    VALUES('${details[0].First_name}','${details[0].Last_name}','${details[0].Age}','${details[0].Addres}','${details[0].email}','${details[0].Hostel_or_not}','${details[0].Fucalty}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from addstudent"));
    });
          });

  
}
function adddrug(details) {
  return new Promise(async (resolve, reject) => {
    let { Drugs_name,cost_0PU,ex_date,No_patient  } = details;

let sql = `INSERT INTO drug_pricing(Drugs_name,cost_0PU,ex_date,No_patient)
    VALUES('${Drugs_name}','${cost_0PU}','${ex_date}','${No_patient}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}

function addhistory(details) {
  return new Promise(async (resolve, reject) => {
    let { Allergy_medication,Disease_id  } = details;

let sql = `INSERT INTO privet_preson_history(Allergy_medication,Disease_id)
    VALUES('${Allergy_medication}','${Disease_id}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}

function addtreatement(details) {
  return new Promise(async (resolve, reject) => {
    let {Disease_symptoms,First_aid} = details;

let sql = `INSERT INTO medical_treatement(Disease_symptoms,First_aid)
    VALUES('${Disease_symptoms}','${First_aid}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}

function adddisease(details) {
  return new Promise(async (resolve, reject) => {
    let { number,id } = details;

let sql = `INSERT INTO medical_treatement(number,id)
    VALUES('${number}','${id}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}

function addrecommend(details) {
  return new Promise(async (resolve, reject) => {
    let {E_number,	No_of_Patient,date,Recommend,Doctor,disease_id} = details;

let sql = `INSERT INTO doctor_recomend(E_number,No_of_Patient,date,Recommend,Doctor,disease_id)
    VALUES('${E_number}','${No_of_Patient}',${date}','${Recommend}','${Doctor}','${disease_id}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}

function addabout_disease(details) {
  return new Promise(async (resolve, reject) => {
    let {R_number,Symptoms,date,Treatement_id,Doctor } = details;

let sql = `INSERT INTO about_the_disease(R_number,Symptoms,date,Treatement_id,Doctor)
    VALUES('${R_number}','${Symptoms}','${date}','${Treatement_id}','${Doctor}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}
function addrisevetion(details) {
  return new Promise(async (resolve, reject) => {
    let {Student_id,Date,Number_of_meet,Time,Doctor } = details;

let sql = `INSERT INTO doctor_risevetion(Student_id,Date,Number_of_meet,Time,Doctor)
    VALUES('${Student_id}','${Date}','${Number_of_meet}','${Time}','${Doctor}')`;
              
    db.query(sql, (error, _results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}




function getstudent() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM student`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
    });
  });
}

function getdoctor() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM doctor`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error "));
    });
  });
}


function getdrug() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM drug_pricing`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error "));
    });
  });
}

function gethistory() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM privet_preson_history`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error "));
    });
  });
}
function gettreatement() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM medical_treatement`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error "));
    });
  });
}

function getdisease() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM enter_disease`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error "));
    });
  });
}

function getrecommend() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM doctor_recommennd`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
    });
  });
}

function getrisevetion() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM doctor_risevetion`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
    });
  });
}

function getabout_disease() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM about_the_disease`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
    });
  });
}

function today_patient(date){
  return new Promise((resolve, reject) => {
    sql = `SELECT R_number
           FROM about_the_disease
           where date = '${date}'`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
    });
  });

}

function work_doctor(today_work){
  return new Promise((resolve, reject) => {
    sql = `SELECT First_name,Last_name,Telephone_number,Work_time
    from doctor
    where today_work = '${today_work}';`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
    });
  });

}


function removeDoctor(details) {
  return new Promise(async (resolve, reject) => {
let sql = `DELETE FROM doctor WHERE Doctor_id = '${details}'`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);
      reject(new Error("from addtodaymenu"));
    });
  });
}

function updateDoctor(id,details) {
  return new Promise(async (resolve, reject) => {
    console.log(details)
let sql = `UPDATE doctor
SET 	Telephone_number = '${details[0].Telephone_number} '
WHERE Doctor_id = '${id}';`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);
      reject(new Error("from addtodaymenu"));
    });
  });
}



  
  module.exports = {
   
    addStudent:addStudent,
    getstudent:getstudent,
    adddocto :adddocto,
    getdoctor : getdoctor,
    adddrug : adddrug,
    getdrug : getdrug,
    addhistory:addhistory,
    gethistory:gethistory,
    addtreatement:addtreatement,
    gettreatement:gettreatement,
    adddisease:adddisease,
    getdisease:getdisease,
    addrecommend :addrecommend,
    getrecommend:getrecommend,
    getabout_disease:getabout_disease,
    addabout_disease:addabout_disease,
    getrisevetion:getrisevetion,
    addrisevetion:addrisevetion,
    today_patient:today_patient,
    work_doctor:work_doctor,
    removeDoctor:removeDoctor,
    updateDoctor:updateDoctor,

  };
  