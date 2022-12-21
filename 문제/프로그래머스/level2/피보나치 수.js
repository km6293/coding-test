function solution(n) {
  let [sum, left, right] = [0,0,1];
  for(let i = 2; i <= n; i++){
    sum = left + right;
    left = right;
    right = sum;
    if(sum >= 1234567) sum = sum % 1234567
    if(left >= 1234567) left = left % 1234567
    if(right >= 1234567) right = right % 1234567
  }
  if(sum >= 1234567) sum = sum % 1234567
  return sum
}

// console.log(solution(2),1)
// console.log(solution(3),2)
// console.log(solution(4),3)
// console.log(solution(5),5)
// console.log(solution(6),8)
// console.log(solution(7),13)
// console.log(solution(8),21)
// console.log(solution(9),34)
// console.log(solution(10),55)
// console.log(solution(11),89)
console.log(solution(47))
