const querystring = require('querystring');

const queryString = 'foo=bar&baz=qux';
const parseduery = querystring.parse(queryString);

console.log(parseduery); // { foo: 'bar', baz: 'qux' }