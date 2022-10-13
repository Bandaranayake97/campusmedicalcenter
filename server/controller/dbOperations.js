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
    let { First_name,Last_name,age,address,email,hostal_or_not,faculty } =
      details;
      console.log(First_name);
let sql = `INSERT INTO student(First_name,Last_name,Age,Address,email,Hostal_or_not,Faculty)
    VALUES('${First_name}','${Last_name}','${age}',${address},${email},${hostal_or_not},${faculty})`;
              
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







function getMenuInfo() {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM food_item where available = 1`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        // console.log(result);
        resolve(result);
        reject(new Error("from  todaymenu"));
      });
    });
  }

  function getSellerAvailableFood(id) {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM food_item where available = 1 AND seller_id = '${id}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        // console.log(result);
        resolve(result);
        reject(new Error("from  todaymenu"));
      });
    });
  }
 

  function addSeller(details) {
    return new Promise(async (resolve, reject) => {
      let { name,phone_number,password } =
        details;
        console.log(name);
  let sql = `INSERT INTO seller(name,phone_number,password)
      VALUES('${name}','${phone_number}','${password}')`;
                
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


  function addcustomer(details) {
    return new Promise(async (resolve, reject) => {
      let { name,email,password,cpassword } =
        details;
        //console.log(password);
      //   const salt=await bcrypt.genSalt(10);
      //   hashpassword =await bcrypt.hash(password,salt);
      //  console.log(
      //   password,   hashpassword
      //  );

      // bcrypt.hash(password, 10, function(err, hash) {
      //   if (err) { throw (err); }
      
  let sql = `INSERT INTO customer(name,email,password)
      VALUES('${name}','${email}','${password}')`;
      
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
      
        reject(new Error("from customer"));
      });
            
    //});
  });
  
  }


  function addtodaymenu(details) {
    return new Promise(async (resolve, reject) => {
      let { food_item_id } = details;
  let sql = `UPDATE food_item SET available = 1 where id = '${food_item_id}' AND available = 0`;
                
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

  function removetodaymenu(details) {
    return new Promise(async (resolve, reject) => {
      let { food_item_id } = details;
  let sql = `UPDATE food_item SET available = 0 where id = '${food_item_id}' AND available = 1`;
                
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

  function confirmOrder(order_id) {
    return new Promise(async (resolve, reject) => {
      
  let sql = `UPDATE orders SET status = "Finished" where id = '${order_id}'`;
                
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

  function seller() {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM seller`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        resolve(result);
        reject(new Error("from getSellersInfo"));
      });
    });
  }

  function addfooditem(details) {
    return new Promise(async (resolve, reject) => {
      let { seller_id,name,image } =
        details;
        console.log(name);
  let sql = `INSERT INTO food_item(seller_id,name,image)
      VALUES('${seller_id}','${name}','${image}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from addfooditem p"));
      });
    });
  }

  function addcompliant(details) {
    return new Promise(async (resolve, reject) => {
      let { C_date,subject,description,customer_id } =
        details;
        console.log(C_date);
  let sql = `INSERT INTO complaint( C_date,subject,description,customer_id)
      VALUES('${C_date}','${subject}','${description}','${customer_id}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from complaint"));
      });
    });
  }

  function complaint() {
    return new Promise((resolve, reject) => {
      sql = `SELECT customer.name, complaint.subject, complaint.description, complaint.C_date
      FROM complaint
      INNER JOIN customer
      ON complaint.customer_id = customer.id
       `;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        resolve(result);
        reject(new Error("from ComplaintInfo"));
      });
    });
  }


  function customer(email) {
    return new Promise((resolve, reject) => {
      console.log(email);
      sql = `SELECT * FROM customer where email = '${email}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });
  }

  function getfooditem(id) {
    return new Promise((resolve, reject) => {
      
      sql = `SELECT * FROM food_item where id = '${id}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getFoodInfo"));
      });
    });
  }

  function getfooditems(id) {
    return new Promise((resolve, reject) => {
      sql = `SELECT * FROM food_item where seller_id = '${id}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        // console.log(result)
        resolve(result);
        reject(new Error("from getFoodInfo"));
      });
    });
  }
 
  function myorders(id) {
    return new Promise((resolve, reject) => {
      // console.log(id);
      sql = 
      `SELECT orders.id, food_item.name, orders.quantity, orders.total,orders.status
      FROM orders
      INNER JOIN customer
      ON orders.customer_id = customer.id
      INNER JOIN food_item
      ON food_item.id = orders.food_id 
       where customer.id = '${id}' ORDER BY id DESC`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       resolve(result);
      //  console.log(result);
        reject(new Error("from ordersInfo"));
      });
    });
  }


  function sellerorders(id) {
    return new Promise((resolve, reject) => {
      // console.log(id);
      sql = 
      `SELECT  food_item.name, orders.quantity, orders.total, orders.status, orders.id
      FROM orders
      INNER JOIN food_item
      ON orders.food_id = food_item.id
      INNER JOIN seller
      ON food_item.seller_id = seller.id 
       where seller.id = '${id}' ORDER BY id DESC`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
       resolve(result);
      //  console.log(result);
        reject(new Error("from ordersInfo"));
      });
    });
  }

  function addorder(details,total) {
    let today = new Date(Date.now());

    console.log(today);
    return new Promise(async (resolve, reject) => {
      let { customer_id,food_id,quantity,status } =
        details;

        
  let sql = `INSERT INTO orders( customer_id,food_id,quantity,total,date,status)
      VALUES('${customer_id}','${food_id}','${quantity}','${total}','${today.toISOString().split('T')[0]}','${status}')`;
                
      db.query(sql, (error, results) => {
        if (error) {
          console.log(error.message);
          resolve(false);
        }
        resolve(true);
        reject(new Error("from complaint"));
      });
    });
  }
  
  function getseller(name) {
    return new Promise((resolve, reject) => {
      console.log(name);
      sql = `SELECT * FROM seller where name = '${name}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });

    
  }
  function admin(name) {
    return new Promise((resolve, reject) => {
      console.log(name);
      sql = `SELECT * FROM admin where name = '${name}'`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });
  }
  

  function income(){
    return new Promise((resolve, reject) => {
      sql = ` SELECT  seller.name, SUM(orders.total) as 'revenue'
      FROM orders
      JOIN food_item
      ON orders.food_id = food_item.id 
      JOIN seller
      ON seller.id = food_item.seller_id 
     GROUP by seller.name;`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
      });
    });

  }
  function orders() {
    return new Promise((resolve, reject) => {
      sql = `SELECT id as 'token',total from orders`;
      db.query(sql, (error, result) => {
        if (error) console.log(error.message);
        console.log(result)
        resolve(result);
        reject(new Error("from getCustomerInfo"));
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
    confirmOrder:confirmOrder,
    getMenuInfo: getMenuInfo,
    addSeller: addSeller,
    seller:seller,
    addtodaymenu:addtodaymenu,
    removetodaymenu:removetodaymenu,
    getSellerAvailableFood:getSellerAvailableFood,
    addfooditem:addfooditem,
    customer: customer,
   // addCustomer:addCustomer,
    addcompliant:addcompliant,
    complaint:complaint,
    addcustomer: addcustomer,
    getseller:getseller,
    admin:admin,
    myorders:myorders,
    getfooditem:getfooditem,
    getfooditems:getfooditems,
    addorder:addorder,
    sellerorders:sellerorders,
    income:income,
    orders:orders,
    addStudent:addStudent,
    student:student
    //getcustomer:getcustomer

  };
  