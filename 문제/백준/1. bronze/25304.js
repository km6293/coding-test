let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let total = +list[0];
for(let i = 2 ; i < list.length; i++){
  let [a,b] = list[i].split(' ');
  total -= +a*+b;
}

console.log(total === 0 ? "Yes" : "No");