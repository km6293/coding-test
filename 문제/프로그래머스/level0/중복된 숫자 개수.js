function solution(arr, n){
  return arr.filter(e => e == n).length
}

console.log(solution([1, 1, 2, 3, 4, 5],1),2)