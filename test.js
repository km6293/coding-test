function solution(arr){
  let obj = {};
  let rArr = [];

  arr.forEach(e => {
    obj[e] == undefined ? obj[e] = 1 : obj[e] += 1;
  })

  for(let a in obj){
    if(obj[a] != 1) rArr.push(obj[a]);
  }
  
  return rArr
}

console.log(solution([1,2,3,3,3,3,4,4]))
// console.log(solution([3,2,4,4,2,5,2,5,5]))
// console.log(solution([3,5,7,9,1]))