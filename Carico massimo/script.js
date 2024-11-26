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
    }

    carica(kg) {
        if (this.caricoAttuale + kg > this.caricoMassimo) {
            return `Attenzione! Troppo carico: ${this.caricoMassimo} kg. Carico attuale: ${this.caricoAttuale} kg.`;
        }
        this.caricoAttuale += kg;
        return `Carico aggiunto: ${kg} kg. Carico attuale: ${this.caricoAttuale} kg.`;
    }
};

let automezzo = new Camion('Iveco', 'Stralis', 2018, 60000, 3000);

console.log(automezzo.descrizione());
console.log(automezzo.carica(2000))