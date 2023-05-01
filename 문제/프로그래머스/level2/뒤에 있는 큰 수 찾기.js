// 실패하여 풀이를 보게 됨.
function solution(arr){
  let rArr = Array(arr.length).fill(-1);
  let sArr = [];
  for(let i = 0; i < arr.length; i++){
    while(arr[i] > arr[sArr.at(-1)]){
      rArr[sArr.pop()] = arr[i];
    }
    sArr.push(i);
  }
  return rArr
}

console.log(solution([2, 3, 3, 5]), [3, 5, 5, -1])
// console.log(solution([9, 1, 5, 3, 6, 2]), [-1, 5, 6, 6, -1, -1])
// console.log(solution([10, 1, 10, 2, 10, 3, 10, 10, 10, 11, 11, 11, 12]), [11, 10, 11, 10, 11, 10, 11, 11, 11, 12, 12, 12, -1])
