// ! true false

/*
 # true:  any number (+5, -5)- will result in true except for "0"
 # true:  any "string" will result in true
 # true:  empty {}- will result in true
 # true:  empty []- will result in true

  >> check truth
    const truthy = {}
    if(!!truthy){
        console.log("value is truthy");
    }
    -output: value is truthy

 # false: ""- empty string" will result in false
 # false: "undefined" will result in false
 # false: "null" will result in false

 >> check falsy
    const falsy = ''
    if(!falsy){
        console.log("value is falsy");
    }
    -output = value is falsy
 */

const ex = false;
if (ex) {
  console.log("value of 'ex' is truth");
} 
else {
  console.log("value of 'ex' is false");
}