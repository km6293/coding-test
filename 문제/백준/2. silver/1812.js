const [n, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n").map(Number);
// const [n, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let sum = 0;
arr.forEach((e,i) => (i+1) % 2 === 0 ? sum -= arr[i] : sum += arr[i])

let x = sum / 2;
let rArr = [x];
for(let i = 0; i < arr.length-1; i++){
  x = arr[i] - x
  rArr.push(x);
}

console.log(rArr.join('\n'));
