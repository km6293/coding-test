function solution(n){
  return Number.isInteger(n / 7) ? n / 7 : parseInt(n / 7) + 1
}

console.log(solution(1))

// console.log(Number.isInteger(15.5))