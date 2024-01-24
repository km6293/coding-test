let [n, ...input] = require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .split("\n");

// let [n, ...input] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n");

const obj = {};

for (let i = 0; i < +n; i++) {
  obj[input[i]] ? (obj[input[i]] += 1) : (obj[input[i]] = 1);
}

const max = Math.max(...Object.values(obj));
const list = Object.keys(obj).filter((key) => obj[key] === max);

console.log(list.sort()[0]);
