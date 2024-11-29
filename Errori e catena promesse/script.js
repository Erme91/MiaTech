function valoreCasuale() {
    return new Promise((resolve, reject) => {
        let number = Math.round(Math.random() * 3);
        if(number < 15) {
            resolve(number);
        } else {
            reject(`Il valore casuale non è quello aspettato`);
        }
    }
)};

valoreCasuale()
.then((somma) => {
    console.log(`Il nuovo valore, che rispetta la promessa, è: ${somma}`);
    return somma + 1;
})

.then((prodotto) => {
    console.log(`Il nuovo valore dato dalla moltiplicazione rispetta la promessa: ${prodotto}`);
    return prodotto * 2;
})

.then((sottrazione) => {
    console.log(`Il nuovo valore dato dalla sottrazione è: ${sottrazione}`);
    return sottrazione - 1;
})

.catch((errore) => {
    console.error(`Errore presente in un punto della catena: ${errore}`)
})
