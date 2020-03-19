const Sequelize=require("sequelize");
const ClassDB=require("../config/classDB");
// {
//   id: 1,
//   firstName: "",
//   lastName: "",
//   class: "",
//   subject: ""
// }

const Teacher=ClassDB.define("teachers",{
  id:{
  type:Sequelize.INTEGER,
  primaryKey:true,
  autoIncrement:true
  },
  firstName:{
    type:Sequelize.STRING,
    field:"first_name",
    allowNull:false
  },
  lastName:{
    type:Sequelize.STRING,
    field:"last_name",
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    unique:true,
    validate:{
      isEmail:true
    }
  },
  class:Sequelize.STRING,
  subject:{
    type:Sequelize.ENUM,
    values:["english","maths","Telugu"],
    allowNull:false
  }
});
const newTeacher=[{
  firstName:"Jeevitha",
  lastName:"Chamarthi",
  email:"jeevithac1999@gmail.com",
  subject:"Telugu"
},
{
  firstName:"Jeevitha",
  lastName:"Chamarthi",
  email:"jeevithac199@gmail.com",
  subject:"Telugu"
},
{
  firstName:"Jeevitha",
  lastName:"Chamarthi",
  email:"jeevithac19@gmail.com",
  subject:"Telugu"
},
{
  firstName:"Jeevitha",
  lastName:"Chamarthi",
  email:"jeevithac@gmail.com",
  subject:"Telugu"
}];
// Teacher.sync({force:false})
//   .then(()=>{
//     console.log("table created");
//     return Teacher.create(newTeacher);
//   })
//   .then(result=>{
//     console.log(result.get());
//   })
//   .catch(console.error);

// Teacher.findOne({
//   where:{
//     email:"jeevithac1999@gmail.com"
//   }
// })
// .then(teacherInstance=>{
//   console.log(teacherInstance.get());
// })
// .catch(console.error);


//seed operation
Teacher.sync({force:true})
  .then(()=>{
    return Teacher.bulkCreate(newTeacher,{returning:true});
  })
  .then(result=>{
    console.log(result.forEach(item => console.log(item.get())));
  })
  .catch(console.error);