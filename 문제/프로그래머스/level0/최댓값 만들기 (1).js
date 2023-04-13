function solution(arr){
  arr.sort((a,b) => b-a)  
  return arr[0] * arr[1]
}

console.log(solution([1, 2, 3, 4, 5]),20)