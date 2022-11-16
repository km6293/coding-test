function solution(s) {
  return ( (s.length)%2 == 0 ? s[(s.length/2)-1]+s[s.length/2] : s[(s.length/2)-0.5] )
}

console.log(solution("abcde"))
console.log(solution("abcd"))	

// 인기 많은 풀이
function solution2(s) {
  // ceil => 올림
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
