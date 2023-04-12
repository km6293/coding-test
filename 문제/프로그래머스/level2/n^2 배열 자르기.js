function solution(n, left, right) {
  let [leftQuotient,rightQuotient] = [parseInt(left / n), parseInt(right / n)];
  let [leftRemainder,rightRemainder] = [left % n, right % n];
  let arr = Array((rightQuotient - leftQuotient) * n).fill(0);

  let cnt = 0;
  for(let i = leftQuotient+1; i < rightQuotient+2 ; i++){
    for(let j = 1; j < n+1; j++){
      arr[cnt] = i > j ? i : j
      cnt += 1;
    }
  }

  arr = arr.slice(leftRemainder, n * (rightQuotient - leftQuotient) + rightRemainder + 1)

  return arr
}
// console.log(solution(3,2,5),[3,2,2,3])
// console.log(solution(3,1,6),[2,3,2,2,3,3])
// console.log(solution(4,7,14),[4,3,3,3,4,4,4,4])
console.log(solution(5,2,15),[3,4,5,2,2,3,4,5,3,3,3,4,5,4])
