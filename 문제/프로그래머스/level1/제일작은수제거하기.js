function solution(arr) {
  if(arr.length == 1){
    return [-1]
  } else{
    let arr2 = Math.min(...arr)
    let filtered = arr.filter((element) => element !== arr2);
    return filtered;
  }  
}

console.log(solution([4,2,3,1]))