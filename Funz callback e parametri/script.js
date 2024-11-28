function operazione(num1, num2, callback) {
    let result = num1 - num2;
    callback(result)
};

function risulta(numero) {
    console.log(`Il risultato della sottrazione è: ${numero}`)
};

operazione(100, 65, risulta)