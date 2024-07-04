// to import path module we will use require
const path1 = require('path');
console.log(path1.basename('C:/Users/ajink/OneDrive/Desktop/assignment1/npm tutorials/ch2/index.js'))

// the following code will do the same thing done by above code
console.log(path1.basename(__filename))
console.log(path1.basename(__filename,'.js'))


console.log(path1.dirname(__filename))
