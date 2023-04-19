function solution(arr){
  let nArr = [...new Set(arr)];
  let mArr = nArr.map(e => arr.filter(r => e == r).length);
  let max = Math.max(...mArr);
  if(mArr.indexOf(max) != mArr.lastIndexOf(max)) return -1
  else{
    return nArr[mArr.indexOf(max)]
  }
}

console.log(solution([1, 2, 3, 3, 3, 4]), 3)