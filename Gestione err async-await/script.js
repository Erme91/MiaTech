async function richiesta() {
    const url = "https://jsonplaceholder.typicode.com/psts";

    try {
        const risposta = await fetch(url);

        if (!risposta.ok) {
            throw new Error(`Attenzione! C'è un errore nella richiesta: ${risposta.status} ${risposta.statusText}`);
        }

        const dati = await risposta.json();

        console.log(`I dati ricevuti dall'API sono:`, dati);

    } catch (error) {
        console.error(`Si è verificato un errore:`, error.message);
    }
}

richiesta();