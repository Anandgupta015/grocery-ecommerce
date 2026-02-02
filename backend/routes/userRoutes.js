const express = require("express");
const User = require("../models/User");

const router = express.Router();

// login / create user
router.post("/login", async (req,res)=>{
  const { name, email } = req.body;

  let user = await User.findOne({ email });

  if(!user){
    user = await User.create({ name, email });
  }

  res.json(user);
});

module.exports = router;
