// 풀이1 => bfs 진행하였을 경우에 arr의 크기가 크기때문에 시간 초과
// function solution(arr){

//   let max = 0;
//   function dfs(value, select ,height){
//     if(height == arr.length-1) {
//       if(value > max) max = value;
//       return value;
//     }
//     arr[height+1].forEach((e, i) => {
//       if(i !== select) dfs(value + e , i,height+1)
//     });
//   }
//   arr[0].forEach((e, i) => dfs(e, i, 0))
//   return max;
// }

// 풀이2 => 풀이가 잘못됨.
// function solution(arr){

//   let val = [arr[0][0], arr[0][1], arr[0][2], arr[0][3]];
//   let chk = [0,1,2,3];
//   for(let i = 1; i < arr.length; i++){
//     for(let r = 0; r < chk.length; r++){
//       let max = Math.max(...arr[i].filter((e,i) => i != chk[r]));
//       val[r] += max; 
//       chk[r] = arr[i].indexOf(max);
//     }
//   }
  
//   return Math.max(...val)
// }



console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]), 16)
