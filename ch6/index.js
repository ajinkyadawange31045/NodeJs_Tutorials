import { error } from 'console'
import * as fs from 'fs'//this is not promise so it is not wrote here.
import { callbackify } from 'util'
//creating directory path should be theree
// fs.mkdir('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/ch6/demo',function(error){
//     if (error) throw error;
//     console.log("Directory created...")
// });


//if using arrow function
// npm_tutorials/ch6/demo',(error)=>{
//     if (error) throw error;
//     console.log("Directory created...")
// }); 






// // /creating directory path is not required to be there.
fs.mkdir('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/ch6/test/demo',{recursive:true},(error)=> {
    if (error) throw error;
    console.log("Directory created...")
});



// how to read content in directories. (same as ls in linux)
// fs.readdir('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/ch6/',(error, files)=>{
//     if (error) throw error;
//     for(const file of files)
//         console.log(file);
// })




// //how to remove directory. (to remove that the directory should be empty)
// fs.rmdir('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/ch6/demo',(error)=>{
//     if (error) throw error;
//     console.log("Directory removed")
// })


// // creating and writing files
// fs.writeFile('readme.txt','Hello node js',(aji)=>{
//     if (aji) throw aji;
//     console.log('File created')
// })



// //read file (buffer)
// fs.readFile('readme.txt',(error,data) =>{
//     if (error) throw error;
//     console.log(data);
// })

// //read file(string data)
// fs.readFile('readme.txt','utf-8',(error,data) =>{
//     if (error) throw error;
//     console.log(data);
// })




// //append dta into files
// fs.appendFile('readme.txt',' Where are you now?', (error)=>{
//     if (error) throw error;
//     console.log("Data Appended");
// })


//how to copy the files
// fs.copyFile('readme.txt','info.txt', error =>{
//         if (error) throw error;
//         console.log("File copied");
// })




// // get file information
// fs.stat('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/ch6/info.txt', (error,stats)=>{
//     if (error) throw error
//     console.log(stats.isDirectory())
//     console.log(stats.isFile())
    // console.log(stats)
// })









