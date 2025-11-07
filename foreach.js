const arr = [10, 90, 50, 30, 50]
// Syntax

// arr.forEach(function (num, index) {
//     console.log(`Index ${index} -> ${num}`)
// })
// arr.forEach((num, index) => {
//     console.log(`Index ${index} -> ${num}`)

// })


// 👉 Print each fruit using forEach
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fnam) => {
    console.log(`Fruits name : ${fnam}`)
})

// 👉 Print: "Color 0: red", "Color 1: green", etc.
const colors = ["red", "green", "blue"];
colors.forEach((cnam, index) => {
    console.log(`Color ${index}: ${cnam}`)
})

// 👉 Find and print the sum using forEach
const numbers = [5, 10, 15];
let sum = 0
numbers.forEach((num) => {
    sum += num
})
console.log(`Total sum : ${sum}`)

// 👉 Create a new array of names in uppercase using forEach
const names = ["souptik", "arjun", "rahul"];
let newname = []
names.forEach((nam) => {
    newname.push(nam.toUpperCase())
})
console.log(`New array is : ${newname}`)

// 👉 Count how many times "Kolkata" appears using forEach
const cities = ["Kolkata", "Delhi", "Kolkata", "Mumbai"];
let count = 0
cities.forEach((nam) => {
    if (nam == "Kolkata") {
        count++
    }
})
console.log(`Kolkata appears : ${count} times`)

// 👉 Create a new array with doubled values using forEach
const nums = [2, 4, 6, 8];
let newnums = []
nums.forEach((num) => {
    newnums.push(num * num)
})
console.log(`Double new array is :${newnums}`)


// 👉 Print initials: ["SB", "AS", "RD"]
const people = ["Souptik Bej", "Amit Sharma", "Rahul Das"];
let newparr = []
people.forEach((pnam) => {
    let newstr = ""
    let newpeople = [...pnam]
    newpeople.forEach((ppnam, index) => {
        if (index === 0 || newpeople[index - 1] === " ") {
            console.log(ppnam)
            newstr = newstr + ppnam.toUpperCase()
        }
    })
    newparr.push(newstr)
})
console.log(newparr);
const initials = [];

people.forEach(function (person) {
    const parts = person.split(" "); // Split by space → ["Souptik", "Bej"]
    const firstLetters = parts.map(p => p[0].toUpperCase()).join(""); // Take first letter of each
    initials.push(firstLetters);
});

console.log(initials);

// 👉 Create a new array with ages >= 18 using forEach only
const ages = [12, 18, 25, 10, 30];
const newages = []
ages.forEach((num) => {
    if (num >= 18) newages.push(num)
})
console.log(`New ages Array is : ${newages}`)

// 👉 Print the sum of even numbers using forEach
const numberss = [3, 6, 8, 11, 14];
let sumeven = 0
numberss.forEach((num) => {
    if (num % 2 == 0) {
        sumeven += num
    }
})
console.log(`Sum of even number is : ${sumeven}`)

// 👉 Combine all words into a single sentence string using forEach
const words = ["JavaScript", "is", "fun"];
let newsent = ""
let sentence = "";
words.forEach((sent, index) => {
    newsent += " " + sent
    // Add a space between words except the first one
    sentence += (index === 0 ? "" : " ") + sent;
})
console.log(newsent.trim())
console.log(sentence)
