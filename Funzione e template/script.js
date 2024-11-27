function persona(dati) {
    let {nome, lavoro} = dati;
    return `Il suo nome è ${nome} e lavora in ${lavoro}`;
};

const objPerson = {
    nome: "Lidia",
    lavoro: "Croazia"
};

const stringa = persona(objPerson);

console.log(stringa)

