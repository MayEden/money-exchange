const lineReader = require('line-reader');
const exchange = require('./exchange');

let arr = [];
lineReader.eachLine('data.txt', line => {
    arr.push(line);
});

exchange(arr);
