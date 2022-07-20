function solution(s) {
  //return s.split('').map((t,i) => i % 2 ? t.toLowerCase(): t.toUpperCase()).join('')
  return s.split(' ').map((t,i) => t.split('').map((a,b) => a))
}

console.log(solution("try hello world"))
console.log(solution("try helloworld"))