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
    let { First_name,Last_name,Telephone_number,Work_time,Work_hospital,Special,Email } =
      details;
      console.log(Fucalty);
let sql = `INSERT INTO doctor(First_name,Last_name,Telephone_number,Work_time,Work_hospital,Special,Email)
    VALUES('${First_name}','${Last_name}','${Telephone_number}','${Work_time}','${Work_hospital}','${Special}','${Email}')`;
              
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
    let { First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty } = details;
      //console.log(Fucalty);
let sql = `INSERT INTO student(First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty)
    VALUES('${First_name}','${Last_name}','${Age}','${Addres}','${email}','${Hostel_or_not}','${Fucalty}')`;
              
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
    let { Treatement_id,Disease_symptoms,First_aid  } = details;

let sql = `INSERT INTO privet_preson_history(Treatement_id,Disease_symptoms,First_aid)
    VALUES('${Treatement_id}','${Disease_symptoms}','${First_aid}')`;
              
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
    
 

  };
  