// 첫번째 풀이
function solutionFail(n) {
  return '수'.repeat(n).replaceAll('수', (c, i) => i % 2 == 0 ? c : "박");
}
// 프로그래머스에서 replaceAll 을 지원하지 않음.

// 두번째 풀이

function solution(n) {
  return '수'.repeat(n).replace(/수/g, (c, i) => i % 2 == 0 ? c : "박");
}

// 인기 풀이
const waterMelon = n => {
  return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

console.log(waterMelon(20))