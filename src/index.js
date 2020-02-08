const express = require("express");
const bodyparser = require("body-parser");
const stu = require("./models/Students");
const app = express();
app.get("/", (request, response) => {
  response.send("hello");
});
app.use(bodyparser.json());
app.get("/students", (request, response) => {
  //response.status(200);
  response.json(stu);
  // response.send(stu);
});
app.post("/students", (request, response) => {
  // response.send(request.body);
  if (request.body.id && request.body.firstname) {
    stu.push(request.body);
    response.status(200).json({ message: "Student created successfully" });
  } else {
    response.status(400).send("bad request");
  }
});
app.get("/students/:id", (request, response) => {
  const {id =""}=request.params;
  const requiredStudent=stu.find(stu=>{
    if(parseInt(id)===stu.id) return true;
    else return false;

  });
  response.status(200).json({student:requiredStudent});
});
const server = app.listen(8080, (request, response) => {
  console.log(`Server running on port ${server.address.port}.`);
});
