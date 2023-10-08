let s = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// let s = require('fs').readFileSync("/dev/stdin").toString().trim();

s = s.replaceAll('XXXX','AAAA');
s = s.replaceAll('XX','BB');

console.log(s.indexOf('X') == -1 ? s : -1);