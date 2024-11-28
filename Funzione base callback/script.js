function primaFunzione(a, b, callback) {
    callback(a + b);
};

primaFunzione(5, 15, function(result) {
    console.log(`La somma dei due numeri fa:`, result)
})

