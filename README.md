# json-storage - Simple key-value storage based on JSON for Node.js

[![npm package](https://nodei.co/npm/request.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/request/)


## Simple to use

json-storage очень легкий пакет без каких-либо зависимостей

```js
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```
