let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n')
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
let dy = [0, 1, 1, 1, 0, -1, -1 ,-1];

function solution(arr){
  let cnt = 0;
  let [n,m] = [arr.length, arr[0].length];

  function dfs(x, y){
    arr[x][y] = 0;
    for(let k = 0; k < 8; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];
      if(nx >= 0 && ny >= 0 && nx < n && ny < m && arr[nx][ny] == 1) dfs(nx, ny);
    }
  }

  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      if(arr[i][j] == 1){
        arr[i][j] = 0;
        cnt += 1;
        dfs(i, j);
      }
    }
  }
  return cnt
}

const rArr = [];
for(let i = 0; i < input.length-1; i++){
  let [row, col] = input[i].split(' ').map(Number)
  let cnt = solution(input.slice(i+1, i+col+1).map(e => e.split(' ').map(Number)));
  i += col
  rArr.push(cnt)
}
console.log(rArr.join('\n'))