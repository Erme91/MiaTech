function numbers() {
    return new Promise((result) => {
        setTimeout(() => {
            result(10)
        }, 1000);
    });
};

numbers()
.then((num) => {
    console.log(`Il numero all'inizio è: ${num}`);
    return num * 2
})

.then((multiply) => {
    console.log(`Il nuovo valore con la moltiplicazione è: ${multiply}`);
    return multiply + 3
})

.then((result) => {
    console.log(`Il risultato finale, dopo l'addizione, è: ${result}`);
})

