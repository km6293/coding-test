let input = parseInt(require('fs').readFileSync(__dirname + "/../input.txt").toString())
// let input = parseInt(require('fs').readFileSync("/dev/stdin").toString());

// 1번 풀이 - 이게 더 빠름
// let cnt = 0;
// while(true){
//   if(input % 5 === 0){
//     cnt += input / 5
//     break;
//   }

//   input -= 3;
//   cnt += 1;

//   if(input < 0){
//     cnt = -1;
//     break;
//   }
// }

// console.log(cnt)

// 2번 풀이

const dp = new Array(input+5).fill(-1);
dp[3] = 1;
dp[5] = 1;

if(input <= 5){
  console.log(dp[input]);
}else{
  for(let i = 6; i < input + 1; i++){
    let [a,b] = [dp[i], dp[i]];

    if(dp[i-5] !== -1) a = dp[i-5];
    if(dp[i-3] !== -1) b = dp[i-3];

    if(a > 0 && b > 0) dp[i] = Math.min(a + 1, b + 1);
    else if(a > 0 && b < 0) dp[i] = a + 1;
    else if(a < 0 && b > 0) dp[i] = b + 1;
    else dp[i] = -1;
  }
  console.log(dp[input]);
}
