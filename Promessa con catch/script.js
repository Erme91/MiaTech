function operazione(ritorno) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ritorno) {
                resolve(`La promessa è stata mantenuta e risolta con successo`);
            } else {
                reject(`Errore! La promessa non è andata a buon fine`);
            }
        }, 2000);
    });
};

operazione(false).then((message) => {
    console.log(message);
})

.catch((error) => {
    console.error(error);
});