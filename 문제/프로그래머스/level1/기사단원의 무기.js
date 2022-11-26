function solution(number, limit, power) {
  let total = 0;
  for(let i = 1 ; i <= number; i++){
    let cnt = 0;
    for(let j = 1 ; j <= Math.sqrt(i) ; j++){
      if(i % j === 0) {
        cnt += 1;
        if(i / j != j) cnt += 1;
      }  
    }
    cnt > limit ? total += power : total += cnt;
  }
  return total;
}

console.log(solution(10,3,2))

// number	limit	power	result
// 5	    3	    2	    10
// 10	    3	    2	    21