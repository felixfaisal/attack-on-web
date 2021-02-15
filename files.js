let arr = [];
arr.push('index.js');
arr.push('dummy.txt');

module.exports = function() {
    return arr[Math.floor(Math.random()*arr.length)];
  }