//1....Object form

const user = {
  name: "Souptik",
  age: 22,
  isLoggedIn: true
};

console.log(user.name);     // Souptik
console.log(user["age"]);  // 22

//Adding & Updating properties

user.email = "souptik@example.com";  // add
user.age = 23;                       // update
delete user.isLoggedIn;              // delete
console.log(user);

//Object inside Object
const student = {
  name: "Souptik",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.math); // 90
console.log(student.marks); 
console.log(student);

//2....Arrays

const numbers = [10, 20, 30, 40];
console.log(numbers[0]); // 10
console.log(numbers.length); // 4

//Common Array Methods
//1.push / pop → add/remove from end
//2.shift / unshift → add/remove from start
//3.map → create new array by applying a function
//4.filter → keep only elements that match condition
//5.reduce → reduce array to a single value
//6.forEach → run a function for each element

const arr = [1, 2, 3, 4, 5];

arr.push(4); 
console.log('Push',arr);

let last = arr.pop();
console.log('Pop',arr);
console.log(last);

console.log("Before unshift",arr);
arr.unshift(10);
console.log("After unshift",arr);

console.log("Before shift",arr);
let first = arr.shift();
console.log(first);
console.log("After shift",arr);

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(f => console.log(f.toUpperCase()));

// map → multiply each number by 2
const doubled = arr.map(num => num * 2);
console.log(doubled); // [2,4,6,8,10]

// filter → keep even numbers
const evens = arr.filter(num => num % 2 === 0);
console.log(evens); // [2,4]

// reduce → sum of numbers
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15


//3....Combining Objects & Arrays

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Puja" }
];

users.forEach(user => console.log(user.name));


//Create an object book with title, author, and year. Print the title.

const book ={
    titel:"My love Story",
    author:"Souptik",
    year:2003
}
console.log(book.titel);

//Given [5, 10, 15, 20], use map to create [10, 20, 30, 40].

const arr1=[5, 10, 15, 20]
console.log("Before map - ",arr1)
const map_arr1=arr1.map(a=>a*2);
console.log("After map - ",map_arr1)

//From [1,2,3,4,5,6], use filter to keep only odd numbers.



//Create an array of 3 students (objects with name and age) and print only their names.
const students= [
    {name: "Souptik" , age:23},
    {name:"Sutapa", age:23}
]
students.forEach(stu=>console.log(stu.name));