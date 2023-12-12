let [N, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n')
// let [N, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

list = list[0].split(' ').map(Number);

let [inCnt, inResult] = [1, 1];
let [deCnt, deResult] = [1, 1];

for(let i = 0; i < N; i++) {
  if(list[i] <= list[i+1]) {
    inCnt += 1;
    if(inResult < inCnt) inResult = inCnt;
  }else{
    inCnt = 1;
  }
  if(list[i] >= list[i + 1]) {
    deCnt +=1 ;
    if(deResult < deCnt) deResult = deCnt;
  }else{
    deCnt = 1;
  }
}

console.log(inResult > deResult ? inResult : deResult);