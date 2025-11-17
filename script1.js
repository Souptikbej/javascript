const str = "Souptik Souptik Souptik Souptik Souptik Souptik";
const obj = {};
for (let x of str) {
    if (obj[x]) obj[x] += 1;
    else obj[x] = 1;
}
// str.split("").forEach(function (ch) {
//     if (obj[ch]) {
//         obj[ch] += 1;
//     } else {
//         obj[ch] = 1;
//     }
// });

console.log(obj);
