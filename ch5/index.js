import * as fs from 'fs/promises';

// Creating directory - Path should be there(if recursive function is not used)
// async function createDirectory() {
//     try {
//         await fs.mkdir("C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/demo", { recursive: true });
//         console.log('Directory created');
//     } catch (error) {
//         console.log('Failed to create directory:', error.message);
//     }
// }

// createDirectory();



// To read the function
try {
    const files = await fs.readdir('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/')
    // for(const file of files){
    console.log(files)
    // }

} catch (error) {
    console.log("error: ",error.message)
}





// How to remove directory
try {
    await fs.rmdir('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/demo')
    console.log('removed')
} catch (error) {
    console.log('error')
    
}




// create and write files
try {
    await fs.writeFile('readme.txt','Hello, Ajinkya') // directly file name can help if we want data directly in file.
} catch (error) {
    
}
// The above code will generate a file name readme.txt in the same FileSystemDirectoryEntry. and next time if we change some content in that then whole thing will be replaced.


//read files
try {
    const data = await fs.readFile('readme.txt')
    console.log(data)
    // <Buffer 48 65 6c 6c 6f 2c 20 41 6a 69 6e 6b 79 61> -> it returns buffer 
} catch (error) {
    console.log('error')
}


//to avoid buffer and have actual nodejs
try {
    const data = await fs.readFile('readme.txt','utf-8');
    console.log(data)
} catch (error) {
    console.log('error')
}


// If we want to append the data and not to replace the data then
try {
    await fs.appendFile('readme.txt','Where are you from?')
    // const data = await fs.readFile('readme.txt','utf-8');
    // console.log(data)
} catch (error) {
    
}


// To copy files . (it will create a new file name info.txt and copy the data of readme.txt into it)
try {
    await fs.copyFile('readme.txt','info.txt')
} catch (error) {
    
}




// to get file information
try {
    const stats = await fs.stat('C:/Users/ajink/OneDrive/Desktop/assignment1/npm_tutorials/ch5/info.txt')
    console.log(stats.isDirectory())
    console.log(stats.isFile())
} catch (error) {
    console.log(error)
}