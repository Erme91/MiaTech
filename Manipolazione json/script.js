let people = `[
   {  "nome": "Josh",
      "età": 35,
      "città": "London"
   },
   {
      "nome": "Delphine",
      "età": 56,
      "città": "Marseille"
   },
   {
      "nome": "Hermann",
      "età": 28,
      "città": "Stuttgart"
  }
]`;

let newPeople = JSON.parse(people);

let newPersona = {
   "nome": "Uthman",
   "età": 40,
   "città": "Istanbul"
};

newPeople.push(newPersona);

let addedPeople = JSON.stringify(newPeople);

console.log(addedPeople)