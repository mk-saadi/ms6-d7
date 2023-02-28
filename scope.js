function add(a, b){
    const total  = a + b
    // console.log(total);
    if(b > 5){
        const sum = 26 + a + b
        // console.log(sum);
    }
    return total
}
// console.log(a, b);
add(8, 6)

 // >> infinite loop
let i = 1;
for(let i = 0; i < 1; i+1){
    // console.log(i);
}
// >> to stop infinite loop type "ctrl + c"

for(var z = 0; z < 5; z++){
    console.log(z);
}
console.log("outside loop", z);