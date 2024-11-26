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

    descrizione() {
        return this.marca + "" + this.modello + "" + this.anno + "" + this.chilometraggio + "km";
    };

    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza della classe ${classe.name}.`;
        } else {
            return `L'oggetto invece NON è un'istanza della classe ${classe.name}.`;
        };
    };
};

class Camion extends Automobile {

    constructor(marca, modello, anno, chilometraggio = 0, caricoMassimo = 0) {
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0
    };

    descrizione() {
        return (
            super.descrizione() + ` Carico massimo: ${this.caricoMassimo} kg, Carico attuale: ${this.caricoAttuale} kg`
        );
    };
};

let auto1 = new Automobile('Fiat', 'Panda', 2023, 15000);
let automezzo = new Camion('Iveco', 'Stralis', 2018, 60000, 3000);

console.log(auto1 instanceof Automobile);
console.log(automezzo instanceof Automobile);
console.log(automezzo instanceof Camion);
console.log(auto1 instanceof Camion);

console.log(Automobile.verificaIstanza(auto1, Automobile));
console.log(Automobile.verificaIstanza(automezzo, Camion));
console.log(Automobile.verificaIstanza(auto1, Camion));
console.log(Automobile.verificaIstanza(automezzo, Automobile))