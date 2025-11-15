// 1️⃣ Even Numbers → Square Them
const numbers = [1, 2, 3, 4, 5, 6];
// Step 1: Filter even numbers
// Step 2: Map to their squares
const newnumbers = numbers
    .filter((num) => num % 2 == 0)
    .map((num) => num * num)
console.log(newnumbers)
// 👉 Output: [4, 16, 36]


// 2️⃣ Filter Adults → Get Their Names
const people = [
    { name: "Amit", age: 17 },
    { name: "Rahul", age: 22 },
    { name: "Sneha", age: 19 },
    { name: "Tina", age: 15 },
];
const newpeople = people
    .filter((nam) => nam.age > 18)
    .map((nam) => nam.name)
console.log(newpeople)
// 👉 Output: ["Rahul", "Sneha"]


// 3️⃣ Filter Products In Stock → Return Their Names in Uppercase
const products = [
    { name: "laptop", inStock: true },
    { name: "mouse", inStock: false },
    { name: "keyboard", inStock: true },
];
const newproducts = products
    .filter((nam) => nam.inStock)
    .map((nam) => nam.name.toUpperCase())
console.log(newproducts)
// 👉 Output: ["LAPTOP", "KEYBOARD"]

// 4️⃣ Filter Long Words (>4 chars) → Convert to Lengths
const words = ["hi", "welcome", "bye", "JavaScript", "yes"];
const newwords = words.filter((e) => e.length > 4).map((e) => e.length)
console.log(newwords)
// 👉 Output: [7, 10]

// 5️⃣ Filter Scores ≥ 50 → Convert to “Pass” Message
const scores = [35, 70, 90, 45, 60];
const newscores = scores.filter((e) => e >= 50).map((e) => `Pass :${e}`)
console.log(newscores)
// 👉 Output: ["Pass: 70", "Pass: 90", "Pass: 60"]

// 6️⃣ Filter Employees in IT → Extract Their Emails
const employees = [
    { name: "Arjun", dept: "IT", email: "arjun@abc.com" },
    { name: "Priya", dept: "HR", email: "priya@abc.com" },
    { name: "Ravi", dept: "IT", email: "ravi@abc.com" },
];
const newemp = employees.filter((e) => e.dept === "IT").map((e) => e.email)
console.log(newemp)
// 👉 Output: ["arjun@abc.com", "ravi@abc.com"]

// 7️⃣ Filter Prices > 1000 → Apply 10% Discount
const prices = [500, 1200, 800, 2000];
const newprices = prices.filter((e) => e > 1000).map((e) => e - e * 0.1)
console.log(newprices)
// 👉 Output: [1080, 1800]   (only for prices > 1000)

// 8️⃣ Filter Movies Rated Above 8 → Return “🎬 title (rating)”
const movies = [
    { title: "Inception", rating: 9 },
    { title: "Avatar", rating: 7 },
    { title: "Interstellar", rating: 8.5 },
];
const newmovies = movies.filter((e) => e.rating > 8).map((e) => `🎬 ${e.title} (${e.rating})`)
console.log(newmovies)
// 👉 Output: ["🎬 Inception (9)", "🎬 Interstellar (8.5)"]

// 9️⃣ Filter Names Starting With “A” → Convert to Lowercase
const names = ["Amit", "Arjun", "Neha", "Riya", "Ankit"];
const newnames = names.filter((e) => e.startsWith("A")).map((e) => e.toLowerCase())
console.log(newnames)
// 👉 Output: ["amit", "arjun", "ankit"]

// 🔟 Filter Products With Price < 100 → Return String “{name} is affordable”
const items = [
    { name: "Pen", price: 20 },
    { name: "Book", price: 150 },
    { name: "Pencil", price: 10 },
    { name: "Bag", price: 500 },
];
const newitems = items.filter((e) => e.price < 100).map((e) => `${e.name} is affordable`)
console.log(newitems)
// 👉 Output: ["Pen is affordable", "Pencil is affordable"]