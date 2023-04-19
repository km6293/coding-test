function solution(arr){
  let sum = arr.reduce((a,b) => a + b);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let cnt = 0;
  cnt += sum - (max + 1)
  cnt += max - (max - min);
  return cnt
}

// console.log(solution([1, 2]), 1)
console.log(solution([3, 6]), 5)