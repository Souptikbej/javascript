const http = require('http');


const server = http.createServer((req,res) =>{
    if(req.url === '/') res.end("Hello From Nodejs Home Page");
    else if(req.url === '/about' || req.url === '/About') res.end("Hello From About Page");
    else res.end("<h1>Error 404. page not found.</h1>");
});


server.listen(8000, () =>{
    console.log("Server Running on Port Number 8000");
});
