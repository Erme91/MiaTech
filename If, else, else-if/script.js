let score = prompt ("Inserisci un valore numerico")
console.log (parseInt(score))

if (score <= 100 && score >= 90) {
    console.log ("Voto ottimo");

}else if (score >= 70 && score <= 89) {
    console.log ("Voto buono");

}else if (score >=60 && score <=69) {
    console.log ("Voto sufficiente");

}else (score <= 59); {
    console.log ("Voto insufficiente");
}