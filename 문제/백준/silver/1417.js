const [N, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n").map(Number);
// const [N, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let cnt = 0;
while(true){
  let max = Math.max(...arr);

  // 1. 가장 큰 값인지 체크
  if (arr[0] === max) {
    // 2. 중복값 체크
    if (!arr.slice(1).some(num => num === arr[0])) {
      console.log(cnt);
      break;
    }
  }

  const lastIndex = arr.lastIndexOf(max);
  arr[lastIndex] -= 1;
  arr[0] += 1;
  cnt += 1;
}