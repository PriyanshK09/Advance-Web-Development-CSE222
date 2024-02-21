const url = require('url');

const urlString = 'https://www.example.com/path?foo=bar&baz=qux';
const parsedUrl = url.parse(urlString, true); // true: query string will be parsed into an object

console.log(parsedUrl.pathname); // /path
console.log(parsedUrl.query); // { foo: 'bar', baz: 'qux' }

// Why is TRUE used in the parse method?
// The query string will be parsed into an object. If you don't use true, the query string will be returned as a string.