import url from 'url';

// The URL module splits up a web address into readable parts.
// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

console.log("Split a web address into readable parts:")

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr,true);
// console.log(q)
//it returns following text : 
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:8080',
//     port: '8080',
//     hostname: 'localhost',
//     hash: null,
//     search: '?year=2017&month=february',
//     search: '?year=2017&month=february',
//     query: [Object: null prototype] { year: '2017', month: 'february' },
//     pathname: '/default.htm',
//     path: '/default.htm?year=2017&month=february',
//     href: 'http://localhost:8080/default.htm?year=2017&month=february'
//   }

// accessing them one by one
console.log(q.host) //give localhost:8080
console.log(q.pathname)// /default.htm
console.log(q.path)// /default.htm?year=2017&month=february
console.log(q.search)// ?year=2017&month=february
console.log(q.query) // [Object: null prototype] { year: '2017', month: 'february' }

// q.query can be further used
console.log(q.query.year)
console.log(q.query.month)



//Node.js File Server
