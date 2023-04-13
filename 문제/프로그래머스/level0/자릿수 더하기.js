function solution(n){
  return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

console.log(solution(10))