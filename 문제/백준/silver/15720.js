let [N, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [N, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

// 문자열을 숫자 배열로 변환
N = N.split(' ').map(Number);
arr = arr.map(e => e.split(' ').map(Number));

// 최솟값 구하기
let min = Math.min(...N);

// 배열 요소의 합 계산
let sum = arr.reduce((acc, curr) => acc + curr.reduce((a, b) => a + b, 0), 0);

// 배열 정렬
arr.forEach(e => e.sort((a, b) => a - b));

// 할인액 계산
let discount = 0;
for (let i = 0; i < min; i++) {
  discount += arr.reduce((acc, curr) => acc + curr.pop(), 0) * 0.1;
}

console.log(sum);
console.log(sum - discount);
