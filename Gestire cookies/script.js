function setCookie(nome, valore) {
    const data = new Date();
    data.setTime(data.getTime() + 24 * 60 * 60 * 1000);
    let scadenza = `expires=${data.toUTCString()}`;
    document.cookie = `${nome}=${valore};${scadenza};path=/`;
    console.log(`Cookies salvati:`, document.cookie)
};

function recuperaCookie(nome) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [chiave, valore] = cookie.split("=");
        if (chiave === nome) {
            console.log(`Cookie recuperato: ${nome}=${valore}`);
            return nome;
        }
    }
    console.log(`Cookie ${nome} non trovato.`);
    return null;
};

function rimuoviCookie(nome) {
    document.cookie = `${nome}=;expires=Mon, 10 Sep 1962 00:00:00 UTC;path=/`;
    console.log(`Cookie rimosso: ${nome}`);
};

setCookie("Utente", "Ryan Smith");       
rimuoviCookie("utente");
recuperaCookie("Utente");