// ! equal "==" "===" 

 // >> in comparison you should mostly use "===" 
 // >> "==" will see if the values are same or not 
 // >> "===" will see if the values and types are same or not 

const first = 2
const second = '2'
 // >> using "===" will result in "values are different" 
 // >> using "==" will result in "values are equal" 
if(first == second){
    console.log("values are equal");
}
else{
    console.log("values are different");
}

// # interview question search about 

// >> type coercion 
// >> type conversion 
// >> type casting 