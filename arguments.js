 // >> parameters "(a, b, c)" 
function sum(a, b, c){
    // >> (arguments) only available inside function 
    // console.log(arguments[5]);
    const args = [...arguments]
    console.log(args);
    const result = a + b + c
    return result
}

 // >> arguments "(35, 59, 68)" 
const total = sum(35, 59, 68, 98, 35, 26, 85)
console.log(total);
console.log(sum.length);