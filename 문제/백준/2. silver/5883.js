let [N, ...inputArr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n").map(Number);
// let [N, ...inputArr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// 중복되지 않은 list
let setArr = [...new Set(inputArr)];
// 가장 긴 연속 구간
let max = 0;

for(let i = 0; i < setArr.length; i++){
  // inputArr - 특정 용량인 나머지 Arr 
  let arr = [...inputArr].filter(e => e != setArr[i]);
  let cnt = 1;

  for(let r = 0; r < arr.length-1; r++){
    // 다음값과 같다면 cnt += 1, 아니라면 1로 초기화
    arr[r] == arr[r+1] ? cnt += 1 : cnt = 1;
    if(cnt > max) max = cnt;
  }
}

console.log(max);