function solution(n) {
  return Number(Array.from(String(n), Number).sort((a,b) => b - a).join(''));
}

// console.log(solution(341242))


// 다른 사람 풀이 더 편하고 쉬움
function solution2(n) {
  // 문자풀이
  return parseInt((n+"").split("").sort().reverse().join(""));
}

console.log(solution2(342342))