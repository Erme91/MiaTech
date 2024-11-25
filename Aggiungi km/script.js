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

    aggiungiChilometri(km) {
        if(km <= 0){
            return 'Il numero del contatore è aumentato';
        }
        this.#incrementaContatore();
        this.chilometraggio += km;
        return `Il contatore è aumentato di ${km} km. Adesso il chilometraggio totale è di: ${this.chilometraggio} km.`;
    }
};

let auto1 = new Automobile('Hyundai', 'Kona', '2021', 25000);

console.log(auto1.descrizione());
console.log(auto1.aggiungiChilometri(25000));
console.log(auto1.aggiungiChilometri(30000));
