// The Node.js file system module allows you to work with the file system on your computer.
// import fs from 'fs';
import * as fs from 'fs';
import http from 'http';
// Common use for the File System module:
//     Read files
//     Create files
//     Update files
//     Delete files
//     Rename files


//Read Files
// The fs.readFile() method is used to read files on your computer.
const server = http.createServer((req,res)=>{
    fs.readFile('./demofile1.html',(err,data)=>{
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("404 Not Found");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    })
})

server.listen(8000, 'localhost', () => {
    console.log('Server is listening on http://localhost:8000');
});







// Create Files
// The File System module has methods for creating new files:
//     fs.appendFile()
//     fs.open()
//     fs.writeFile()

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 