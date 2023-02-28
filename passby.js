// ! search google

 // >> primitive types are pass by value
 
let num1 = 65
let num2 = 96

function multiply(a, b){
    // >> a's value reassigned
    a = 2
    const  result = a * b;
    return result
}

const result = multiply(num1, num2)
console.log(result);

 // >> object and array are pass by reference

let partners1 = {name: "Russell", name1: "Tania"}
let partners2 = {name: "Saadi", name1: "Unknown"}

function makeMovie(couple1, couple2) {
    partners1.name = "Murad"
    partners2.name1 = "Emilia, Katie, Aisha"
}

console.log(partners1, partners2);
makeMovie(partners1, partners2)
console.log(partners1, partners2);