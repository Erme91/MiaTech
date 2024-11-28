function somma(operazione, callback) {
    result = operazione + 10;
    callback(result);
};

function multiply(operazione, callback) {
    result = operazione * 5;
    callback(result);
};

function risultato(ultimaOperazione) {
    console.log(`Il risultato finale è: ${ultimaOperazione}`)
};

somma(5, function(ultima) {
    multiply(ultima, risultato);
}) 