class Automobile {

    marca = "";
    modello = "";
    anno = 0;
    chilometraggio = 0;

    #contatoreChiamate = 0;

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
        this.chilometraggio = chilometraggio
    };

    descrizione() {
        this.#numeroChiamate();
        return this.marca + "" + this.modello + "" + this.anno + "" + this.chilometraggio + "km";
    };

    #incrementaContatore() {
        this.#contatoreChiamate += 1;
    };

    #numeroChiamate() {
        this.#contatoreChiamate += 1;
    };

    chiamate() {
        return this.#contatoreChiamate;
    };

    numeroChiamate() {
        return this.#incrementaContatore;
    };
};

let auto1 = new Automobile('Hyundai', 'Kona', '2021', 25000);

console.log(auto1.descrizione());
console.log(auto1.descrizione());
console.log(auto1.descrizione());
console.log(auto1.descrizione());

console.log(`Il metodo "descrizione" ha ricevuto ${auto1.chiamate()} chiamate.`);