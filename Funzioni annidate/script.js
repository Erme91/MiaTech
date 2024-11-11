function outerFunction (x) {
    const result = x

    function innerFunction (y) {
        return result + y
    }

    return innerFunction
}

let newResult = outerFunction (15)
let otherResult = outerFunction (10)

console.log (newResult (10))
console.log (otherResult (0))

