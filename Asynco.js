function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data fetched!");
        }, 2000);
    });
}

async function showData() {
    console.log("Fetching...");
    const result = await fetchData(); // waits here
    console.log(result);
    console.log("Done!");
}

showData();
