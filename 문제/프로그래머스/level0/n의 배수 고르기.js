function solution(n,arr){
  return arr.filter(e => e % n == 0)
}
console.log(solution(3,[4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 9, 12])
