const fs = require('fs');
path = require('path');
const extensionChecker = require('./extensionChecker');
const fileReaderRegex = require('./fileReaderRegex')

const ora = require('ora');
// const testCheck = require('./src/yargs.js')

const clear = require('clear')


function crawl(dir) {
    const arr = require('./check.js')


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
                if (extensionChecker(next)) {
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