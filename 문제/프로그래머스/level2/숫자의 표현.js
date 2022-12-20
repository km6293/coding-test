function solution(n) {
  if(n < 3) return 1;
  let [sum, add] = [3,2];
  while(sum < n - add){
    add += 1;
    sum += add;
  }
  let [cnt,sum2,add2] = [0,0,0];
  for(let i = 2; i <= add; i++){
    add2 += 1;
    sum2 += add2;
    if((n - sum2) % i == 0) cnt += 1;
  }
  return cnt+1
}


console.log(solution(15), 4)
// console.log(solution(22), 4)
// console.log(solution(3), 4)


