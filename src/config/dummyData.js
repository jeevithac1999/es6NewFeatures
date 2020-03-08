const Studentsinfo=require("../models/StudentsInfo");
const Marks=require("../models/StudentsMarks");

const newStudent = [
  {
    firstname: "Jeevitha",
    lastname: "Chamarthi",
    age: 23,
    gender: "female"
  },
  {
    firstname: "Harish",
    lastname: "Chamarthi",
    age: 23,
    gender: "male"
  },
  {
    firstname: "Bhagyalakshmi",
    lastname: "Chamarthi",
    age: 24,
    gender: "female"
  },
  {
    firstname: "Venkatachalapathy",
    lastname: "Chamarthi",
    age: 24,
    gender: "male"
  }
];

const newStudentMarks = [
  {
    id: 1,
    subjects: "subject1",
    marks: 99
  },
  {
    id: 1,
    subjects: "subject2",
    marks: 60
  },
  {
    id: 1,
    subjects: "subject3",
    marks: 98
  },
  {
    id: 1,
    subjects: "subject4",
    marks: 64
  },
  {
    id: 1,
    subjects: "subject5",
    marks: 25
  },
  {
    id: 2,
    subjects: "subject1",
    marks: 90
  },
  {
    id: 2,
    subjects: "subject2",
    marks: 92
  },
  {
    id: 2,
    subjects: "subject3",
    marks: 91
  },
  {
    id: 2,
    subjects: "subject4",
    marks: 66
  },
  {
    id: 2,
    subjects: "subject5",
    marks: 33
  },
  {
    id: 3,
    subjects: "subject1",
    marks: 89
  },
  {
    id: 3,
    subjects: "subject2",
    marks: 88
  },
  {
    id: 3,
    subjects: "subject3",
    marks: 87
  },
  {
    id: 3,
    subjects: "subject4",
    marks: 82
  },
  {
    id: 3,
    subjects: "subject5",
    marks: 77
  },
  {
    id: 4,
    subjects: "subject1",
    marks: 86
  },
  {
    id: 4,
    subjects: "subject2",
    marks: 85
  },
  {
    id: 4,
    subjects: "subject3",
    marks: 93
  },
  {
    id: 4,
    subjects: "subject4",
    marks: 84
  },
  {
    id: 4,
    subjects: "subject5",
    marks: 92
  }
];

Studentsinfo.sync({ force: true })
  .then(async () => {
    await Studentsinfo.bulkCreate(newStudent, { returning: false });

    Marks.sync({ force: true }).then(async () => {
      await Marks.bulkCreate(newStudentMarks, {
        returning: false
      });
    });
  })
  .catch(e => {
    console.error(e.message);
  });