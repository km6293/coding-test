function solution(sizes) {
  let maxLeftVal = 0;
  let maxRigthVal = 0;
  let arr = [];
  sizes.forEach(e => arr = arr.concat(e) )
  maxLeftVal = Math.max.apply(Math, arr);  
  sizes.forEach(e => {
    let nextVal = e[1] > e[0] ? e[0] : e[1];
    if(maxRigthVal < nextVal){
      maxRigthVal = nextVal;
    }
  })
  return maxLeftVal*maxRigthVal ;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7] , [12, 3] , [8, 15] , [14, 7] , [5, 15]]))
console.log(solution([[14, 4] , [19, 6] , [6, 16] , [18, 7] , [7, 11]]))
// [[60, 50], [30, 70], [60, 30], [80, 40]         ]	4000
// [[10, 7] , [12, 3] , [8, 15] , [14, 7] , [5, 15]]	120
// [[14, 4] , [19, 6] , [6, 16] , [18, 7] , [7, 11]]	133