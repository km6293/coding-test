const A = process.memoryUsage().heapUsed / 1024 / 1024;

// let [N, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const input = require("fs").readFileSync(__dirname + "/../input.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const rotateLeft = (nums, a) => {
  if (nums.length < a) a %= nums.length;
  for (let i = 0; i < a; i++) {
    nums.push(nums.shift());
  }
};

const rotateRight = (nums, a) => {
  if (nums.length < a) a %= nums.length;
  for (let i = 0; i < a; i++) {
    nums.unshift(nums.pop());
  }
};

const arr = input[1].split(" ").map(Number);

const dq = arr.map((e, i) => [i, e]);
const result = [];

while (dq.length !== 0) {
  const [idx, next] = dq.shift();
  result.push((idx + 1));
  if (next > 0) {
    rotateRight(dq, next - 1);
  } else {
    rotateLeft(dq, -next);
  }
}

console.log(result.join(" "));



const B = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`현재 사용 중인 메모리: ${B - A} MB`);

