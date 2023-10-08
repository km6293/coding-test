let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

list = list.map(e => e.trim().split(' ').map(Number));

let result = list.map(([first, second]) => 
  first % second === 0 ? 'multiple' :
  second % first === 0 ? 'factor' :
  'neither'
).slice(0, -1).join('\n');

console.log(result);
