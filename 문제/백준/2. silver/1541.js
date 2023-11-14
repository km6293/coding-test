// let n = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
let n = require('fs').readFileSync("/dev/stdin").toString().trim();

let [a, ...b] = n.split('-').map(num => num.split('+').reduce((c,d) => (+c) + (+d), 0));
console.log(a - (b.reduce((a,b) => a+b, 0)));