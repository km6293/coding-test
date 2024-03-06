let [num, ...arr] = require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .trim()
  .split("\n");
// let [num, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = num.split(" ").map(Number);

let result = {};

for (let i = 0; i < N; i++) {
  const [site, password] = arr[i].trim().split(" ");
  result[site] = password;
}

const queries = arr.slice(N, N + M);

const answer = [];
for (let query of queries) {
  const password = result[query.trim()];
  answer.push(password);
}

console.log(answer.join("\n"));
