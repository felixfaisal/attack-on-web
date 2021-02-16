const fs = require('fs');
path = require('path');
const extensionChecker = require('./src/extensionChecker');

function crawl(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        //console.log(file);
        const next = path.join(dir, file)
        if (fs.lstatSync(next).isDirectory() == true) {
            crawl(next);
        }
        else {
            if (extensionChecker(next)) {
                // let rawdata = fs.readFileSync(next);
                let data = fs.readFileSync(next, 'utf8').toString().split('\n')
                // console.log(data[0])
                for (x in data) {
                    if (data[x].search('arr') > 0) {
                        console.log(data[x])
                    }
                }
                // console.log(data)
                // console.log(rawdata);
                console.log('\t', next);
            }

        }
    })
}

crawl(__dirname);