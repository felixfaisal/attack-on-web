const fs = require('fs');
let directory_name = ".";
let filenames = fs.readdirSync(directory_name);
console.log("\nFilenames in the directory:");
filenames.forEach((file) => {
    let fileName = directory_name + "/" + file;
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("Reading File: " + fileName);
        console.log(data);
        console.log(typeof x);
    });
    console.log("File:", file);
});
