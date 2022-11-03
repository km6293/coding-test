function solution(left, rigth){
  let totalVal = 0;
  for(let i = left; i <= rigth; i++){
    let cnt = 0;
    for(let j = 1; j <= Math.sqrt(i); j++){
      if(i % j === 0){
        cnt += 1;
        if(i / j != j){ cnt += 1; }
      }
    }
    let chk = cnt % 2 == 0 ? 0 : 1;
    chk == 0 ? totalVal += i : totalVal -= i;
  }
  return totalVal;
}

console.log(solution(13,17))