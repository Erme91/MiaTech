function numbers() {
    return new Promise((result) => {
        setTimeout(() => {
            result(7)
        }, 1000);
    });
};

numbers()
.then((num1) => {
    console.log(`Il numero dal quale si inizia è: ${num1}`);
    if(num1 % 2 == 0) {
        console.log(`Il numero è pari ${num1}`);
        return num1 + 6;
    } else {
        console.log(`Il numero è dispari ${num1}`);
        return num1 + 9;
    }
})

.then((manipolazione) => {
    console.log(`Il risultato del numero manipolato è: ${manipolazione}`);
    return manipolazione * 2;
})

.then((risultato) => {
    console.log(`Il risultato finale è: ${risultato}`);
})


