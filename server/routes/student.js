const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;
    //const item=await dbOperations.getfooditem(details.food_id);
    //const total=item[0].price*details.quantity
    //console.log(total)
    try {
      let data = await dbOperations.addStudent(details);
      if (data) return res.status(200).json({ msg: "Student added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;

  //
  router.get("/get", async (req, res) => {
    console.log("Today Menu");
    try {
      let data = await dbOperations.student();
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;