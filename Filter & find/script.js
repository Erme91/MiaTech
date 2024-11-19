let students = [{
    name: "Carlo",
    grade: 57,
},
{
    name: "Giovanni",
    grade: 60,
},
{
    name: "Alessia",
    grade: 90,
}
];

let passedStudents = students.filter((student) => student.grade >= 60);

console.log(passedStudents)

passedStudents = students.find((student) => student.grade < 60);

console.log(passedStudents)


