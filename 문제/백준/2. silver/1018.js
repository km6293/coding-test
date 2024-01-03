// let [n, ...input] = require("fs")
//   .readFileSync(__dirname + "/../input.txt")
//   .toString()
//   .split("\n");

let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let [N, M] = n.split(" ").map(Number);

let w = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
let b = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

input = input.map((e) => e.split(""));
let val = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    check(j, i);
  }
}

function check(x, y) {
  let chkW = 0;
  let chkB = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== w[i - y][j - x]) chkW += 1;
      if (input[i][j] !== b[i - y][j - x]) chkB += 1;
    }
  }

  let min = chkB < chkW ? chkB : chkW;
  if (min < val) val = min;
}

console.log(val);
