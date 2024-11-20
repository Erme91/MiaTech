let waterbottle = {
    material: "plastic",
    color: "orange",
    shape: "oval"
};

let {material: firstProp, color: secondProp, shape: thirdProp} = waterbottle;

console.log(firstProp, secondProp, thirdProp)