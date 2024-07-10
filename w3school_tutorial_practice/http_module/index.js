import { error } from 'console';
import http from 'http';


// console.log('example1: Add an HTTP Header')
// var server = http.createServer((req,res)=>{
//     console.log("Hello world")
//     // If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
    // res.writeHead(200, {'Content-Type': 'text/html'});//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// })

// server.listen(8000,'localhost')





// console.log("Ex-2: Read the Query String")
// const server1 = http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'text/html'});
//     // res.write("hello",(error)=>{
//     //     if (error) throw error;
//     //     console.log("Write completed");
//     // })
//     res.write(req.url)//this will print whatever is written at URL
//     res.end();
// })

// server1.listen(8000,'localhost')


// import url
import url from 'url';
console.log("ex3 : Split the Query String")
const server2 = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);    
})

server2.listen(8000, 'localhost')
//following url can be given input - http://localhost:8000/?year=2017&month=July