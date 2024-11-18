function calcolatrice(num1 = 0, operation = "+", num2 = 0) {

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return "Operazione non valida"
    }
    
    return result
}

console.log(calcolatrice(5, "*", 5))




