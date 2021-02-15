const fs = require('fs')
// import extension from '/extensions.json'

const extensionChecker = (fileName) => {
    let regexp = /\.(js|ts|json)$/gi
    // let str = "extension.gif"
    let result = fileName.search(regexp);
    if (result != -1) {
        // console.log("Matched extension");
        return 1;
    }
    else {
        // console.log("Didn't match extension");
        return 0;
    }
}
// const fs = require('fs');

let rawdata = fs.readFileSync('extensions.json');
let student = JSON.parse(rawdata);
console.log(student.fileExtensions);
let regString = '/\.(js)$/gi';
console.log(regString)
let newString = regString.slice(0, 5)
    + "|ts"
    + regString.slice(5);

let regexp = new RegExp(newString, "gi");
let regx = /\.(js|ts|json)$/gi;
console.log(regx)
let str = "extensions.js"
console.log(str.search(/\.(js|ts|json)$/gi));
console.log(regexp);

console.log(newString);
console.log(regString[5])
for (x in student.fileExtensions) {
    console.log(student.fileExtensions[x]);
}

// console.log(extension.fileExtensions)
// export default extensionChecker;

/* console.log(extensionChecker('extension.gif'));
console.log(extensionChecker('index.js'));
console.log(extensionChecker('new.json')); */
