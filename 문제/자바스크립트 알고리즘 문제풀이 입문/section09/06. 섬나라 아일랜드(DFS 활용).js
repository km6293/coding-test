function solution(arr){
  //        좌,좌상,상,우상,우,우하,하,좌하 
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1 ,-1];
  let cnt = 0;
  let n = arr.length;
  function dfs(x, y){
    arr[x][y] = 0;
    for(let k = 0; k < 8; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];
      if(nx >= 0 && ny >= 0 && nx < n && ny < n && arr[nx][ny] == 1) dfs(nx, ny);
    }
  }

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(arr[i][j] == 1){
        arr[i][j] = 0;
        cnt += 1;
        dfs(i, j);
      }
    }
  }
  return cnt

}

let arr=[ [1, 1, 0, 0, 0, 1, 0], 
          [0, 1, 1, 0, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 1, 1],
          [1, 1, 0, 1, 1, 0, 0],
          [1, 0, 0, 0, 1, 0, 0],
          [1, 0, 1, 0, 1, 0, 0]
        ];
console.log(solution(arr));