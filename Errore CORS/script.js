async function richiestaCORS() {
    const url = "http://client.cors-api.appspot.com/client";

    try {
        const risposta = await fetch(url);
        const dati = await risposta.json();
        console.log(`I dati sono stati ricevuti:`, dati);
    } catch (errore) {
        console.error(`Attenzione! Si è verificato un errore durante la richiesta:`, errore);
    }
};

richiestaCORS();