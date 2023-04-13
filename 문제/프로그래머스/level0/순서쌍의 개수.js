function solution(n) {
  cnt = 0;
  for(let i = 1; i <= parseInt(Math.sqrt(n)); i++){
    if(n % i == 0)cnt += 2;
  }
  if(Number.isInteger(Math.sqrt(n))) cnt -= 1;
  return cnt
}

console.log(solution(20))