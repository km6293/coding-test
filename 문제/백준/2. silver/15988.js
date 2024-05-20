let [N, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

arr = arr.map(num => parseInt(num))
let dp = [1,2,4];
let max = Math.max(...arr);

for(let i = 3 ; i < 3 + max; i++){
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009
}

console.log(arr.map(num => dp[num - 1]).join('\n'))