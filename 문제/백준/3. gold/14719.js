let [N, M] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, M] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [H, W] = N.split(' ').map(Number);
const list = M.split(' ').map(Number);

const leftMaxList = Array.from({length: W}, () => 0);
const rightMaxList = Array.from({length: W}, () => 0);

leftMaxList[0] = list[0];
for(let i = 1; i < W; i++){
  leftMaxList[i] = Math.max(leftMaxList[i-1], list[i])
}

rightMaxList[W-1] = list[W-1];
for(let i = W-2; i >= 0; i--){
  rightMaxList[i] = Math.max(rightMaxList[i+1], list[i])
}

let result = 0;
for(let i = 0; i < W; i++){
  result += Math.min(leftMaxList[i], rightMaxList[i]) - list[i]
}

console.log(result)