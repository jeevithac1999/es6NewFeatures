const express=require("express");
const students=require("../models/Students");

const studentsRouter=express.Router();

studentsRouter
.get("/",(req,res)=>{
res.status(200).json([students]);
})
.post("/",(request,response)=>{
  if (request.body.id && request.body.firstname) {
    students.push(request.body);
    response.status(200).json({ message: "Student created successfully" });
  } else {
    response.status(400).send("bad request");
  }
})
module.exports=studentsRouter;