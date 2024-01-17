let [T, ...list] = require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .trim()
  .split("\n");
// let [T, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

console.log(
  list
    .map((e) => {
      const [N, M] = e.split(" ").map(Number);
      return Math.round(factorial(M) / (factorial(N) * factorial(M - N)));
    })
    .join("\n")
);
