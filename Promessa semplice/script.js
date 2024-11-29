function operazione() {
    return new Promise((result) => {
        setTimeout(() => {
            result(`Il tempo di attesa di 2 secondi è passato. Promessa risolta`)
        }, 2000);
    });
};

operazione().then((message) => {
    console.log(message)
})