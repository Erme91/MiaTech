let waterbottle = {
    material: "plastic",
    color: "orange",
    shape: "oval"
};

let {material: M, color: C, shape: S, price = 10, weight = 600} = waterbottle;

console.log(M, C, S, price, weight) 