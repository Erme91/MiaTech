let score = prompt("Inserisci un valore numerico")
score = parseInt(score)

switch (true) {
    case (score <= 100 && score >= 90):
        console.log("Voto ottimo");
        break;
    case (score >= 70 && score <= 89):
        console.log("Voto buono");
        break;
    case (score >= 60 && score <= 69):
        console.log("Voto sufficiente");
        break;
    default:
        console.log("Voto insufficiente");
        break;
}

if (score <= 100 && score >= 90) {
    console.log("Voto ottimo");
} else if (score >= 70 && score <= 89) {
    console.log("Voto buono");
} else if (score >= 60 && score <= 69) {
    console.log("Voto sufficiente");
} else {
    console.log("Voto insufficiente");
}
