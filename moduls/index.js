
const add = require('./add');
const sub = require('./sub');
const mul = require('./mul');
const div = require('./div');
console.log("Create four module in four different files and print add, sub, mul, div")
console.log(`Sum of Two Number is ${add(10, 50)}`);
console.log(`Substruction of Two Number is ${sub(10, 50)}`);
console.log(`Multipication of Two Number is ${mul(10, 50)}`);
console.log(`Division of Two Number is ${div(10, 50)}`);

console.log("Create four module in a single file and print add, sub, mul, div")
const { addd, subb, mull, divv } = require('./combinefile');
console.log(`Sum of Two Number is ${addd(10, 20)}`);
console.log(`Substruction of Two Number is ${subb(100, 50)}`);
console.log(`Multipication of Two Number is ${mull(10, 10)}`);
console.log(`Division of Two Number is ${divv(10, 50)}`);


