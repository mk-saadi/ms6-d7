print5();

for(let i = 0; i <= 10; i++){
    console.log(i);
}

function print5(){
    console.log("inside print", 5);
}

const print10 = function(){
    console.log(print10);
}
print10()