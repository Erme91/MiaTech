function prima() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`La promessa è risolta in 2 secondi`);
        }, 2000);
    });
};

function seconda() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`La promessa è risolta in 3 secondi`)
        }, 3000);
    });
};

Promise.all([prima(), seconda()])
  .then((risultati) => {
    console.log(`Entrambe le promesse sono state risolte, indipendentemente dal tempo di attesa`);
    console.log(risultati);
  })
