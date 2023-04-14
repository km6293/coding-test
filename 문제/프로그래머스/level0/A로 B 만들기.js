function solution(a,b){
  return a.split('').sort().join('') == b.split('').sort().join('') ? 1 : 0
}

console.log(solution("olleh","hello"), 1)