let [num, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [num, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = num.split(' ').map(Number);
input = input.map(e => e.trim().split(' ').map(Number))
let max = 0;
for(let i = 0; i < M-2; i++){
  for(let j = i+1; j < M-1; j++){
    for(let k = j+1; k < M; k++){
      max = Math.max(max, input.map(e => Math.max(e[i] , e[j] , e[k])).reduce((a, b) => a + b, 0));
    }
  }
}
console.log(max);

