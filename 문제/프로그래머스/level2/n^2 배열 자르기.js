function solution(n, left, right) {
  let arr = [];
  let [leftQuotient,rightQuotient] = [parseInt(left / n), parseInt(right / n)];
  let [leftRemainder,rightRemainder] = [left % n, right % n];

  for(let i = leftQuotient+1; i < rightQuotient+2 ; i++){
    for(let j = 1; j < n+1; j++){
      i > j ? arr.push(i) : arr.push(j)
    }
  }
  for(let i = 0; i < leftRemainder; i++) arr.shift()
  for(let i = 0; i < n - rightRemainder -1; i++) arr.pop()

  return arr
}

// console.log(solution(3,2,5),[3,2,2,3])
console.log(solution(4,7,14),[4,3,3,3,4,4,4,4])

