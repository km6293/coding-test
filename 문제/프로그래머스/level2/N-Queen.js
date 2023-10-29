// function check(queen, row) {
//   // 이전까지 두었던 퀸의 위치를 확인한다.
//   for (let i = 0; i < row; i += 1) {
//       // 행의 위치와 대각선의 위치를 체크한다.
//       if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i) {
//           return false; // 둘 수 없다면 false
//       }
//   }
  
//   return true; // 모두 통과되면 true
// }

// function search(queen, row) {
//   const n = queen.length;
//   let count = 0;
  
//   if (n === row) { // 체스판 끝에 도달했다면.. 재귀의 탈출 조건
//       return 1;
//   }
  
//   for (let col = 0; col < n; col += 1) { // 0부터 n까지 열을 돌면 둘 수 있게 만든다.
//       queen[row] = col; // 우선 퀸을 둔다
//       if (check(queen, row)) { // 퀸을 둘 수 있다면..
//           count += search(queen, row + 1); // 다음 행으로 이동!
//       }
//   }
  
//   return count;
// }

// function solution(n) {
//   // 미리 n개 만큼의 배열을 초기화한다. 0번 행부터 시작한다.
//   return search(Array.from({ length: n }, () => 0), 0);
// }

function solution(n) {
  return search(Array.from({ length: n }, () => 0), 0);
}

function search(queen, row) {
  let count = 0;
  if (queen.length === row) return 1;
  
  for (let col = 0; col < queen.length; col++) { 
    queen[row] = col; 
    if (check(queen, row)) count += search(queen, row + 1); 
  }
  return count;
}

function check(queen, row) {
  for (let i = 0; i < row; i++) {
    if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i) return false; 
  }
  
  return true;
}

// console.log(solution(1))
// console.log(solution(2))
// console.log(solution(3))
// console.log(solution(4))
// console.log(solution(5))
// console.log(solution(6))
// console.log(solution(7))
// console.log(solution(8))
// console.log(solution(9))
// console.log(solution(10))
// console.log(solution(11))
// console.log(solution(12))
// console.log(solution(13))
// console.log(solution(14))
console.log(solution(15))
// 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596, 2279184
