
const fs = require('fs')

const extensionChecker = (fileName, extensions) => {
    let result = 0
    try {
        if (extensions.length) {
            for (const x in extensions) {
                if (fileName.endsWith(extensions[x])) {
                    result = 1;
                    break;
                }
            }
        }

        else {
            let rawdata = fs.readFileSync('./src/extensions.json');
            let exten = JSON.parse(rawdata);

            for (const x in exten.fileExtensions) {
                if (fileName.endsWith(exten.fileExtensions[x])) {
                    result = 1;
                    break;
                }
            }

        }
    }
    catch (err) {
        console.log('continue')
    }

    return result

}
module.exports = extensionChecker;
