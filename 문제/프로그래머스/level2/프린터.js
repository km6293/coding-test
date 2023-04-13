function solution(arr, num){

  let nArr = new Array(arr.length).fill(0);
  nArr[num] = -1 
  let sArr = [...arr].sort((a,b) => b - a);
  let cnt = 1;
  
  while(true){
    
    let fIndex = arr.findIndex(e => e == sArr[0]);
    console.log(arr, nArr, sArr, fIndex)
    arr = [...arr.slice(fIndex, arr.length) , ...arr.slice(0, fIndex)]
    nArr = [...nArr.slice(fIndex, nArr.length) , ...nArr.slice(0, fIndex)]
    
    if(nArr[0] == -1){
      break;
    }else{
      arr.shift()
      nArr.shift()
      sArr.shift()
      cnt += 1;
    }
    
  }
    
  return cnt
}

// console.log(solution([2, 1, 3, 2], 2), 1)
// console.log(solution([1, 2, 3], 2), 1)
// console.log(solution([1, 1, 9, 1, 1, 1], 0), 5)
// console.log(solution([1,5,4,1], 3), 3)
console.log(solution([5,5,4,1], 0), 1)
// console.log(solution([1,1,1,1], 3), 4)

