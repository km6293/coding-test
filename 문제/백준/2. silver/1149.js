let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
//let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

n = +n;
input = input.map(e => e.trim().split(' ').map(Number));

for(let i = 1; i < n; i++){
  input[i][0] += Math.min(input[i-1][1], input[i-1][2]);
  input[i][1] += Math.min(input[i-1][0], input[i-1][2]);
  input[i][2] += Math.min(input[i-1][0], input[i-1][1]);
}

console.log(Math.min(...input[n-1]));

