function sommaNumeri(n){

    let somma = 0;

    for(let i = 1; i <= n; i++){
        somma = somma + i;
    }
    return somma
}

const risultato = sommaNumeri(5)
console.log(risultato)