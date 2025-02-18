// import { multiply } from 'lodash';
import { URL } from 'url';

const myURL = new URL('https://www.google.com:8080/p/a/t/h?query=string#hashtag');

console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.href);
console.log(myURL.pathname);
console.log(myURL.port);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.toString());
console.log(myURL.toJSON());