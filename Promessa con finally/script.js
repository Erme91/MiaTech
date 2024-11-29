function dati(successo) {
    return new Promise((resolve, reject) => {
        if(successo) {
            resolve(`I dati sono stati ricevuti correttamente`);
        } else {
            reject(`Il caricamento dei dati non è andato a buon fine`);
        }
    });
};

dati(false)
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.error(error)
})

.finally(() =>{
    console.log(`Il caricamento è stato comunque completato`)
})
