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

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
          return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore (${auto1.chilometraggio} km) rispetto a ${auto2.marca} ${auto2.modello} (${auto2.chilometraggio} km).`;
        } else {
          return `${auto1.marca} ${auto1.modello} e ${auto2.marca} ${auto2.modello} hanno uguale chilometraggio (${auto1.chilometraggio} km).`;
        }
    };
};

let auto1 = new Automobile('Lancia', 'GPL', 2015, 90000);
let auto2 = new Automobile('Citroën','C3', 2020, 50000);

console.log(Automobile.confrontaChilometraggio(auto1, auto2))