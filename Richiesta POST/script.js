async function invioDati() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const dati = {
        title: "Versi 133-136 del Canto IV, Divina Commedia",
        body: "Tutti lo miran, tutti onor gli fanno: Quivi vid'io Socrate e Platone, Che 'nnanzi alli altri più presso li stanno; Democrito, che 'l mondo a caso pone, Diogenès, Anassagora e Tale, Empedoclès, Eraclito e Zenone.",
        userId: 3,
    };

    try {
        const risposta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dati),
        });

        if (!risposta.ok) {
            throw new Error(`Attenzione! C'è un errore nella richiesta: ${risposta.status}`);
        }

        const restituzioneDati = await risposta.json();

        console.log(`Ecco i dati restiuiti dall'API:`, restituzioneDati);
    } catch (errore) {
        console.error(`Attenzione! Si è verificato un errore:`, errore.message);
    }
};

invioDati()