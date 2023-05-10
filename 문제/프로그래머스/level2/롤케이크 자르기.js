// 풀이1 => 시간 초과

// function solution(topping) {
//   let restSet = new Set();
//   let cnt = 0;
//   for(let i = 0; i < topping.length; i++){
//     let a = new Set(topping.slice(i));
//     let b = new Set(topping.slice(0, i));
//     if(a.size == b.size) cnt += 1;
//   }
//   return cnt
// }

// 풀이2 = > 시간 초과

// function solution(topping) {
//   let nowMap = {};
//   let restMap = {};
//   let cnt = 0;
//   topping.forEach(e => {
//     nowMap[e] == undefined ? nowMap[e] = 1 : nowMap[e] += 1;
//     if(restMap[e] == undefined) restMap[e] = 0;
//   });

//   for(let i = 0 ; i < topping.length; i++){   
//     let nowValue = topping[i];
//     nowMap[nowValue] -= 1;
//     restMap[nowValue] += 1;
//     if(Object.values(nowMap).filter(value => value !== 0).length == Object.values(restMap).filter(value => value !== 0).length) cnt += 1;
//   }
  
//   return cnt
// }

// 풀이 3 단순 실수
// function solution(topping){
//   let toppingSet = [...new Set(topping)];
//   let restSet = new Set();
//   let cnt = 0;
//   for(let i = 0 ; i < topping.length; i++){
//     restSet.add(topping[i]);
//     if(restSet.size == toppingSet.length/2) cnt += 1;
//   }
//   return cnt
// }

// 풀이 4 => 시간 초과
// function solution(topping){
//   let restSet = new Set();
//   let cnt = 0;
//   for(let i = topping.length ; i >= 0; i--){
//     restSet.add(topping.pop());
//     if(restSet.size == new Set(topping).size) cnt += 1;
//   }
//   return cnt
// }


// 풀이 5
function solution(topping) {
  let nowMap = {};
  let restMap = {};
  let cnt = 0;
  topping.forEach(e => {
    nowMap[e] == undefined ? nowMap[e] = 1 : nowMap[e] += 1;
    if(restMap[e] == undefined) restMap[e] = 0;
  });
  
  let nowCnt = Object.keys(nowMap).length;
  let restCnt = 0;

  for(let i = 0 ; i < topping.length; i++){   
    let nowValue = topping[i];
    nowMap[nowValue] -= 1;
    restMap[nowValue] += 1;
    if(nowMap[nowValue] == 0) nowCnt -= 1;
    if(restMap[nowValue] == 1) restCnt += 1;
    if(nowCnt == restCnt) cnt += 1;
  }
  
  return cnt
}

// console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]), 2)
console.log(solution([1, 2, 3, 1, 4]), 0)