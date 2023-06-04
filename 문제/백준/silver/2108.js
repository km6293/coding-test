let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let obj = {}
input = input.map(e => {
  obj[e] == undefined ? obj[e] = 1 : obj[e] += 1;
  return parseInt(e);
}).sort((a,b) => a - b);

// console.log(parseInt(input.reduce((a, b) => a + b) / input.length));
// console.log(input[parseInt(input.length/2)]);

let max = Math.max(...Object.values(obj));
let cnt = 0;
if([...Object.values(obj)].filter(e => e == max).length >= 2){
  for(val in obj){
    // console.log(obj[val])
    if(max == obj[val]){
      
    }
  }
}
// console.log(Object.values(obj).find(e => e == max))

for( const [key, value] of Object.entries(obj)){
  console.log(key, value)
  
}


// console.log(input.length == 1 ? 0 : input[input.length-1] - input[0]);

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이


// 첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
// 둘째 줄에는 중앙값을 출력한다.
// 셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
// 넷째 줄에는 범위를 출력한다.