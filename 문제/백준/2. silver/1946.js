let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;
for(let i = 0; i < T; i++) {
  const n = Number(input[line]);
  const arr = [];
  for(let j = line + 1; j <= line + n; j++) {
    arr.push(input[j].split(' ').map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);
  let min = 100001;
  let cnt = 0;
  for(let j = 0; j < arr.length; j++) {
    if(arr[j][1] < min) {
      cnt += 1;
      min = arr[j][1];
    }
  }
  console.log(cnt);
  line += n + 1;
}