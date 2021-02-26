const fs = require('fs');

const arr = fs.readFileSync('./\.gitignore').toString().split("\r\n")
let val;
arr.map(item => {
    if (item[0] == '/') {
        val = item.slice(1);
        let index = arr.indexOf(item);
        arr[index] = val
    }
})


module.exports = arr;