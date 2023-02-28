// # JS is a dynamically typed programming language 

// # primitive types 
// >> boolean 
// >> number 
// >> string 

// # non-primitive types 
// >> [array] 
// >> {object} 

let a = 4;
let b = a;
console.log(a, b);

// >> reassigned 
b = 8;
console.log(a, b);

let f = { job: "front-end web dev" };
let d = f;
console.log(f, d);

// >> reassigned 

// # primitive types 
// >> boolean 
// >> number 
// >> string 

// # non-primitive types 
// >> [array] 
// >> {object} 

let x = 4;
let y = x;
console.log(x, y);

// >> reassigned 
y = 8;
console.log(x, y);

let h = { job: "front-end web dev" };
let s = h;
console.log(h, s);

// >> reassigned 
s.job = "back-end web dev";
console.log(h, s);

// >> partial assign 
s.job = "full-stack web dev"
console.log(h, s);
s.job = "back-end web dev";
console.log(h, s);

// >> partial assign 
s.job = "full-stack web dev"
console.log(h, s);