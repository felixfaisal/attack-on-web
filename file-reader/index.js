const fs = require('fs');
const { exit } = require('process');

const fileReader = () => {
    let directory_name = ".";
    let filenames = fs.readdirSync(directory_name);
    console.log("\nFiles in the directory:");
    filenames.forEach((file) => {
        let fileName = directory_name + "/" + file;
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log("Reading File: " + fileName);
            // console.log(data);
            let result = data.search('Felix')
            if (result) {
                console.log("Found Felix in file " + fileName)
                exit(1)
            }
            // console.log(typeof data);
        });
        console.log("File:", file);
    });

}
fileReader();


