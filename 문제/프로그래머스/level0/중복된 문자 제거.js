function solution(s){
  return Array.from(new Set(s)).join('')
}

console.log(solution("We are the world"))