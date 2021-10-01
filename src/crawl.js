const fs = require('fs');
const path = require('path');
const extensionChecker = require('./extensionChecker');
const fileReaderRegex = require('./fileReaderRegex')
const ora = require('ora');
let arr = require('./check.js');
let extensions;

function crawl(dir, answers) {
    if (answers) {
        extensions = answers.extensions;
        let arrt = [...answers.directories, ...answers.files, ...arr]
        arr = arrt
        arrt.forEach((item,index)=>{
            arr[index] = item.replace('/',"").replace(/(#).*/g,"")
            })
    }
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        if (!arr.find((item => file == item))) {
            const next = path.join(dir, file)
            if (fs.lstatSync(next).isDirectory() == true) {
                crawl(next);
            }

            else {
                if (extensionChecker(next, extensions)) {
                    fileReaderRegex(next)
                    ora('Read file' + next).succeed();
                }
            }
        }
    })
}

module.exports = crawl