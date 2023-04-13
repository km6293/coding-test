function solution(n){
  let val = 0;
  if(n < 100000){
    val = n;
  }else if(n >= 100000 && n < 300000){
    val = n - (n * 0.05)
  }else if(n >= 300000 && n < 500000){
    val = n - (n * 0.1)
  }else if(n >= 500000){
    val = n - (n * 0.2)
  }
  return parseInt(val)
}

console.log(solution(580000))