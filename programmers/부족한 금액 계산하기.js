function solution(price, money, count) {
  let totalVal = 0;
  for(i = 1; i <= count; i++){  totalVal += (i * price); }
  return totalVal - money > 0 ? totalVal - money : 0;
}

console.log(solution(3,20,4))

// price	money	count	result
// 3	20	4	10
// 3 6 9 12 
// 9 9 12
// 18 12 
// 30