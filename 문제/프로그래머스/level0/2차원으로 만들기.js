function solution(arr, n){
  let nArr = [];
  for(let i = 0; i < arr.length; i = i + n)nArr.push(arr.slice(i, i + n))
  return nArr
}

console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3))