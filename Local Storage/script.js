function salvaLocal() {
    const miaCittà = "Alessandria d'Egitto";
    localStorage.setItem("Questa è la città che ho visitato:", miaCittà);
    console.log("La città è:", miaCittà)
};

salvaLocal();

function recuperaLocal() {
    const miaCittà = "Alessandria d'Egitto";
    localStorage.getItem("Il nome della città è recuperato:", miaCittà);
    console.log("Località recuperata:", miaCittà)
};

recuperaLocal();

function rimuoviLocal() {
    const miaCittà = "Alessandria d'Egitto";
    localStorage.removeItem("Impossibile recuperare:", miaCittà);
    console.log("Errore nel recupero:", miaCittà)
};

rimuoviLocal();
recuperaLocal()