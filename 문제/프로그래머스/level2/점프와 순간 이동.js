function solution(n){
  let cnt = 1;
  while(n != 1){
    if(n % 2 == 1){
      n -= 1;
      cnt += 1;
    }else{
      n = n / 2;
    }
  }
  return cnt
}

// console.log(solution(5),2)
// console.log(solution(6),2)
console.log(solution(5000),5)