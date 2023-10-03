const [A, B, C] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// const [A, B, C] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

if (A !== B && A !== C && B !== C) {
  console.log(Math.max(A, B, C) * 100);
} else if ((A === B && A !== C) || (A === C && A !== B) || (B === C && B !== A)) {
  let value = A === B || A === C ? A : B;
  console.log(1000 + (value * 100));
} else {
  console.log(10000 + (A * 1000));
}