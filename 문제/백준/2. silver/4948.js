let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

list.pop()
list = list.map(e => +e.trim());
let max = Math.max(...list)

function solution(n){
  let range = 2 * n;
  let arr = Array(range + 1).fill(true).fill(false, 0, 2);
  for(let i = 2 ; i * i <= range; i++){
    if(arr[i]){
      for(let j = i * i; j <= range; j+=i){
        arr[j] = false;
      }
    }
  }
  return arr;
}

let primeNumberList = solution(max);
let result = [];

for(let i = 0; i < list.length; i++){
  result.push(primeNumberList.slice(list[i]+1 , list[i] * 2 + 1).filter(e => e).length)
}

console.log(result.join('\n'))