let num = +require("fs")
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .trim();
// let num = +require('fs').readFileSync("/dev/stdin").toString().trim();

const arr = Array.from({ length: 1001 }).fill(0);
arr[1] = 1;
arr[2] = 3;

for (let i = 3; i <= num; i++) {
  arr[i] = (arr[i - 1] + 2 * arr[i - 2]) % 10007;
}

console.log(arr[num]);
