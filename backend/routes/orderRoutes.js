const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// save order
router.post("/create", async (req,res)=>{
  const order = await Order.create(req.body);
  res.json(order);
});

// get all orders
router.get("/", async (req,res)=>{
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;
