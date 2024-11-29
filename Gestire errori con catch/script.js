function refuse() {
    return new Promise((resolve, reject) => {
        reject(`Attenzione! Errore sconosciuto!`);
    }
)};

refuse()
.then((dato) => {
    console.log(`La promessa è stata risolta con il seguente ${dato}`);
})
.catch((error) => {
    console.error(`La promessa non può essere mantenuta: ${error}`);
})