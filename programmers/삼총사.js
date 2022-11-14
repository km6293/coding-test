function solution(number) {
  let cnt = 0;
  for(let i = 0; i < number.length-2; i++){
    for(let j = i+1; j < number.length-1; j++){
      for(let q = j+1; q < number.length; q++){
        if(number[i]+number[j]+number[q] == 0){
          cnt += 1;
        }
      }
    }
  }
  return cnt;
}

console.log(solution([-2, 0, 2]))



