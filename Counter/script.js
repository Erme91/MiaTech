function createCounter() {
    let count = 10;
    return{
        increment: function(){
            count++
            return count
        },
        decrement: function(){
            count --
            return count
        }
    }
}

const obj = createCounter ()

console.log(obj.increment())
console.log(obj.increment())
console.log(obj.increment())

console.log(obj.decrement())
console.log(obj.decrement())
console.log(obj.decrement())