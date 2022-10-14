const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();

router.post("/add", async (req, res) => {
    let details = req.body;
    //const item=await dbOperations.getfooditem(details.food_id);
    //const total=item[0].price*details.quantity
    //console.log(total)
    try {
      let data = await dbOperations.adddoctor(details);
      if (data) return res.status(200).json({ msg: "Doctor added" });
      res.status(400).json({ error: "FATAL ERROR: complaint not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;