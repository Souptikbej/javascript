//Declare a let variable city = "Kolkata" and reassign it to "Delhi".

let city='kolkata'
console.log(city)
city='Delhi'
console.log(city)

//Try to redeclare the same variable with let → observe error.

let cityy='kolkata'
console.log(cityy)
function redeclare() {
    let cityy='Delhi'
    console.log(cityy) 
}
redeclare()

//Create a const object student = {name: "Amit", age: 21} and then update the age property.

const student={name: "Souptik", age: 21}
console.log(student)
student.age=23
console.log(student)

//Check the type of each value using typeof.

console.log(typeof "Hello"); // string
console.log(typeof 42);      // number
console.log(typeof true);    // boolean
console.log(typeof null);    // object (special case bug in JS)
console.log(typeof undefined); // undefined
console.log(typeof {});      // object
console.log(typeof []);      // object (arrays are objects)
console.log(typeof function(){}); // function
