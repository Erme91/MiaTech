function promessaConValore(valoreOk) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valoreOk) {
                resolve(`La promessa ha avuto successo!`);
            } else {
                reject(`Attenzione! Colto un errore, impossibile procedere`);
            }
    }, 2500);
})
};

async function promessaSvolta(successo) {
    try {
        console.log(`Il sistema sta attendendo le risposte...`);
        let messaggio = await promessaConValore(successo);
        console.log(messaggio);
    } catch (errore) {
        console.error(`Errore! Non sono state colte risposte: ${errore}`);
    }
};

promessaSvolta(false);