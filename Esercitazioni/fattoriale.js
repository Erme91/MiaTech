function fattoriale(n){

    let result = 1;

    for(let i = 1; i <= n; i++){
        result = result * i;
    }
    return result
}

const n = 6
console.log(fattoriale(n))