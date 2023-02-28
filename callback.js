function greetings(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("Good Morning ", name, "sama");
}

function greetEvening(name){
    console.log("Good Evening ", name, "sama");
}

greetings(greetingHandler, "Saadi");
greetings(greetingHandler, "Sadiya");
greetings(greetEvening, "Saadi")
greetings(greetEvening, "Sadiya")

function submitHandler(){
    console.log("submit button clicked");
}

document.getElementById("btn-submit").addEventListener("click", submitHandler)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const names = [
//   "mk_saadi",
//   "emilia summers",
//   "katie swift",
//   "aisha bint' rayhan",
// ];
// // console.log(names[0]);

// const ages = {
//   saadi: 21,
//   bint_rayhan: 19,
//   katie: 23,
//   emilia: 24,
// };
