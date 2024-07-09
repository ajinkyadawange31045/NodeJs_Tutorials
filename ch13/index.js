import http from 'http';

const server = http.createServer((req,res)=>{
    // request
    // console.log(req.url)
    //to remove that favicon.ico image req
    if(req.url != '/favicon.ico'){
        console.log(req.url)
    }
    console.log(req.method)
    
    // res.statusCode = 202;
    // res.statusMessage = "good"
// the above 2 things can be set at once
res.writeHead(202,"Good",{'Content-Type':'text/plain'})

    res.setHeader('Content-type','text/plain');
    res.end('Response from server'); 
    
});

const PORT = process.env.PORT || 8000
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log('Server Running at http://localhost:8000')
});