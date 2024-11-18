function creaContatore(){
    let count = 0;

    return function(){
        count += 1
        return count
    }
}

const increment = creaContatore()

console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
