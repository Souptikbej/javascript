const process = require('process');


process.on('beforeExit', function () {
    console.log("Hello Before Exit");
});


process.on('exit', function () {
    console.log("Hello Exit");
});


console.log("Hello World");