const fs = require('fs');
path = require('path');
const extensionChecker = require('./extensionChecker');
const fileReaderRegex = require('./fileReaderRegex')

const ora = require('ora');
// const testCheck = require('./src/yargs.js')

const clear = require('clear')
let arrt;
let extensions

function crawl(dir, answers) {
    if (answers) {
        arrt = [...answers.directories, ...answers.files];
        extensions = answers.extensions;
    }
    else {
        //arrt = require('./check.js')
    }
    const arr = arrt;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        //console.log(file);
        if (arr.find((item => file == item))) {
            // console.log('ignore file')
        }
        else {
            const next = path.join(dir, file)
            if (fs.lstatSync(next).isDirectory() == true) {
                crawl(next);
            }

            else {
                // console.log(extensions + "This is working")
                if (extensionChecker(next, extensions)) {
                    // console.log(arr)
                    fileReaderRegex(next)
                    let spinner = ora('Read file' + next).succeed();
                    // spinner.succeed('Read file ' + next)
                    //console.log('\t', next);
                }

            }
        }

    })
}

module.exports = crawl