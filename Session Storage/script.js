function salvaSession() {
    const mioFilm = "L'ultimo samurai";
    sessionStorage.setItem("Uno dei miei film preferiti è:", mioFilm);
    console.log("Il film è:", mioFilm)
};

salvaSession();

function recuperaSession() {
    const mioFilm = "L'ultimo samurai";
    sessionStorage.getItem("Il nome del film è recuperato:", mioFilm);
    console.log("Titolo film recuperato:", mioFilm)
};

recuperaSession();

function rimuoviSession() {
    const mioFilm = "L'ultimo samurai";
    sessionStorage.removeItem("Impossibile recuperare:", mioFilm);
    console.log("Errore nel recupero:", mioFilm)
};

rimuoviSession();
recuperaSession()