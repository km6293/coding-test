function solution(n, lost, reserve) {
  let arr = Array(n).fill(1);
  lost.forEach(e => arr[e-1] = 0 );
  reserve.forEach(e => arr[e-1] += 1);
  arr.forEach((e,i) => {
    if(e == 0){
      if(arr[i-1] == 2){
        arr[i-1] = 1;
        arr[i] = 1;
      }else if(arr[i+1] == 2){
        arr[i+1] = 1;
        arr[i] = 1;
      }
    }
  })
  return arr.filter(e => e > 0).length
}

// console.log(solution(5	,[2, 4]	,[1, 3, 5]), 5)
// console.log(solution(5	,[2, 4]	,[3]	),4)
// console.log(solution(3	,[3]	,[1]	), 2)
// console.log(solution(10	,[1,3,4,7,9]	,[1,5,8]	), 8)
console.log(solution(5,[1,5],[2,3,4]),5)