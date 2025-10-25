const process = require('process');
const abortFunction = () => {
    console.log("Start...");
    setInterval((function () { return console.log("Name : Ankit"); }), 1000);
    setInterval((function () { return console.log("Name : Anik"); }), 1000);
    setInterval((function () { return console.log("Name : Avik"); }), 1000);
    setInterval((function () { return console.log("Name : Anup"); }), 1000);
    setInterval((function () { return console.log("Name : Abinash"); }), 1000);
    setTimeout((function () { return process.abort(); }), 5000);

}

abortFunction();