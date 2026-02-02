const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect using .env
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req,res)=>{
  res.send("Backend working 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log("Server running on port", PORT);
});
