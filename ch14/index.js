// create web server - http module
// to see the changes, we have to restart the server always. 
import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res)=>{
    res.writeHead(200,"OK",{ 'Content-type':'text/html'})
    // res.end('Response from server'); //first response to the server

    // now we are doing routing
    // if (req.url === '/'){
    // res.end('<h1>Home Page</h1>'); 
    // }
    // else if (req.url === '/about'){
    //     res.end("<h1>About page</h1>")
    // }
    // else{
    //     res.end("<h1>Something else</h1>")
    // }


    // lets serve a page
    if (req.url === '/'){
        fs.readFile('./public/home.html',(error,data)=>{
            if(error) throw error;
            res.end(data); 
        })
        
    }
    else if (req.url === '/about'){
        fs.readFile('./public/about.html',(error,data)=>{
            if(error) throw error;
            res.end(data); 
        })
    }
    else{
        res.end("<h1>Something else</h1>")
    }
});

// changing port
const PORT = process.env.PORT || 8000
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log('Server Running at http://localhost:8000')
});