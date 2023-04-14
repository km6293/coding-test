function solution(s){
  return s.split('').map(e => e == e.toUpperCase() ? e.toLowerCase() : e).sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('')
}

console.log(solution("Bcad"))