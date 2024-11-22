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

    aggiungiChilometri(km) {
       return this.chilometraggio = this.chilometraggio + km
    };

    mostraChilometraggio() {
        return this.chilometraggio + "km"
    };
};

class Elettrica extends Automobile {
    autonomia = 0;

    constructor(marca, modello, anno, chilometraggio, autonomia){
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizioneElettrica(){
        return super.descrizione + this.autonomia + "km";
    }

    ricarica(km) {
        this.autonomia += km;
        return this.autonomia
    };
};

let auto1 = new Automobile("Lancia", "GPL", 2015, 30000);

console.log(auto1.descrizione());
      
auto1.aggiungiChilometri(100);

console.log(auto1.descrizione());

console.log(auto1.mostraChilometraggio());

let vettura = new Elettrica("Lancia", "GPL", 2015, 30000, 1000);

console.log(vettura);

console.log('La vettura è stata ricaricata. Adesso ha autonomia di:' + vettura.ricarica(300) + 'km')