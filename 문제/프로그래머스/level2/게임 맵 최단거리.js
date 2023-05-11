// 풀이 1 -> dfs 로 풀었을 때, 효율성 검사에서 시간 초과 및 런타임 에러

// function solution(arr){
//   let val = []
//   let dx = [-1, 1, 0, 0];
//   let dy = [0, 0, 1, -1];

//   function dfs(x, y, cnt){
//     if(x == arr.length -1 && y == arr[0].length -1) return val.push(cnt);
//     for(let i = 0; i < 4; i++){
//       let mx = x+dx[i];
//       let my = y+dy[i];
//       if(mx >= 0 && mx <= arr.length-1 && my >= 0 && my <= arr[0].length-1 && arr[mx][my] == 1){
//         arr[mx][my] = 0;
//         dfs(mx, my, cnt+1)
//         arr[mx][my] = 1;
//       }
//     }
//   }
//   dfs(0, 0, 1)
//   console.log(val)
//   return val.length == 0 ? -1 : Math.min(...val)
// }


function solution(arr){

  let queue = [[0,0,1]];
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];
  const chkRoad = (x,y) => x >= 0 && x <= arr.length-1 && y >= 0 && y <= arr[0].length && arr[x][y] == 1;

  while(queue.length){
    let [x,y,cnt] = queue.shift();
    if(x == arr.length-1 && y == arr[0].length-1) return cnt
    for(let i = 0 ; i < 4; i++){
      let mx = dx[i] + x;
      let my = dy[i] + y;
      
      if(chkRoad(mx, my)) {
        queue.push([mx,my, cnt+1])
        arr[mx][my] = 0;
      }
    }
  }

  return -1
}
// arr[mx][my] = 0; 를 밑에 두지 않을시에 중복 처리가 많이 일어났을거라고 예상.

// console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]), 11)
// console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]), -1)
console.log(solution([[1,1,0,1,1],[1,1,1,1,1],[1,1,0,1,1]]), 7)

