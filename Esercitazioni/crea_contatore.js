function creaContatore(){
    let count = 20;

    return{
        increment: function(){
            count++
            return count
        }
    }
}

const obj = creaContatore()

console.log(obj.increment())
console.log(obj.increment())
console.log(obj.increment())
console.log(obj.increment())
console.log(obj.increment())
