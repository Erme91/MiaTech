function reverseString(str){

    let reversed = "";

    for(const c of str){
        reversed = c + reversed;
    }
    return reversed
}

const str = "Buonasera a tutti"
const reversed = reverseString(str)

console.log(reversed)