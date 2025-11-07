// const newArray = array.map((element, index, array) => {
//   return transformed element
// });

// 1️⃣ Square each number
// Input: [2, 4, 6, 8]
// Output: [4, 16, 36, 64]

const arr1 = [2, 4, 6, 8]
const newarr1 = arr1.map((num) => {
    return num * num;
})
console.log(newarr1)

// 2️⃣ Convert to uppercase
// Input: ["apple", "banana", "cherry"]
// Output: ["APPLE", "BANANA", "CHERRY"]

const arr2 = ["apple", "banana", "cherry"]
const newarr2 = arr2.map((num) => {
    return num.toUpperCase()
})
console.log(newarr2)

// 3️⃣ Get name lengths
// Input: ["Souptik", "Amit", "Rahul"]
// Output: [7, 4, 5]
const arr3 = ["Souptik", "Amit", "Rahul"]
const newarr3 = arr3.map((num) => {
    return num.length
})
console.log(newarr3)

// 4️⃣ Add 10 to each number
// Input: [5, 10, 15]
// Output: [15, 20, 25]
const arr4 = [5, 10, 15]
const newarr4 = arr4.map((num) => {
    return num + 10
})
console.log(newarr4)

// 5️⃣ Convert numbers to strings
// Input: [1, 2, 3, 4]
// Output: ["1", "2", "3", "4"]
const arr5 = [1, 2, 3, 4]
const newarr5 = arr5.map((num) => {
    return num.toString()
})
console.log(newarr5)

// 6️⃣ Extract property from objects
// Input: [{name: "Souptik"}, {name: "Amit"}, {name: "Rahul"}]
// Output: ["Souptik", "Amit", "Rahul"]

const obj1 = [{ name: "Souptik" }, { name: "Amit" }, { name: "Rahul" }]
const newobj1 = obj1.map((num) => {
    return num.name
})
console.log(newobj1)

// 7️⃣ Create full names
// Input: [{fname: "Souptik", lname: "Bej"}, {fname: "Amit", lname: "Sharma"}]
// Output: ["Souptik Bej", "Amit Sharma"]

const obj2 = [{ fname: "Souptik", lname: "Bej" }, { fname: "Amit", lname: "Sharma" }]
const newobj2 = obj2.map((num) => {
    let cat = num.fname + " " + num.lname
    return cat
})
console.log(newobj2)


// 8️⃣ Double the even numbers only
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 3, 8, 5]
const obj3 = [1, 2, 3, 4, 5]
const newobj3 = obj3.map((num) => {
    return (num % 2 === 0 ? num * num : num)
})
console.log(newobj3)

// 9️⃣ Return objects with added property
// Input: [{name: "Souptik"}, {name: "Amit"}]
// Output: [{name: "Souptik", active: true}, {name: "Amit", active: true}]
const obj4 = [{ name: "Souptik" }, { name: "Amit" }]
const newobj4 = obj4.map((num) => {
    return { ...num, active: true }
})
console.log(newobj4)

// 🔟 Format data for display
// Input: [{name: "Souptik", age: 22}, {name: "Amit", age: 21}]
// Output: ["Souptik is 22 years old", "Amit is 21 years old"]
const obj5 = [{ name: "Souptik", age: 22 }, { name: "Amit", age: 21 }]
const newobj5 = obj5.map((num) => {
    return `${num.name} is ${num.age} years old`
})
console.log(newobj5)