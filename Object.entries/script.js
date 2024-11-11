let student = {
    name: "Ermelinda",
    age: "32",
    grade: "Philosophy degree",
    school: "University of Perugia"
}

Object.entries (student)

Object.entries(student).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  })

