let [n, ...input] = require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .trim()
  .split("\n");
// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map(Number).sort((a, b) => b - a);

let max = 0;
for (let i = 0; i < Number(n); i++) {
  max = Math.max(max, input[i] * (i + 1));
}

console.log(max);
