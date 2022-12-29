function solution(a,arr){
  for(let i = 1; i < a; i++){
    if(arr[i-1] >= arr[i]) arr.splice(i,1)
  }
  return arr
}

console.log(solution(6, [7 ,3 ,9 ,5 ,6 ,12]), [7,9,6,12]);