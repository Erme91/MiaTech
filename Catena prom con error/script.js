function casuale() {
    return new Promise((accept, reject) => {
        let random = Math.random();
        if(random < 3) {
            accept (random);
        } else {
            reject(`Il valore è troppo basso`);
        }
    }
)};

casuale ()
.then((numero) => {
    console.log(`Il valore rispetta la condizione, ed è ${numero}`);
    return numero + 5;
})

.then((risultatoManipolato) => {
    console.log(`Il valore manipolato adesso è: ${risultatoManipolato}`);
    return risultatoManipolato - 2;
})

.then((risultato) => {
    console.log(`Il risultato ora è: ${risultato}`);
})

.catch((error) => {
    console.error(`Attenzione! Il valore non è quello aspettato e la promessa non può essere verificata: ${error}`);
})