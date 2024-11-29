function primaFunzione() {
    return new Promise((resolve) => {
        resolve(`L'impasto del pane deve lievitare almeno 3 ore`);
    });
};

function secondaFunzione() {
    return new Promise((resolve) => {
        resolve(`Un ottimo impasto per la pizza deve lievitare tra le 6 e 8 ore`)
    });
};

function terzaFunzione() {
    return new Promise((_, reject) => {
        reject(`L'impasto per la torta non ha bisogno di tempi di lievitazione`)
    });
};

Promise.allSettled([primaFunzione(), secondaFunzione(), terzaFunzione()])
    .then((risultati) => {
        console.log(`Tutte le promesse sono compiute ${risultati}`);
        risultati.forEach((risultato, collettivo) => {
            console.log(`Promessa ${collettivo + 1}:`, risultato);
        });
    });