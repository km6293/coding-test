function solution(arr){
  let cnt = 0;
  //        좌, 상, 우, 하
  let nx = [-1, 0, 1, 0];
  let ny = [0, 1, 0, -1];

  function dfs(x, y){
    if(x == 6 && y == 6) cnt += 1;
    else{
      for(let i = 0; i < 4; i++){
        let mx = x + nx[i];
        let my = y + ny[i];

        if(mx >= 0 && my >= 0 && mx <= 6 && my <= 6 && arr[mx][my] == 0){
          arr[mx][my] = 1;
          dfs(mx, my);
          arr[mx][my] = 0;
        }
      }
    }
  }

  arr[0][0] = 1;
  dfs(0,0)

  return cnt;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];
console.log(solution(arr))