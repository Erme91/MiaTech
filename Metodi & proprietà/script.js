class Automobile {
    marca = "Lancia Y"
    modello = "GPL Eco-Chic"
    anno = "2015"
    chilometraggio = 65000

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
        this.chilometraggio = chilometraggio
    }
}

Automobile.aggiungiChilometri = function () {
    let km = 65000;
    return {
        increment: function () {
            km++
            return km
        }
    }

}

const count = Automobile.aggiungiChilometri()

Automobile.mostraChilometraggio = function () {
    console.log(count.increment() + 100)
}

Automobile.mostraChilometraggio()
