function giornoSettimana(day) {

    switch (day) {
        case 1:
            console.log("Lunedì");
            break;
        case 2:
            console.log("Martedì");
            break;
        case 3:
            console.log("Mercoledì");
            break;
        case 4:
            console.log("Giovedì");
            break;
        case 5:
            console.log("Venerdì");
            break;
        case 6:
            console.log("Sabato");
            break;
        default:
            console.log("Domenica");
            break;
    }
}

giornoSettimana(7)
