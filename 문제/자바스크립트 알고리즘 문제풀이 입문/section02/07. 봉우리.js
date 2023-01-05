function solution(arr){
  let cnt = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      console.log(i,j)
      if(i != 0 && arr[i][j] < arr[i-1][j]) break;
      if(i != arr.length-1 && arr[i][j] < arr[i+1][j]) break;
      if(j != 0 && arr[i][j] < arr[i][j-1]) break;
      if(j != arr.length-1 && arr[i][j] < arr[i][j+1]) break;
      cnt+=1;
    }
  }
  return cnt;
}

console.log(
  solution(
      [
        [5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1], 
        [7, 2, 5, 3, 4], 
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2] 
      ]
    ),10
  )











