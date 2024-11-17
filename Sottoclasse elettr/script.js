class Automobile {
    marca = ""
    modello = ""
    anno = ""

    constructor(marca, modello, anno) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
    }
}

let lancia = new Automobile("Lancia Y", "GPL Eco-Chic", "2015"); 

class Elettrica extends Automobile {
    autonomia = ""

    constructor(marca, modello, anno, autonomia){
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }
}

Elettrica.ricarica = function(){
    let km = 100;
    return {
        increment: function(){
            km++;
            return km
        }
    }
}

let vettura = new Elettrica("Lancia Y", "GPL Eco-Chic", "2015", 100);

console.log(vettura)

const ric = Elettrica.ricarica()
console.log(ric.increment() + 200)