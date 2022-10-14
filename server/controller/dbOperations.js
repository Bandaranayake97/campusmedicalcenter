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
    let { First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty } =
      details;
      console.log(Fucalty);
let sql = `INSERT INTO student(First_name,Last_name,Age,Addres,email,Hostel_or_not,Fucalty)
    VALUES('${First_name}','${Last_name}','${Age}','${Addres}','${email}','${Hostel_or_not}','${Fucalty}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from addseller"));
    });
          });

  
}


function student() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM student`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from getSellersInfo"));
    });
  });
}





  

  // function getcustomer(email) {
  //   return new Promise((resolve, reject) => {
  //     console.log("getAdmin called" , email);
  //     let sql = `SELECT * FROM customer 
  //                         WHERE email = '${email}'
  //                         LIMIT 1`;
  //     db.query(sql, (error, results) => {
  //       if (error) console.log(error.message);
  //       resolve(results);
  //       console.log(results.name)
  //       reject(new Error("from get admin"));
  //     });
  //   });
  // }
  
  module.exports = {
   
    addStudent:addStudent,
    student:student
    //getcustomer:getcustomer

  };
  