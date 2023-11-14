let [input,...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [input,...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

arr = arr.map(e => +(e.trim())).sort((a,b) => a - b);
const [K, N] = input.split(' ').map(Number);

let l = 0;
let r = arr[arr.length - 1];
let m = Math.floor((l+r) / 2);
let result = 0;

while(l <= r){

  // 랜선 갯수 구하기
  let num = 0;
  arr.forEach(e => num += Math.floor(e/m));

  if(num >= N){
    l = m + 1;
    // 최대 m 값
    if(m > result) result = m
  }else{
    r = m - 1;
  }

  m = Math.floor((l+r)/ 2);
}

console.log(result);

