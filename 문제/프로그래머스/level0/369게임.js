function solution(n){
  return n.toString().split('').filter(e => e == 3 || e == 6 || e == 9).length
}

console.log(solution(29423))