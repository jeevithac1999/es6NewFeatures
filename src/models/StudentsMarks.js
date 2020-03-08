const Sequelize = require("sequelize");
const ClassDB = require("../config/classDB");
const Student = require("./StudentsInfo");

const StudentMarks = ClassDB.define("marks", {
  row_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  subjects: {
    type: Sequelize.ENUM,
    values: ["subject1", "subject2", "subject3", "subject4", "subject5"],
    allowNull: false
  },
  marks: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
StudentMarks.belongsTo(Student, { foreignKey: "id" });

module.exports = StudentMarks;
