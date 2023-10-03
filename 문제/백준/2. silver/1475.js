// let n = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
let n = require('fs').readFileSync("/dev/stdin").toString().trim();

let list = new Array(10).fill(0);
for(let i = 0; i < n.length; i++){
  let num = n[i];
  if((n[i] == 6 && list[6] - list[9] > 0) || (n[i] == 9 && list[9] - list[6] > 0)){
    num = (num == 6) ? 9 : 6;
  }
  list[num] += 1;
}

console.log(Math.max(...list));