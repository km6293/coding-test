function solution(n) {
  return Array.from(n.toString()).map(Number).reverse();
}

//console.log(solution(12345))

// 내가 풀려고 했던 답 
function solution2(n){
  return (n+'').split('').reverse().map(n => parseInt(n))
}

console.log(solution2(1234))