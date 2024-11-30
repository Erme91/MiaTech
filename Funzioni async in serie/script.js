async function primaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`La prima funzione è andata a buon fine.`);
        }, 2000);
    });
};

async function secondaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Anche la seconda funzione è stata risolta.`);
        }, 1000);
    });
};

async function chiamataFunzioni() {
    console.log(`Le funzioni saranno presto chiamate...`);

    let prima = await primaFunzione();
    console.log(prima);

    let seconda = await secondaFunzione();
    console.log(seconda);

    console.log(`Tutte le funzioni sono state chiamate ed eseguite`);
};

chiamataFunzioni();