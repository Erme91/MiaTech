let studente = "Luca";

try {
    if (studente != "Giovanni") {
        throw new Error("Attenzione! Il nome inserito non è quello dello studente")
    }
    console.log(studente);
} catch (error) {
    console.error(error.message)
}
