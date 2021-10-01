const fs = require('fs')
const { exit } = require('process')
const reg = require('../data/apiKeyRegex')
const ora = require('ora');
const clc = require("cli-color");

const fileReaderRegex = (fileName) => {
    let data = fs.readFileSync(fileName, 'utf8').toString().split('\n')
    let flag = 0;
    for (const x in data) {
        reg.providers.forEach(element => {
            let regex = new RegExp(element.pattern, element.flags);
            if (regex.test(data[x]) == true) {
                flag = 1;
                ora(clc.greenBright.bold(element.provider) + " found in " + fileName).fail();
                console.log(clc.red.bold(x, data[x]))
                return
            }
        });
        if (flag == 1) {
            exit(1)
        }
    }

}
module.exports = fileReaderRegex