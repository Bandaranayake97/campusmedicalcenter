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
              
    db.query(sql, (error, results) => {
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
      console.log(Fucalty);
let sql = `INSERT INTO student(First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty)
    VALUES('${First_name}','${Last_name}','${Age}','${Addres}','${email}','${Hostel_or_not}','${Fucalty}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from addstudent"));
    });
          });

  
}


function student() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM student`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" "));
    });
  });
}

function doctor() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM doctor`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" "));
    });
  });
}

function adddrug(details) {
  return new Promise(async (resolve, reject) => {
    let { Drugs_name,cost_0PU,ex_date,No_patient  } = details;
      console.log(Fucalty);
let sql = `INSERT INTO student(Drugs_name,cost_0PU,ex_date,No_patient)
    VALUES('${Drugs_name}','${cost_0PU}','${ex_date}','${No_patient}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adddruug"));
    });
          });

  
}
function drug_pricing() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM drug_pricing`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" "));
    });
  });
}



  
  module.exports = {
   
    addStudent:addStudent,
    student:student,
    adddocto :adddocto,
    doctor : doctor,
    adddrug : adddrug,
    drug:drug
 

  };
  