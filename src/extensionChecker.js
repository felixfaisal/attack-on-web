// const { defaultCipherList } = require('constants');
const fs = require('fs')
const check = 'sk_live_4eC39HqLyjWDarjtT1zdp7dc'

const extensionChecker = (fileName, ejson) => {
    let result = 0
    if (ejson) {
        for (x in ejson.extensions) {
            if (fileName.endsWith(ejson.fileExtensions[x])) {
                result = 1;
                break;
            }
        }
    }
    else {
        let rawdata = fs.readFileSync('./src/extensions.json');
        let exten = JSON.parse(rawdata);

        for (x in exten.fileExtensions) {
            if (fileName.endsWith(exten.fileExtensions[x])) {
                result = 1;
                break;
            }
        }

    }

    return result

}
module.exports = extensionChecker;
// export default extensionChecker;
