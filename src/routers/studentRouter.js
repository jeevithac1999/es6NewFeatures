const express = require("express");
const students = require("../models/Students");
const studentRouter = express.Router();

studentRouter
.post("/", (req, res) => {
  if (req.body.firstname && req.body.lastname) {
    students.push(req.body);
    res.status(200).json({ message: "Student created successfully" });
  } else {
    res.status(400).send("Bad Request");
  }
})
.get("/:id", (req, res) => {
  // const studentId = req.params.id;
  const { id = "" } = req.params;
  const requiredStudent = students.find(student => {
    if (parseInt(id) === student.id) return true;
    else return false;
  });
  if(requiredStudent) {
    res.status(200).json({ student: requiredStudent });
  } else {
    res.status(404).send("Not Found");
  }
})
  .patch("/:id", (req, res) => {
    const { id } =req.params;
    
    let requiredStudentIndex;
    const requiredStudent = students.find((student, studentIndex) => {
      if (parseInt(id) === student.id) {
        requiredStudentIndex = studentIndex;
        return true;
      } return false;
    });
    if(requiredStudent){
    const { 
      firstname=requiredStudent.firstname,
      lastname=requiredStudent.lastname, 
      age=requiredStudent.age,
      gender=requiredStudent.gender,
      marks=requiredStudent.marks } = req.body;
    students[requiredStudentIndex]={
      id:requiredStudent.id,
      firstname,
      lastname,
      age,
      gender,
      marks
    };
    }
    console.log(req.body);
    console.log(requiredStudent);
    console.log(requiredStudentIndex);
    res.status(200).send("ok");
  })
  .delete("/:id", (req, res) => {
    const {id} = req.params;
    let requiredStudentIndex;
    const requiredStudent = students.find((student, studentIndex) => {
      if (parseInt(id) === student.id) {
        requiredStudentIndex = studentIndex;
        return true;
      }
      return false;
    });
    if(requiredStudent) {
      students.splice(requiredStudentIndex, 1);
      res.status(200).json({ message: "Student has been deleted" });
    } else {
      res.status(400).send("Bad Request");
    }
  });

module.exports = studentRouter;
