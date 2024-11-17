class Automobile {
    marca = ""
    modello = ""
    anno = ""
}

class Elettrica extends Automobile {
    autonomia = ""

    constructor(marca, modello, anno, autonomia){
        this.marca = marca
        this.modello = modello
        this.anno = anno
        this.autonomia = autonomia
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

const ric = Elettrica.ricarica()
console.log(ric.increment() + 200)