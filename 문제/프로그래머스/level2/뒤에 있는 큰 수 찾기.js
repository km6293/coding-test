function solution(arr){
  let rArr = [];
  let cArr = [];
  for(let i = arr.length-1 ; i >= 0; i--){
    let val = arr.pop();
    let chk = undefined;
    for(let r = cArr.length-1; r >= 0; r--){
      if(cArr[r] > val){
        chk = cArr[r];
        break;
      }
    }
    cArr.push(val);
    chk == undefined ? rArr.push(-1) : rArr.push(chk);
  }
  return rArr.reverse()
}

// console.log(solution([2, 3, 3, 5]), [3, 5, 5, -1])
// console.log(solution([9, 1, 5, 3, 6, 2]), [-1, 5, 6, 6, -1, -1])
console.log(solution([10, 1, 10, 2, 10, 3, 10, 10, 10, 11, 11, 11, 12]), [11, 10, 11, 10, 11, 10, 11, 11, 11, 12, 12, 12, -1])

	
	