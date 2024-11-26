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
};

class Camion extends Automobile {

    constructor(marca, modello, anno, chilometraggio = 0) {
        super(marca, modello, anno, chilometraggio) 
    };
};

let automezzo = new Camion('Iveco', 'Stralis', 2018, 60000);

console.log(automezzo)