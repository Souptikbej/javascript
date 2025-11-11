// 1️⃣ Even Numbers → Square Them
const numbers = [1, 2, 3, 4, 5, 6];
// Step 1: Filter even numbers
// Step 2: Map to their squares
// 👉 Output: [4, 16, 36]


// 2️⃣ Filter Adults → Get Their Names
const people = [
    { name: "Amit", age: 17 },
    { name: "Rahul", age: 22 },
    { name: "Sneha", age: 19 },
    { name: "Tina", age: 15 },
];
// 👉 Output: ["Rahul", "Sneha"]


// 3️⃣ Filter Products In Stock → Return Their Names in Uppercase
const products = [
    { name: "laptop", inStock: true },
    { name: "mouse", inStock: false },
    { name: "keyboard", inStock: true },
];
// 👉 Output: ["LAPTOP", "KEYBOARD"]

// 4️⃣ Filter Long Words (>4 chars) → Convert to Lengths
const words = ["hi", "welcome", "bye", "JavaScript", "yes"];
// 👉 Output: [7, 10]

// 5️⃣ Filter Scores ≥ 50 → Convert to “Pass” Message
const scores = [35, 70, 90, 45, 60];
// 👉 Output: ["Pass: 70", "Pass: 90", "Pass: 60"]

// 6️⃣ Filter Employees in IT → Extract Their Emails
const employees = [
    { name: "Arjun", dept: "IT", email: "arjun@abc.com" },
    { name: "Priya", dept: "HR", email: "priya@abc.com" },
    { name: "Ravi", dept: "IT", email: "ravi@abc.com" },
];
// 👉 Output: ["arjun@abc.com", "ravi@abc.com"]

// 7️⃣ Filter Prices > 1000 → Apply 10% Discount
const prices = [500, 1200, 800, 2000];
// 👉 Output: [1080, 1800]   (only for prices > 1000)

// 8️⃣ Filter Movies Rated Above 8 → Return “🎬 title (rating)”
const movies = [
    { title: "Inception", rating: 9 },
    { title: "Avatar", rating: 7 },
    { title: "Interstellar", rating: 8.5 },
];
// 👉 Output: ["🎬 Inception (9)", "🎬 Interstellar (8.5)"]

// 9️⃣ Filter Names Starting With “A” → Convert to Lowercase
const names = ["Amit", "Arjun", "Neha", "Riya", "Ankit"];
// 👉 Output: ["amit", "arjun", "ankit"]

// 🔟 Filter Products With Price < 100 → Return String “{name} is affordable”
const items = [
    { name: "Pen", price: 20 },
    { name: "Book", price: 150 },
    { name: "Pencil", price: 10 },
    { name: "Bag", price: 500 },
];
// 👉 Output: ["Pen is affordable", "Pencil is affordable"]