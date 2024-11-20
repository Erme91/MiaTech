function sum(...argoments){
    let total = 0;
    for(const argoment of argoments){
        total += argoment;
    }
    return total
};

console.log(sum(10, 30, 45));
console.log(sum(150, 230, 78));
console.log(sum(1, 2, 3, 5))