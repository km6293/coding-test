let [N, ...inputArr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n").map(Number);
// let [N, ...inputArr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let setArr = [...new Set(inputArr)];
let max = 0;

for(let i = 0; i < setArr.length; i++){
  let arr = [...inputArr].filter(e => e != setArr[i]);
  let cnt = 1;

  for(let r = 0; r < arr.length-1; r++){
    if(arr[r] == arr[r+1]) cnt += 1;
    else cnt = 1;
    if(cnt > max) max = cnt;
  }
}

console.log(max);