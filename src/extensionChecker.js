const fs = require('fs')

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

export default extensionChecker;

/* console.log(extensionChecker('extension.gif'));
console.log(extensionChecker('index.js'));
console.log(extensionChecker('new.json')); */