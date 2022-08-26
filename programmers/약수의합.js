function solution(n) {
  let sumVal = 0
  for (let i = 1; i <= n; i++){
    if(n % i === 0){
      sumVal += i
    }
  }
  return sumVal
}

console.log(solution(12))