// create web server - http module
// to see the changes, we have to restart the server always. 
import http from 'http';

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/plain');
    res.end('Response from server'); //first response to the server
    
});


// server.listen(8000,'localhost',()=>{
//     console.log('Server Running at http://localhost:8000')
// });


// or 


// changing port
const PORT = process.env.PORT || 8000
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log('Server Running at http://localhost:8000')
});