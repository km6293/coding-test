// 풀이 1 => x -> y 가는 법 
// 런타임 에러, 시간 에러

// function solution(x, y, n){
//   let min = 9999
//   function bfs(val, num){
//     if(val > y) return -1
//     if(val == y) {
//       if(min > num) min = num;
//       return
//     }
//     if(val < y){
//       bfs(val + n, num+1)
//       bfs(val * 2, num+1)
//       bfs(val * 3, num+1)
//     }
//   }
//   bfs(x, 0)
//   return min == 9999 ? -1 : min
// }

// 풀이 2 => y -> x 로 가는 법 
// 런타임 에러, 시간 에러

// function solution(x,y,n){
//   let min = 9999;
//   function bfs(val, num){
//     if(num > min) return
//     if(val == x){
//       if(min > num) min = num;
//       return;
//     }
//     if(val < x) return -1;
//     if(val > x){
//       bfs(val -n, num+1);
//       if(val % 6 == 0 || Number.isInteger(val / 3))bfs(val / 3, num +1);
//       else{
//         if(Number.isInteger(val / 2)) bfs(val / 2, num +1);
//       }
//     }
//   }
//   bfs(y, 0)
//   return min == 9999 ? -1 : min
// }

function solution(x, y, n) {

  let arr = new Array(y+1).fill(Infinity);
  arr[x] = 0;

  for(let i = x+1; i < y+1; i++){
    if(x <= i - n) arr[i] = Math.min(arr[i], arr[i-n] + 1);
    if(i % 2 === 0 && x <= i / 2) arr[i] = Math.min(arr[i], arr[i/2]+1);
    if(i % 3 === 0 && x <= i / 3) arr[i] = Math.min(arr[i], arr[i/3]+1);
  }

  return arr[y] == Infinity ? -1 : arr[y];
}


// console.log(solution(10,40,5), 2)
// console.log(solution(10,40,30),1)
console.log(solution(2,5,4),-1)