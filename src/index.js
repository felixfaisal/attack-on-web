const fs = require('fs')
let regexp = /\.(jpe?g|jpg|png|gif)$/gi
let str = "extension.gif"
console.log(str.search(regexp));