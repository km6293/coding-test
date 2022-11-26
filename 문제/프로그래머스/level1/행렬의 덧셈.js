function solution(arr1, arr2) {
  let arr = new Array(arr1.length).fill().map(()=> new Array());
  for(var i=0; i < arr1.length; i++){
    for(var j=0; j < arr1[0].length; j++){
      arr[i][j] = arr1[i][j] + arr2[i][j]
    }
  }
  return arr;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))