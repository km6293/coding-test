// 첫번째 코드
// 시간 초과

// function solution(n){
//   let list = [0,1,2,3,5]

//   for(let i = 3; i <= 3 + n; i++){
//     list[i] = (list[i-1] + list[i-2]) % 1000000007
//   }

//   return list[n]
// }

function solution(n){
  const list = Array.from({length: n+1})
  list[0] = 0;
  list[1] = 1;
  list[2] = 2;
  
  for(let i = 3; i <= 3 + n; i++){
    list[i] = (list[i-1] + list[i-2]) % 1000000007
  }
  
  return list[n]
}

console.log(solution(4))
// n <= 60000


