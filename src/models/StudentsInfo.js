const Sequelize = require("sequelize");
const ClassDB = require("../config/classDB");

const StudentInfo = ClassDB.define("studentsinfos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: Sequelize.STRING,
    field: "first_name",
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    field: "last_name",
    allowNull: false
  },
  age: Sequelize.INTEGER,
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = StudentInfo;
