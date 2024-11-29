function attesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Ecco i voli disponibili e i relativi prezzi per la tratta Palermo-Istanbul`)
        }, 2000);
    });
};

async function attesaTerminata() {
    console.log(`Attendere l'elaborazione della tratta aerea...`);
    let messaggio = await attesa();
    console.log(messaggio);
};
  
attesaTerminata();