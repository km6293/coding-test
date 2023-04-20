function solution(arr){
  return arr[1]-arr[0] == arr[arr.length-1] - arr[arr.length -2] ? 
        arr[arr.length-1] + (arr[1] - arr[0]) : 
        (( arr[arr.length-1] - arr[arr.length-2] ) / ( arr[arr.length-2] - arr[arr.length-3])) * arr[arr.length-1]
}

console.log(solution([1,2,4]), 8)
