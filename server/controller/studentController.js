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


function addStudent(details) {
    return new Promise(async (resolve, reject) => {
      console.log(details);
     let {R_number,First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty} = details;
   //console.log(first_name);
  let sql = `INSERT INTO student(R_number,First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty)
      VALUES('${R_number}','${First_name}','${Last_name}','${Age}','${Addres}','${email}','${Hostel_or_not}','${Fucalty}')`;
                
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

  module.exports = {
    getstudent:getstudent,
    addabout_disease: addabout_disease,
    addStudent:addStudent,


  }