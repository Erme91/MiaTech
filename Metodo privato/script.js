class Automobile {

    marca = "";
    modello = "";
    anno = 0;
    chilometraggio = 0;
    
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
        this.chilometraggio = chilometraggio

    };

    descrizione(){
        return this.marca + "" + this.modello + "" + this.anno + "" + this.chilometraggio + "km";
    };

    #calcolaEtà(){
        this.età = 2024 - 2015;
        return this.età;
    }

    mostraEtà(){
        return this.#calcolaEtà();
    }
};

let auto1 = new Automobile("Lancia", "GPL", 2015, 30000);

console.log(auto1.descrizione());
console.log(auto1.mostraEtà())
