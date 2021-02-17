const fs = require('fs');
path = require('path');
const extensionChecker = require('./src/extensionChecker');
const fileReaderRegex = require('./src/fileReaderRegex')
const arr = require('./src/check.js')

console.log('arr', arr)

function crawl(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        //console.log(file);
        if (arr.find((item => file == item))) {
            console.log('ignore file')
        }
        else {
            const next = path.join(dir, file)
            if (fs.lstatSync(next).isDirectory() == true) {
                crawl(next);
            }
            else {
                if (extensionChecker(next)) {
                    fileReaderRegex(next)
                    console.log('\t', next);
                }

            }
        }

    })
}

crawl(__dirname);