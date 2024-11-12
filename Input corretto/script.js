let text = prompt("Inserisci una parola")

do {
    text = prompt("Inserisci un'altra parola")
} while (text.length < 5)

console.log(text)

