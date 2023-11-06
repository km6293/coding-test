let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
//let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const [titleArr, numArr] = [[],[]];
input = input.map(e => e.trim());
for(let i = 0; i < N; i++){
  const [title, num] = input[i].split(' ');
  titleArr.push(title);
  numArr.push(+num);
}

function binarySearch(findValue){
  let left = 0;
  let right = N - 1;
  let mid = N - 1;

  if(left === right) return mid
  while(true){
    if((mid === 0 || numArr[mid-1] < findValue) && numArr[mid] >= findValue) return mid;
    if((mid === N-1 || numArr[mid] < findValue) && numArr[mid+1] >= findValue) return mid+1
    numArr[mid] < findValue ? left = mid + 1 : right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }
}

const result = [];
for(let i = N; i < N+M; i++){
  result.push(titleArr[binarySearch(+input[i])]);
}
console.log(result.join('\n'))