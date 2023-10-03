let num = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// let num = require('fs').readFileSync("/dev/stdin").toString().trim();

console.log([1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596, 2279184][+num-1]);