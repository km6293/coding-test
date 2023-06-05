// let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n").map(e => parseInt(e));
let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(e => parseInt(e));

input.shift();
input = input.sort((a,b) => a - b);

// 산술평균
console.log(parseInt(Math.round(input.reduce((a,b) => a + b) / input.length)))

// 중앙값
console.log(input[Math.floor(input.length/2)])

// 최빈값
let obj = {};
input.forEach(e => obj[e] == undefined ? obj[e] = 1 : obj[e] += 1 );
let max = Math.max(...Object.values(obj));
let maxList = [];
for(const [key, value] of Object.entries(obj)){
  if(value == max)maxList.push(parseInt(key));
}
maxList.sort((a,b) => a - b);
console.log(maxList.length > 1 ? maxList[1] : maxList[0]);

// 범위
console.log(input[input.length -1 ] - input[0]);