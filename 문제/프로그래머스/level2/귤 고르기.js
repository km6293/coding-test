function solution(n, arr) {

  let cnt = 0;
  let obj = {}
  arr.forEach(e => obj[e] = (obj[e] || 0) + 1);

  let sArr = Object.values(obj).sort((a,b) => a - b)
  while(n > 0){
    n -= sArr.pop()
    cnt += 1;
  }
  return cnt
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]), 3)
// console.log(solution(2	,[1, 1, 1, 1, 2, 2, 2, 3]), 1)
