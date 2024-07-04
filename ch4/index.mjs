// // traditional way
// const path1 = require('path');
// console.log(path1.basename(__dirname))


// another way
import path2 from 'path'; // this doesn't work in nodejs, (it is common syntax in python)
// => so inorder to use it effectively we have to change the extension of index file to '.mjs' from '.js'.


console.log(path2.basename('c://filename'))

// but here we will not be able to use filename and dirname
//and require will also not work here


// another way if we don't want to use .mjs extension is - to add 
// 'type':'module'
//this will help us to solve that without using extension.

