// 🧩 Basic Level

// 1️⃣ Even Numbers Filter
const numbers = [1, 2, 3, 4, 5, 6];
const evennum = numbers.filter((num) => num % 2 == 0)
console.log(evennum)

// 2️⃣ Words Longer Than 4 Letters
const words = ["hi", "hello", "welcome", "bye"];
const longword = words.filter((wrd) => wrd.length > 4)
console.log(longword)
// 👉 Output: ["hello", "welcome"]

// 3️⃣ Filter Positive Numbers
const nums = [-2, 5, -7, 10, 0, 8];
const posnum = nums.filter((num) => num > 0)
console.log(posnum)
// 👉 Output: [5, 10, 8]

// 4️⃣ Filter Students Above 18
const ages = [12, 17, 18, 21, 25];
const newages = ages.filter((num) => num >= 18)
console.log(newages)
// 👉 Output: [18, 21, 25]

// 5️⃣ Filter Strings Containing a Letter ‘a’
const fruits = ["apple", "mango", "grape", "kiwi", "orange"];
const newfruits = fruits.filter((nam) => nam.includes('a'))
console.log(newfruits)
// 👉 Output: ["apple", "mango", "grape", "orange"]



// ⚙️ Intermediate Level

// 6️⃣ Filter Objects with Age > 20
const people = [
    { name: "Rahul", age: 18 },
    { name: "Sneha", age: 22 },
    { name: "Amit", age: 25 },
];
const newpeo = people.filter((nam) => nam.age > 20)
console.log(newpeo)
// 👉 Output: [{ name: "Sneha", age: 22 }, { name: "Amit", age: 25 }]

// 7️⃣ Filter Out Falsy Values
const data = [0, "Hello", "", false, 42, null, "JS"];
const newdata = data.filter(Boolean)
console.log(newdata)
// 👉 Output: ["Hello", 42, "JS"]

// 8️⃣ Filter Products That Are In Stock
const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false },
    { name: "Keyboard", inStock: true },
];
const newpronam = products.filter((nam) => nam.inStock == true).map((nam) => nam.name)
console.log(newpronam)
// 👉 Output: [{ name: "Laptop" }, { name: "Keyboard" }]

// 🔟 Filter Words Starting With Capital Letter
const Capwords = ["Apple", "banana", "Cherry", "dog", "Elephant"];
const newcapwords = Capwords.filter((nam) => nam[0] === nam[0].toUpperCase())
console.log(newcapwords)
// 👉 Output: ["Apple", "Cherry", "Elephant"]
