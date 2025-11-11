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


// 1️⃣1️⃣ Filter Unique Elements
const arr = [1, 2, 2, 3, 4, 4, 5];
const newarr = arr.filter((num) =>
    // console.log(num, arr.indexOf(num), arr.lastIndexOf(num))
    arr.indexOf(num) === arr.lastIndexOf(num)
);
console.log(newarr);
// 👉 Output: [1, 3, 5]  (elements that appear only once)

// 1️⃣2️⃣ Filter Employees with Salary > 50000 and Department = 'IT'
const employees = [
    { name: "Amit", dept: "IT", salary: 60000 },
    { name: "Priya", dept: "HR", salary: 55000 },
    { name: "Raj", dept: "IT", salary: 45000 },
];
const newemp = employees.filter((nam) => nam.salary > 50000 && nam.dept == 'IT')
console.log(newemp)
// 👉 Output: [{ name: "Amit", dept: "IT", salary: 60000 }]


// 1️⃣3️⃣ Filter Palindromes
const wwords = ["level", "hello", "madam", "world", "racecar"];
const newwword = wwords.filter((nam) => nam === nam.split("").reverse().join(""))
console.log(newwword)
// 👉 Output: ["level", "madam", "racecar"]


// 1️⃣4️⃣ Filter by Date Range
const events = [
    { title: "Hackathon", date: "2025-01-15" },
    { title: "Seminar", date: "2025-03-10" },
    { title: "Workshop", date: "2025-05-20" },
];
// Filter events after March 1, 2025
const cutoffDate = new Date("2025-03-01");
const filteredEvents = events.filter((event) => new Date(event.date) > cutoffDate);
console.log(filteredEvents);
// 👉 Output: [{ title: "Workshop", date: "2025-05-20" }]



// 1️⃣5️⃣ Filter Users with Verified Email and Age ≥ 21
const users = [
    { name: "Arjun", emailVerified: true, age: 19 },
    { name: "Neha", emailVerified: true, age: 23 },
    { name: "Kiran", emailVerified: false, age: 22 },
];
const newusers = users.filter((nam) => nam.age >= 21 && nam.emailVerified)
console.log(newusers)
// 👉 Output: [{ name: "Neha", emailVerified: true, age: 23 }]

