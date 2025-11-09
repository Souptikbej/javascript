// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User data fetched!");
//         }, 2000);
//     });
// }

// async function showData() {
//     console.log("Fetching...");
//     const result = await fetchData();
//     console.log(result);
//     console.log("Done!");
// }

// showData();
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}

getUsers();
