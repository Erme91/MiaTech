async function richiesta() {
    const apiURL = "https://jsonplaceholder.typicode.com/posts";

    try {
        const risposta = await fetch(apiURL);

        if (!risposta.ok) {
            throw new Error(`Attenzione! Errore nella richiesta: ${risposta.status} ${risposta.statusText}`);
        }

        const dati = await risposta.json();

        console.log("Dati ricevuti:", dati);
    } catch (errore) {
        console.error("Errore durante la richiesta:", errore.message);
    }
};

richiesta()