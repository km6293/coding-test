let [a, b] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// let [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

function findPermutation(arr, n){
  const rArr = [];
  if(n === 1) return arr.map(v => [v]);
  arr.forEach((nArr, i, oArr) => {
    const rest = [...oArr.slice(0, i), ...oArr.slice(i+1)];
    const permutation = findPermutation(rest, n-1);
    const attach = permutation.map(e => [nArr, ...e])
    rArr.push(...attach);
  })
  return rArr;
}

let list = new Array(a).fill().map((e,i) => i+1);
let result = findPermutation(list, b);
result.forEach(e => console.log(...e));

