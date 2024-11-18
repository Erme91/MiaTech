function controllaEta(age) {
    
    if (age < 18) {
        console.log("Sei minorenne");
    }else if (age >= 18 && age <= 65) {
        console.log("Sei un adulto");
    } else {
        console.log("Sei in età da pensione");
    }
}

controllaEta(32)