function solution(arr){
  let val = -9999999999999999999999999999999999999;
  for(let i = 0; i < arr.length; i++){
    for(let r = i+1; r < arr.length; r++){
      if(arr[i] * arr[r] > val) val = arr[i] * arr[r]
    }
  }
  return val
}

console.log(solution([-7, -4, 1, 3]))