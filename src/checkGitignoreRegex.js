const fs = require('fs')
let gitdata = fs.readFileSync('../.gitignore', 'utf-8').toString().split('\n');
for (const x in gitdata) {
    if (gitdata[x].startsWith("*.")) {
        console.log(gitdata[x])
    }
}
let rawdata = fs.readFileSync('./extensions.json');
let exten = JSON.parse(rawdata);
console.log(exten.fileExtensions)
for (const x in gitdata) {
    if (gitdata[x].startsWith("*.")) {
        console.log(exten.fileExtensions.indexOf(gitdata[x]))
    }
}
