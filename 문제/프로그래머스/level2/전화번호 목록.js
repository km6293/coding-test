function solution(list){
  return !list.sort().some((value, index, array) => array[index+1]?.indexOf(value) === 0)
}

// console.log(solution(["97674223", "1195524421","119"]))
console.log(solution(["123","456","789"]))
// console.log(solution(["12","123","1235","567","88"]))
