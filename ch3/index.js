// to import path module we will use require
const path1 = require('path');
console.log(path1.basename('C:/Users/ajink/OneDrive/Desktop/assignment1/npm tutorials/ch2/index.js'))

// the following code will do the same thing done by above code
console.log(2)
console.log(path1.basename(__filename))
console.log(path1.basename(__filename,'.js'))


console.log(3)
console.log(path1.dirname(__filename))

// extension
console.log(4)
console.log(path1.extname(__filename));



// joining paths (it will join all the paths and make a single path out of it)
console.log(5)
console.log(path1.join('/search','label','course/python','oops'));

console.log(path1.join('/search','label','course/python','oops','..')); //the last 2 '..' means it is giving one level down and writing only till python.

console.log(6)
console.log(path1.join(__dirname,'code','django','settings.py'))



// normalize
console.log(7)
console.log(path1.normalize('c:\\temp\\\\code'))

// parse
console.log(8)
console.log(path1.parse(__dirname))
console.log(path1.parse(__dirname).name)
console.log(path1.parse(__dirname).root)

// path1.isAbsolute
console.log(9)
console.log(path1.isAbsolute('//server'))
console.log(path1.isAbsolute('server/server'))
console.log(path1.isAbsolute('server\\server'))
console.log(path1.isAbsolute('server\server'))
console.log()
console.log()
console.log()