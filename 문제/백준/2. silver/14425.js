let [input, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n')
// let [input, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

const [N, M] = input.split(' ').map(Number);

let set = new Set(list.splice(0, N))
let cnt = 0
for(let i = 0; i < list.length; i++){
  if(set.has(list[i])) cnt += 1; 
}

console.log(cnt);