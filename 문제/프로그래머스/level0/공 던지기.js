function solution(arr, k){
  return arr[((k - 1) * 2) % arr.length]
}

console.log(solution([1, 2, 3], 5), 3)

// [1,2,3] k=5 기댓값:3