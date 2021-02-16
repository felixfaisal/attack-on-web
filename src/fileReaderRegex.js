const fs = require('fs')

const fileReaderRegex = (fileName) => {
    let data = fs.readFileSync(fileName, 'utf8').toString().split('\n')
    // console.log(data[0])
    for (x in data) {
        console.log(x + " " + data[x])
    }

}
module.exports = fileReaderRegex