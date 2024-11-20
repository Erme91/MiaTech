let people = '{"leader": "Josh", "vice": "Hermann", "employee": "Nick", "helper": "Carl"}';

let newPeople = JSON.parse(people);

console.log(newPeople);

let people2 = {
   employee: "Nick",
   helper: "Carl",
   intern: "Lionel",
   leader: "Josh",
   vice: "Hermann",
};

let addedPeople = JSON.stringify(people2);

console.log(addedPeople)