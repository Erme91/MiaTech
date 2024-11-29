function primoRisultato() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`La velocità del lupo è di circa 45 o 50 km/h`);
        }, 3000);
    });
};

function secondoRisultato() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Il ghepardo può raggiungere i 120 km/h`)
        }, 2000);
    });
};

Promise.race([primoRisultato(), secondoRisultato()])
  .then((risultato) => {
    console.log(`La prima promessa risolta è: ${risultato}`);
})