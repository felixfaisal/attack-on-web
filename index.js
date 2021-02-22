const fs = require('fs');
path = require('path');
const extensionChecker = require('./src/extensionChecker');
const fileReaderRegex = require('./src/fileReaderRegex')
const arr = require('./src/check.js')
const asciify = require('asciify-image');
const Table = require('cli-table');
const reg = require('./data/apiKeyRegex')



// console.log('arr', arr)

function crawl(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        //console.log(file);
        if (arr.find((item => file == item))) {
            console.log('ignore file')
        } else {
            const next = path.join(dir, file)
            if (fs.lstatSync(next).isDirectory() == true) {
                crawl(next);
            } else {
                if (extensionChecker(next)) {
                    fileReaderRegex(next)
                    //console.log('\t', next);
                }

            }
        }

    })
}

const options = {
    fit: 'box',
    width: 80,
    height: 80,

}

const table = new Table({
    head: ['SUPPORTED API PROVIDERS'],
    colWidths: [30, 30, 30]
});

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [],
        i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

asciify('aow.png', options, function (err, asciified) {
    if (err) throw err;
    let apiProviders = [];
    reg.providers.forEach(element => {
        apiProviders.push(element.provider)
    });
    var matrix = listToMatrix(apiProviders, 3);
    for (let index = 0; index < matrix.length; index++) {
        table.push(
            matrix[index]
        );

    }

    console.log(asciified);

    console.log(table.toString());
    crawl(__dirname);
});