function divisione(num1, num2) {
    try {
      if (num2 === 0) {
        throw new Error("La divisione non è eseguibile.");
      }
      let result = num1 / num2;
      console.log("Result: " + result);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  }

  divisione(10, 0)
    


    
