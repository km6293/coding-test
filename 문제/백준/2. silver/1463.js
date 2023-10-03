let num = parseInt(require('fs').readFileSync(__dirname + "/../input.txt").toString().trim());
// let num = parseInt(require('fs').readFileSync("/dev/stdin").toString().trim());

// 첫번째 풀이 -- 시간 초과
// let min = Number.MAX_SAFE_INTEGER;
// function chk(num, cnt){
//   if(num == 1 && min > cnt){
//     min = cnt;
//   }else{
//     if(num % 3 == 0) chk((num / 3), cnt+1);
//     if(num % 2 == 0) chk((num / 2), cnt+1);
//     if(num > 1) chk(num -1, cnt+1);
//   }
// }

// chk(num, 0);
// console.log(min);

const dp = new Array(num+1).fill(0);

for(let i = 2; i <= num; i++){
  dp[i] = dp[i-1] + 1;
  if(i % 2 == 0) dp[i] = Math.min(dp[i], dp[i/2]+1);
  if(i % 3 == 0) dp[i] = Math.min(dp[i], dp[i/3]+1);
}

console.log(dp[num])