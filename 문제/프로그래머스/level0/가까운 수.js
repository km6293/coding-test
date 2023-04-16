function solution(arr, n){
  val = arr[0];
  arr.sort((a,b) => a - b)
  for(let i = 1; i < arr.length; i++){
    if((Math.abs((arr[i] - n)) < Math.abs(val - n))) val = arr[i]
  }
  return val
}

console.log(solution([3, 10, 28, 12, 28],20))