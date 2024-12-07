const form = document.getElementById("submit");

form.addEventListener("submit", (event) => {
    const nome = document.getElementById("name").value;
    const cognome = document.getElementById("surname").value;

    if (!nome || !cognome) {
        alert("Attenzione! Entrambi i campi devono essere compilati!");
        event.preventDefault();
    } else {
        alert("I dati sono stati inviati con successo!");
    }
});
