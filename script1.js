//1. Function Declaration (Normal Function)
//Classic way of defining a function.

function exp1(name) {
  return `Hello, ${name}!`;
}
console.log(exp1("Souptik")); // Hello, Souptik!

//2. Function Expression
//A function stored inside a variable.

const exp2 = function(name) {
  return `Hello, ${name}!`;
};
console.log(exp2("Amit")); // Hello, Amit!

//3. Arrow Function (ES6+)
//Shorter syntax, commonly used in React.

const exp3 = (name) => {
  return `Hello, ${name}!`;
};
console.log(exp3("Puja")); // Hello, Puja!

//4. Default Parameters
//You can assign default values if arguments are not passed.

function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));    // 10
console.log(multiply(5, 3)); // 15

//5. Return vs No Return
//----Functions return a value with return.
//----If no return, function gives undefined.

function add(a, b) {
  return a + b;
}
function logMessage(msg) {
  console.log(msg); // no return
}
console.log(add(2, 3)); // 5
console.log(logMessage("Hi")); // prints "Hi" but returns undefined

//6. Function Scope
//Variables inside functions are local.

function test() {
  let x = 10; // local variable
  console.log(x);
}
test(); // 10
// console.log(x); ❌ Error, x not defined


//Write a function square(n) that returns the square of a number.
function square(n){
    let ans=n*n;
    return ans;
}
console.log(square(5))

//Write an arrow function isEven(n) that returns true if number is even.

const isEven = (n)=>{
    if(n%2==0)
        return true
    else
        return false 
}
console.log(isEven(10))