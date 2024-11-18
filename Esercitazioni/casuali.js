function generaFincheDieci() {
    let number = 0;

    while(number !== 10){
        console.log(number)
        number = Math.round(Math.random() * 10);
    }
    console.log(number)
}

generaFincheDieci()
