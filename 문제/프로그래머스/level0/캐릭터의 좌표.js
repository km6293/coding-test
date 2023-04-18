function solution(sArr, mArr){
  let cArr = [(mArr[0] - 1)/2, (mArr[1] - 1)/2]
  let rArr = [0,0];
  sArr.map(e => {
    if(e == 'down' && rArr[1] > -cArr[1]){
      rArr[1] -= 1;
    }else if(e == 'up' && rArr[1] < cArr[1]){
      rArr[1] += 1;
    }else if(e == 'left' && rArr[0] > -cArr[0]){
      rArr[0] -= 1;
    }else if(e == 'right' && rArr[0] < cArr[0]){
      rArr[0] += 1;
    }
  })
  return rArr
}

// console.log(solution(["left", "left", "left", "left", "right", "right", "right", "right"],[5,5]), [2,0])
console.log(solution(["right", "right", "right", "right","left", "left", "left", "left"],[5,5]), [-2,0])
