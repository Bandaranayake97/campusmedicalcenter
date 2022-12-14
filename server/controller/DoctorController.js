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


function adddoctor(details){
  return new Promise(async (resolve, reject) => {
    let { First_name,Last_name,Telephone_number,Work_time,Work_hospital,Special,Email} =details;
      //console.log(Fucalty);
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

function getmaindisaese(date1,date2){
  return new Promise((resolve, reject) => {
    sql = `SELECT ab.Treatement_id,md.Disease_symptoms,md.First_aid
          FROM about_the_disease as ab
          INNER JOIN  medical_treatement as md
          ON ab.Treatement_id = md.Treatement_id
          WHERE ab.date between "${date1}" and "${date2}"`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
    });
  });
  
}
function gettodaywork(date1){
console.log("...................");
console.log(date1);
  return new Promise((resolve, reject) => {
   let sql = `select ad.R_number,st.First_name,st.Age,st.Hostel_or_not,st.Fucalty,ad.Treatement_id,mt.Disease_symptoms,ph.Allergy_medication
from about_the_disease as ad
inner join medical_treatement as mt
on ad.Treatement_id = mt.Treatement_id
inner join doctor as d
on ad.Doctor = d.Doctor_id
inner join doctor_recommend as dr
on d.Doctor_id =  dr.Doctor
inner join privet_preson_history as ph
on dr.disease_id = ph.Disease_id
inner join enter_disease as ed
on ed.id = ad.Disease_id
inner join student as st
on st.R_number = ed.number
where ad.date = '${date1}' `;
console.log("..................................................")
console.log(sql);

     db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      console.log(result)
      reject(new Error(" Error"));
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
function gettreatement(tretment) {
  console.log(tretment);
  return new Promise((resolve, reject) => {
    sql = `SELECT  Treatement_id,Disease_symptoms,First_aid
           FROM medical_treatement
           WHERE Treatement_id = '${tretment}'`;
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

function getabout_disease(date) {
  return new Promise((resolve, reject) => {
    sql = `SELECT R-number,Treatement_id 
           FROM about_the_disease
           WHERE date = "${date}"`;
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
   

    adddoctor :adddoctor,
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
    getrisevetion:getrisevetion,
    addrisevetion:addrisevetion,
    today_patient:today_patient,
    work_doctor:work_doctor,
    removeDoctor:removeDoctor,
    updateDoctor:updateDoctor,
    getmaindisaese:getmaindisaese,
    gettodaywork:gettodaywork
  };
  