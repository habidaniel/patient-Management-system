const express=require("express");
const app=express();
const mongoose=require("mongoose")
const dbURL="mongodb://localhost:27017/studentdb"
mongoose.connect(dbURL)
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});