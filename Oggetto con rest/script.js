let necklace = {
    material: "silver",
    lenght: 45,
    pendant: "moon",
    details: "crystals"
};

let {material: value1, lenght: value2, ...rest} = necklace;

console.log(value1, value2);
console.log(rest)



