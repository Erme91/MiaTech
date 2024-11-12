function outerFunction (initialValue) {
    let result = initialValue

    function innerFunction (y) {
        result += y;
        return result
    }

    return innerFunction
}

let newResult = outerFunction(15)

console.log(newResult(10))
console.log(newResult(15))