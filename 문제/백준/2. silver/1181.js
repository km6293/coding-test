let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

console.log([...new Set(list.slice(1))].sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n'));



