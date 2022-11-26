function solution(d, budget) {
  d.sort((a,b)=> a-b);
  cnt = 0;
  total = budget;
  d.forEach(e => {
    if(total - e >= 0){
      cnt += 1;
      total -= e;
    }else{
      return cnt
    }
  })
  return cnt
}

console.log(solution([2,2,3,11],14))
// [1,3,2,5,4]	9	  3
// [2,2,3,3]	  10	4