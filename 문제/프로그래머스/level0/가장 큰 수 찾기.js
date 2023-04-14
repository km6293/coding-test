function solution(arr){
  return [Math.max(...arr),arr.findIndex(e => e ==  Math.max(...arr))]
}

console.log(solution([9, 10, 11, 8]))