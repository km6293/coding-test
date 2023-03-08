function solution(n, arr, m){
  let cnt = 0;
  // [0, 0, 0] 형식
  let tmp = Array.from({length : n}, () => 0);
  // a의 역할 : 0 => 시작, n => 끝 확인하기 위함
  // b의 역할 : for문 i
  function dfs(a, b){
    // n == 3 일 경우
    if(n == a){
      let sum = 0;
      [...tmp].forEach(e => {
        sum += arr[e-1];
      })
      // tmp의 합이 해당 값의 배수라면 cnt += 1 해줌
      if(sum % m == 0) cnt += 1; 
    } 
    else{
      for(let i = b; i <= arr.length; i++){
        tmp[a] = i;
        dfs(a+1, i+1);
      }
    }
  }
  dfs(0, 1)
  return cnt
}

console.log(solution(3,[2 ,4 ,5 ,8 ,12], 6))

// dfs(0, 1) => [0, 0, 0]
//  dfs(1, 2) => [1, 0, 0]
//    dfs(2, 3) => [1, 2, 0]
//      dfs(3, 4) => [1, 2, 3]
//      dfs(3, 5) => [1, 2, 4]
//      dfs(3, 6) => [1, 2, 5]
//    dfs(2, 4) => [1, 3, 5]
//      dfs(3, 5) => [1, 3, 4]
//      dfs(3, 6) => [1, 3, 5]
//    dfs(2, 5) => [1, 4, 5]
//      dfs(3, 6) => [1, 4, 5]
//    dfs(2, 6) => [1, 5, 5]
//  dfs(1, 3) => [2, 5, 5]
//    dfs(2, 4) => [2, 3, 5]
//      dfs(3, 5) => [2, 3, 4]
//      dfs(3, 6) => [2, 3, 5]
//    dfs(2, 5) => [2, 4, 5]
//      dfs(3, 6) => [2, 4, 5]
//    dfs(2, 6) => [2, 5, 5]
//  dfs(1, 4) => [3, 5, 5]
//    dfs(2, 5) => [3, 4, 5]
//      dfs(3, 6) => [3, 4, 5]
//    dfs(2, 6) => [3, 5, 5]
//  dfs(1, 5) => [4, 5, 5]
//    dfs(2, 6) => [4, 5, 5]
//  dfs(1, 6) => [5, 5, 5]

// 강사님풀이
// function solution(n, k, arr, m){         
//   let answer=0;
//   function DFS(L, s, sum){
//      if(L===k){
//           if(sum%m===0) answer++;
//      }
//      else{
//          for(let i=s; i<n; i++){
//              DFS(L+1, i+1, sum+arr[i]);
//          }
//      }
//   }

//   DFS(0, 0, 0);
//   return answer;
// }

// let arr=[2, 4, 5, 8, 12];
// console.log(solution(5, 3, arr, 6));