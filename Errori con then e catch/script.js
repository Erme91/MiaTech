function verifica(successo) {
    return new Promise((resolve, reject) => {
        if (successo) {
            resolve(`La promessa è stata risolta`);
        } else {
            reject(`La promessa è stata rigettata`);
        }
    }
)};

verifica(false)
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
})
